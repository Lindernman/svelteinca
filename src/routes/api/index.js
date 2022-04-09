import db from '$lib/db';

export async function get() {
	const { rows } = await db.query('select * from productos');
	return {
		body: { hola: rows }
	};
}
