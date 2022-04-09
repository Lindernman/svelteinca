<script context="module">
	export async function load() {
		const response = await fetch('http://localhost:3000/api/vendedores');
		let { datos } = await response.json();
		return {
			props: { datos }
		};
	}
</script>

<script>
	export let datos;
	console.log(datos);
</script>

{#each datos as item}
	{item.nombre} - Ultimo Login {item.ultimo_login} - Cargo: {item.cargo}
	<br />
{/each}
