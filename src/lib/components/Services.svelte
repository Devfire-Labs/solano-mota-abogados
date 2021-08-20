<script>
	import ServiceCard from './ServiceCard.svelte';

	const services = [
		{
			img: { src: '/assets/hat.svg', alt: '' },
			title: 'Derecho Laboral',
			body: 'En el mundo empresarial, brindamos nuestro conocimiento y experiencia a nuestros clientes, ya sean empleadores o trabajadores, con el fin de defender eficazmente sus intereses.',
		},
		{
			img: { src: '/assets/cuff.svg', alt: '' },
			title: 'Derecho Civil',
			body: 'Nuestros abogados cuentan con la mayor preparación y vasta experiencia en esta área, ya que representan a clientes en todo tipo de disputas en los tribunales de esta jurisdicción de forma regular.',
		},
		{
			img: { src: '/assets/cuff.svg', alt: '' },
			title: 'Derecho Penal',
			body: 'Tenemos una experiencia considerable en el procesamiento y la defensa de casos penales, velando constantemente por los mejores intereses de nuestros clientes.',
		},
		{
			img: { src: '/assets/coin.svg', alt: '' },
			title: 'Derecho Comercial',
			body: 'Brindamos la orientación esencial para ayudar a nuestros clientes a coordinar y ajustar su plan de negocios global a las restricciones regulatorias locales e internacionales.',
		},
	];
</script>

<section id="services" class=" pt-10 px-5 text-center">
	<h2 class=" text-xl lg:text-2xl">Nuestros Servicios</h2>
	<p class="mt-4 lg:w-2/3 lg:mx-auto lg:text-lg">
		Solano & Mota brinda un servicio integral para satisfacer todas las
		necesidades comerciales y personales de nuestros clientes en cualquiera de
		nuestras áreas profesionales.
	</p>
	<div class="lg:grid grid-cols-4 gap-x-4">
		{#each services as { img, title, body }, i (i)}<ServiceCard
				{img}
				{title}
				{body}
			/>{/each}
	</div>
	<div class="mt-8">
		<a
			href="servicios"
			class="bg-secondary text-white font-blueberry text-lg px-4 py-3 rounded-sm"
			>Ver todos los servicios</a
		>
	</div>
</section>
