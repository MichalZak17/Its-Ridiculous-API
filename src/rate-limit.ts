import type { Context, Next } from 'hono';

interface RateLimitEntry {
    timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes to prevent memory leaks
setInterval(
    () => {
        const now = Date.now();
        for (const [key, entry] of store) {
            entry.timestamps = entry.timestamps.filter(
                (t) => now - t < 120_000
            );
            if (entry.timestamps.length === 0) store.delete(key);
        }
    },
    5 * 60 * 1000
);

function getClientIP(c: Context): string {
    return (
        c.req.header('x-forwarded-for')?.split(',')[0]?.trim() ||
        c.req.header('x-real-ip') ||
        'unknown'
    );
}

export function rateLimit(opts: { limit: number; windowMs: number }) {
    const { limit, windowMs } = opts;

    return async (c: Context, next: Next) => {
        const ip = getClientIP(c);
        const key = `${ip}:${limit}`;
        const now = Date.now();

        let entry = store.get(key);
        if (!entry) {
            entry = { timestamps: [] };
            store.set(key, entry);
        }

        // Drop timestamps outside the window
        entry.timestamps = entry.timestamps.filter(
            (t) => now - t < windowMs
        );

        const resetAt = Math.ceil(
            (entry.timestamps.length > 0
                ? entry.timestamps[0] + windowMs
                : now + windowMs) / 1000
        );

        if (entry.timestamps.length >= limit) {
            const retryAfter = Math.ceil(
                (entry.timestamps[0] + windowMs - now) / 1000
            );
            c.header('X-RateLimit-Limit', String(limit));
            c.header('X-RateLimit-Remaining', '0');
            c.header('X-RateLimit-Reset', String(resetAt));
            c.header('Retry-After', String(retryAfter));
            return c.json(
                {
                    error: 'Too many requests. Slow down, your homework excuses can wait.',
                },
                429
            );
        }

        entry.timestamps.push(now);
        const remaining = limit - entry.timestamps.length;

        c.header('X-RateLimit-Limit', String(limit));
        c.header('X-RateLimit-Remaining', String(remaining));
        c.header('X-RateLimit-Reset', String(resetAt));

        await next();
    };
}
