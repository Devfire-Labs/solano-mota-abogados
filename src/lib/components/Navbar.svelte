<script>
	import { menu } from '$lib/stores/menu';
	export const options = [
		{ name: 'Nuestros Servicios', href: '/servicios' },
		{ name: 'Nosotros', href: '/nosotros' },
	];
</script>

<nav class="bg-secondary">
	<div class="flex py-4 px-7 justify-center mx-auto max-w-screen-xl">
		<a href="/">
			<img
				src="/assets/logo.svg"
				alt="Logo de Solano and Mota Servicios Juridicos"
				class="ml-auto"
			/>
		</a>
		<button class="ml-auto lg:hidden" on:click={menu.toggle}
			><img src="/assets/menu.svg" alt="Menu icon" class="close" /></button
		>
		<div
			class="hidden lg:flex ml-auto gap-x-6 items-center text-white font-gilland text-lg"
		>
			{#each options as { name, href }, i (i)}
				<a {href} class="">{name}</a>
			{/each}
			<a href="/contacto" class="text-primary bg-quaternary rounded px-4 py-2"
				>Contáctanos</a
			>
		</div>
	</div>
</nav>

<style>
	.close {
		@apply text-red-500;
	}
</style>
