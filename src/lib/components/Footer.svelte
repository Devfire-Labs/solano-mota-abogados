<script>
	const info = [
		{ img: { src: '/assets/phone.svg', alt: '' }, text: '+1 (829)-993-8549' },
		{
			img: { src: '/assets/envelope.svg', alt: '' },
			text: 'SolanoyMota@gmail.com',
		},
		{
			img: { src: '/assets/pin.svg', alt: '' },
			text: 'Calle 30 de Marzo, No. 28 San Pedro De Macoris, Rep. Dominicana.',
		},
	];
</script>

<footer class="bg-primary pt-10 px-8">
	<h3 class="font-galey text-white">
		Subscríbete para recibir nuestras promociones y ofertas por correo
		electrónico:
	</h3>
	<form action="" class=" mt-6">
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
	<img src="/assets/logo.svg" alt="" class="mx-auto mt-10" />
	<div class="flex justify-between mt-5 mx-auto w-3/5">
		<a href=""><img src="/assets/twitter.svg" alt="Twitter icon" class="" /></a>
		<as class=""
			><img src="/assets/instagram.svg" alt="Instagram icon" class="" /></as
		>
		<a href=""
			><img src="/assets/linkedin.svg" alt="LinkedIn icon" class="" /></a
		>
	</div>
	<div class="flex flex-wrap text-white mt-7">
		<a href="" class="footer-link">Inicio</a>
		<a href="" class="footer-link">Sobre nosotros</a>
		<a href="" class="footer-link">Servicios</a>
		<a href="" class="footer-link">Contacto</a>
	</div>
	<div class="text-white font-galey text-left mt-5">
		{#each info as { img: { src, alt }, text }, i (i)}
			<div class="flex mb-3">
				<img {src} {alt} class=" w-5" />
				<h3 class="ml-3">{text}</h3>
			</div>
		{/each}
	</div>
	<div class="border-t-2 border-quinary text-white pt-2 text-sm mt-6">
		&copy; 2021 Solano &amp; Mota Servicios Jurídicos.<br />Todos los derechos
		reservados.
	</div>
</footer>

<style>
	.footer-link {
		@apply w-1/2;
	}

	h3 {
		@apply font-galey;
	}
</style>
