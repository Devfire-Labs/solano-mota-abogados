<script>
	import { menu } from '$lib/stores/menu';
</script>

<nav class="bg-secondary flex py-4 px-7 justify-center">
	<a href="/">
		<img
			src="/assets/logo.svg"
			alt="Logo de Solano and Mota Servicios Juridicos"
			class="ml-auto"
		/>
	</a>
	<button class="ml-auto" on:click={menu.toggle}
		><img src="/assets/menu.svg" alt="Menu icon" class="" /></button
	>
</nav>
