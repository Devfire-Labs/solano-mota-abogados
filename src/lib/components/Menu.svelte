<script>
	import { menu } from '$lib/stores/menu';

	export const options = [
		{ name: 'Nuestros Servicios', href: '/servicios' },
		{ name: 'Nosotros', href: '/nosotros' },
	];
</script>

<div id="menu" class="menu lg:hidden" class:open={$menu}>
	<div class="flex justify-between">
		<a href="/" class="w-3/6">
			<img src="/assets/logo.svg" alt="Solano y Mota logo" class="w-full" />
		</a>
		<button class="" on:click={menu.toggle}
			><img
				src={'/assets/x.svg'}
				alt="A close icon"
				class="w-6 ml-4 md:ml-8"
			/></button
		>
	</div>
	<div
		class="mt-10 flex flex-col gap-y-6 text-left text-white text-3xl font-gilland"
	>
		{#each options as { name, href }, i (i)}
			<a on:click={menu.toggle} {href} class="">{name}</a>
		{/each}
	</div>
	<div class="w-1/5 mt-6 mr-auto">
		<a
			on:click={menu.toggle}
			href="/contacto"
			class="text-primary bg-quaternary text-3xl font-gilland rounded-md py-3 px-4"
			>Contacto</a
		>
	</div>
</div>

<style>
	.menu {
		@apply w-0 h-0 overflow-hidden fixed top-0 right-0 z-40 overflow-x-hidden whitespace-nowrap bg-primary;
		transition: width 0.5s ease, height 0.4s ease;
	}

	.open {
		@apply w-full px-4 py-6;
		height: 100vh;
	}
</style>
