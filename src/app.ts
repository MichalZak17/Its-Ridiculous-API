import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { describeRoute, resolver, openAPIRouteHandler } from 'hono-openapi';
import { z } from 'zod';
import { excuses, CATEGORIES, type Category } from './excuses.js';
import { rateLimit } from './rate-limit.js';

const app = new Hono().basePath('/api');

app.use('*', cors());

const apiLimiter = rateLimit({ limit: 60, windowMs: 60_000 });
const docsLimiter = rateLimit({ limit: 10, windowMs: 60_000 });

app.use('/docs', docsLimiter);
app.use('/openapi.json', docsLimiter);
app.use('*', async (c, next) => {
    const path = c.req.path.replace(/^\/api/, '');
    if (path === '/docs' || path === '/openapi.json') return next();
    return apiLimiter(c, next);
});

function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function isCategory(v: string): v is Category {
    return (CATEGORIES as readonly string[]).includes(v);
}

// ── Schemas ──────────────────────────────────────────────

const ExcuseSchema = z.object({
    id: z.number().int(),
    excuse: z.string(),
    ridiculous_rating: z.number().int().min(1).max(10),
    category: z.enum(CATEGORIES),
    will_work: z.boolean(),
    teacher_reaction: z.string(),
});

const ErrorSchema = z.object({
    error: z.string(),
    categories: z.array(z.string()).optional(),
});

const ExcuseListSchema = z.object({
    excuses: z.array(ExcuseSchema),
    total: z.number().int(),
    limit: z.number().int(),
    offset: z.number().int(),
});

const CategoriesSchema = z.object({
    categories: z.array(z.string()),
});

// ── Routes ───────────────────────────────────────────────

app.get(
    '/excuse',
    describeRoute({
        tags: ['Excuses'],
        summary: 'Get a random excuse',
        description:
            'Returns a single random excuse. Optionally filter by category.',
        parameters: [
            {
                name: 'category',
                in: 'query',
                required: false,
                description: `Filter by category. One of: ${CATEGORIES.join(', ')}`,
                schema: { type: 'string', enum: [...CATEGORIES] },
            },
        ],
        responses: {
            200: {
                description: 'A random excuse',
                content: {
                    'application/json': { schema: resolver(ExcuseSchema) },
                },
            },
            400: {
                description: 'Invalid category',
                content: {
                    'application/json': { schema: resolver(ErrorSchema) },
                },
            },
        },
    }),
    (c) => {
        const category = c.req.query('category');
        if (category) {
            if (!isCategory(category)) {
                return c.json(
                    { error: 'Invalid category', categories: CATEGORIES },
                    400
                );
            }
            return c.json(
                pick(excuses.filter((e) => e.category === category))
            );
        }
        return c.json(pick(excuses));
    }
);

app.get(
    '/excuse/:id',
    describeRoute({
        tags: ['Excuses'],
        summary: 'Get excuse by ID',
        description: 'Returns a specific excuse by its numeric ID.',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'The excuse ID',
                schema: { type: 'integer' },
            },
        ],
        responses: {
            200: {
                description: 'The requested excuse',
                content: {
                    'application/json': { schema: resolver(ExcuseSchema) },
                },
            },
            404: {
                description: 'Excuse not found',
                content: {
                    'application/json': {
                        schema: resolver(
                            z.object({ error: z.string() })
                        ),
                    },
                },
            },
        },
    }),
    (c) => {
        const excuse = excuses.find(
            (e) => e.id === Number(c.req.param('id'))
        );
        if (!excuse) return c.json({ error: 'Excuse not found' }, 404);
        return c.json(excuse);
    }
);

app.get(
    '/excuses',
    describeRoute({
        tags: ['Excuses'],
        summary: 'List excuses (paginated)',
        description:
            'Returns a paginated list of excuses. Optionally filter by category.',
        parameters: [
            {
                name: 'category',
                in: 'query',
                required: false,
                description: `Filter by category. One of: ${CATEGORIES.join(', ')}`,
                schema: { type: 'string', enum: [...CATEGORIES] },
            },
            {
                name: 'limit',
                in: 'query',
                required: false,
                description: 'Max excuses to return (default 20, max 100)',
                schema: { type: 'integer', default: 20, maximum: 100 },
            },
            {
                name: 'offset',
                in: 'query',
                required: false,
                description: 'Number of excuses to skip (default 0)',
                schema: { type: 'integer', default: 0 },
            },
        ],
        responses: {
            200: {
                description: 'Paginated excuse list',
                content: {
                    'application/json': {
                        schema: resolver(ExcuseListSchema),
                    },
                },
            },
            400: {
                description: 'Invalid category',
                content: {
                    'application/json': { schema: resolver(ErrorSchema) },
                },
            },
        },
    }),
    (c) => {
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
    }
);

app.get(
    '/categories',
    describeRoute({
        tags: ['Categories'],
        summary: 'List all categories',
        description: 'Returns all available excuse categories.',
        responses: {
            200: {
                description: 'List of categories',
                content: {
                    'application/json': {
                        schema: resolver(CategoriesSchema),
                    },
                },
            },
        },
    }),
    (c) => {
        return c.json({ categories: CATEGORIES });
    }
);

// ── OpenAPI spec & Swagger UI ────────────────────────────

app.get(
    '/openapi.json',
    openAPIRouteHandler(app, {
        documentation: {
            info: {
                title: "It's Ridiculous API",
                version: '1.0.0',
                description:
                    'The most ridiculously creative excuses for not submitting homework on time. Dedicated to all students who have mastered the art of creative storytelling.',
            },
            tags: [
                {
                    name: 'Excuses',
                    description: 'Get and browse ridiculous homework excuses',
                },
                {
                    name: 'Categories',
                    description: 'Browse excuse categories',
                },
            ],
        },
    })
);

app.get('/docs', (c) => {
    return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>It's Ridiculous API — Docs</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
    <style>
        body { margin: 0; background: #fafafa; }
        .swagger-ui .topbar { display: none; }
    </style>
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
    <script>
        SwaggerUIBundle({
            url: "/api/openapi.json",
            dom_id: "#swagger-ui",
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            layout: "BaseLayout"
        });
    </script>
</body>
</html>`);
});

export default app;
