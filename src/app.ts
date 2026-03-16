import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { excuses, CATEGORIES, type Category } from './excuses.js';

const app = new Hono().basePath('/api');

app.use('*', cors());

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function isCategory(v: string): v is Category {
    return (CATEGORIES as readonly string[]).includes(v);
}

app.get('/excuse', (c) => {
    const category = c.req.query('category');
    if (category) {
        if (!isCategory(category)) {
            return c.json(
                { error: 'Invalid category', categories: CATEGORIES },
                400
            );
        }
        return c.json(pick(excuses.filter((e) => e.category === category)));
    }
    return c.json(pick(excuses));
});

app.get('/excuse/:id', (c) => {
    const excuse = excuses.find((e) => e.id === Number(c.req.param('id')));
    if (!excuse) return c.json({ error: 'Excuse not found' }, 404);
    return c.json(excuse);
});

app.get('/excuses', (c) => {
    const category = c.req.query('category');
    const limit = Math.min(Number(c.req.query('limit')) || 20, 100);
    const offset = Number(c.req.query('offset')) || 0;

    let source = excuses;
    if (category) {
        if (!isCategory(category)) {
            return c.json(
                { error: 'Invalid category', categories: CATEGORIES },
                400
            );
        }
        source = excuses.filter((e) => e.category === category);
    }

    return c.json({
        excuses: source.slice(offset, offset + limit),
        total: source.length,
        limit,
        offset,
    });
});

app.get('/categories', (c) => {
    return c.json({ categories: CATEGORIES });
});

export default app;
