<script>
	import { menu } from '$lib/stores/menu';

	export const options = [
		{ name: 'Nuestros Servicios', href: '/servicios' },
		{ name: 'Nosotros', href: '/nosotros' },
	];
</script>

<div id="menu" class="menu lg:hidden" class:open={$menu}>
	<div class="flex">
		<div class="px-4 flex flex-col justify-center items-center bg-white">
			<button class="" on:click={menu.toggle}
				><img
					src={'/assets/x.svg'}
					alt="A close icon"
					class="w-8 stroke-current stroke-2"
				/></button
			>
		</div>
		<div class="bg-primary h-[100vh] w-full px-5 py-4">
			<div class="flex justify-between">
				<a href="/" class="w-3/6 md:w-1/4" on:click={menu.toggle}>
					<img src="/assets/logo.svg" alt="Solano y Mota logo" class="w-full" />
				</a>
			</div>
			<div
				class="mt-10 md:mt-14 flex flex-col gap-y-6 md:gap-y-10 text-left text-white text-2xl md:text-3xl font-gilland"
			>
				{#each options as { name, href }, i (i)}
					<a on:click={menu.toggle} {href} class="">{name}</a>
				{/each}
			</div>
			<div class="w-1/5 mt-6 md:mt-10 mr-auto">
				<a
					on:click={menu.toggle}
					href="/contacto"
					class="text-primary bg-quaternary text-2xl md:text-3xl font-gilland rounded-md p-3"
					>Contáctanos</a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.menu {
		@apply w-0 h-full overflow-hidden fixed top-0 right-0 z-40 overflow-x-hidden whitespace-nowrap;
		transition: width 0.5s ease, height 0.4s ease;
	}

	.open {
		@apply w-full;
		width: 100vw;
	}
</style>
