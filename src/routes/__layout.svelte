<script>
	import Navbar from '$lib/componentes/Navbar.svelte';
	import '../app.scss';
</script>

<body class="has-background-grey-dark h-screen has-text-light ">
	<Navbar />
	<div class="p-4 m-4">
		<slot />
	</div>
</body>

<style>
	body {
		height: 100vh;
	}
	.navbar-item:hover {
		background-color: rgba(77, 70, 102, 0.308);
	}
</style>
