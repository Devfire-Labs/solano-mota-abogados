<script>
	import { info } from '$lib/utils';

	const socialIcons = [
		{ src: '/assets/twitter.svg', alt: 'Twitter icon', href: '#' },
		{ src: '/assets/instagram.svg', alt: 'Instagram icon', href: '#' },
		{ src: '/assets/linkedin.svg', alt: 'LinkedIn icon', href: '#' },
	];
</script>

<footer class="bg-primary">
	<div class="pt-10 px-8 max-w-screen-xl mx-auto">
		<div class="lg:flex">
			<div class="">
				<h3 class="font-galey text-white">
					Subscríbete para recibir nuestras promociones y ofertas por correo
					electrónico:
				</h3>
				<form on:submit={(e) => e.preventDefault()} class=" mt-6 lg:flex">
					<input
						type="text"
						class="text-center block w-full rounded-sm py-1"
						placeholder="Correo"
					/>
					<button
						type="submit"
						class="block w-full bg-quinary text-primary rounded-sm mt-2 font-blueberry font-bold py-1"
						>Subscribirse</button
					>
				</form>
			</div>
			<div class="order-first">
				<a href="/" class="">
					<img
						src="/assets/logo.svg"
						alt=""
						class="mx-auto mt-10 lg:w-[180px]"
					/>
				</a>
				<div class="flex justify-between mt-5 mx-auto w-3/5 lg:gap-x-6">
					{#each socialIcons as { src, alt, href }, i (i)}
						<a {href} class:ml-8={i > 0}
							><img {src} {alt} class=" w-[160px]" /></a
						>{/each}
				</div>
			</div>
			<div class="flex flex-wrap lg:flex-col lg:flex-nowrap text-white mt-7">
				<a href="/" class="footer-link">Inicio</a>
				<a href="/nosotros" class="footer-link">Sobre nosotros</a>
				<a href="/servicios" class="footer-link">Servicios</a>
				<a href="/contacto" class="footer-link">Contacto</a>
			</div>
			<div class="text-white font-galey text-left mt-5">
				{#each info as { img: { src, alt }, text, href }, i (i)}
					{#if href}
						<div class="flex mb-3">
							<img {src} {alt} class=" w-5" />
							<a {href} target="_blank" class="ml-3">{text}</a>
						</div>
					{:else}
						<div class="flex mb-3">
							<img {src} {alt} class=" w-5" />
							<h3 class="ml-3">{text}</h3>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="border-t-2 border-quinary text-white pt-2 text-sm mt-6">
			&copy; 2021 Solano &amp; Mota Servicios Jurídicos.<br />Todos los derechos
			reservados.
		</div>
	</div>
</footer>

<style lang="postcss">
	.footer-link {
		@apply w-1/2;
	}

	h3 {
		@apply font-galey;
	}
	/* @media (min-width: 1024px) {
		.social-icon img {
			width: 120px;
		}

		.social-icon + .social-icon {
			margin-left: 40px;
		}
	} */
</style>
