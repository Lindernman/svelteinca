import db from '$lib/db';

export async function get() {
	const {rows} = await db.query('select * from vendedores');
	return {
		body: { datos: rows }
	};
}
