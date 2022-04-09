<script context="module">
	export async function load() {
		const response = await fetch('http://localhost:3000/api/producto');
		let { datos } = await response.json();
		return {
			props: { datos }
		};
	}
</script>

<script>
	import { get, post, put } from '$lib/api';

	export let datos;
	let producto = '';
	let mensaje = '';
	let id_producto = 0;

	async function ingresaProducto() {
		const respuesta = await post('producto', { producto });
		mensaje = respuesta.message;
		const nuevalista = await get('producto');
		datos = nuevalista.datos;
	}
	async function actualizaProducto() {
		const respuesta = await put('producto', { producto, id_producto });
		mensaje = respuesta.message;
		const nuevalista = await get('producto');
		datos = nuevalista.datos;
	}
</script>

{#each datos as item}
	ID: {item.id} - Nombre {item.nombre}
	<br />
{/each}

<br />

{#if mensaje}
	{mensaje}
{/if}

<label for=""> Nombre produsto </label>

<input
	bind:value={producto}
	class="input is-primary has-background-dark has-text-white my-2"
	type="text"
	placeholder="Primary input"
/>
<button class=" button is-success" on:click={ingresaProducto}>Ingresar producto</button>
<div>
	{producto}
</div>

<label for=""> Nombre produsto </label>

<input
	bind:value={producto}
	class="input is-primary has-background-dark has-text-white my-2"
	type="text"
	placeholder="Primary input"
/>
<label for=""> ID produsto </label>

<input
	bind:value={id_producto}
	class="input is-primary has-background-dark has-text-white my-2"
	type="number"
	placeholder="Primary input"
/>
<button class=" button is-success" on:click={actualizaProducto}>Actualizar producto</button>
<div>
	{producto} - {id_producto}
</div>
