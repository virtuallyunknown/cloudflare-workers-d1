import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono<{ Bindings: Env }>();
app.use('*', cors());

app.get('/', async (c) => {
	const players = await c.env.DB.exec('SELECT * FROM players');

	return c.json(players);
});

export default app;
