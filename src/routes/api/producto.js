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
		const { producto, id_producto } = await request.json();
		console.log(wea);

		await db.query('UPDATE productos SET nombre = $1 WHERE id = $2', [producto, id_producto]);

		return { body: { message: 'Producto Actualizado exitosamente!' } };
	} catch (error) {
		console.log(error);
		return {};
	}
}

export async function del({url}) {
	try {
		
        const id_producto = url.searchParams.get('id_producto')
        const producto = url.searchParams.get('producto')
	

		await db.query('DELETE FROM productos WHERE id = $1 OR nombre = $2 ', [id_producto, producto]);

		return { body: { message: 'Producto Eliminado exitosamente!' } };
	} catch (error) {
		console.log(error);
		return {};
	}
}
