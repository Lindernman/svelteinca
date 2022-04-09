import db from '$lib/db';

export async function get() {
	const { rows } = await db.query('select * from productos  ORDER BY ID DESC LIMIT 7');
	return {
		body: { datos: rows }
	};
}

export async function post({ request }) {
	try {
		const wea = await request.json();
		console.log(wea);

		await db.query('INSERT INTO productos(nombre) SELECT $1', [wea.producto]);

		return { body: { message: 'Producto ingresado exitosamente!' } };
	} catch (error) {
		console.log(error);
		return {};
	}
}

export async function put({ request }) {
	try {
		const wea = await request.json();
		console.log(wea);

		// await db.query('UPDATE productos SET nombre = $1 WHERE id = $2', [
		// 	wea.producto,
		// 	wea.id_producto
		// ]);

		return { body: { message: 'Producto ingresado exitosamente!' } };
	} catch (error) {
		console.log(error);
		return {};
	}
}
