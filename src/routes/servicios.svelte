<script>
	import ServiceCard from '$lib/components/ServiceCard.svelte';

	const services = [
		{
			img: { src: '/assets/hat.svg', alt: '' },
			title: 'Derecho Laboral',
			body: 'En el mundo empresarial, brindamos nuestro conocimiento y experiencia a nuestros clientes, ya sean empleadores o trabajadores, con el fin de defender eficazmente sus intereses.',
			list: [
				'Mediación de conflictos laborales',
				'Demandas por dimisión',
				'Demandas por despido injustificado',
				'Asesoria laboral',
			],
		},
		{
			img: { src: '/assets/cuff.svg', alt: '' },
			title: 'Derecho Civil',
			body: 'Nuestros abogados cuentan con la mayor preparación y vasta experiencia en esta área, ya que representan a clientes en todo tipo de disputas en los tribunales de esta jurisdicción de forma regular.',
			list: [
				'Declaraciones Juradas',
				'Correcciones de actas',
				'Proceso de divorcio',
				'Compra y venta de bienes mueble e inmuebles',
			],
		},
		{
			img: { src: '/assets/cuff.svg', alt: '' },
			title: 'Derecho Penal',
			body: 'Tenemos una experiencia considerable en el procesamiento y la defensa de casos penales, velando constantemente por los mejores intereses de nuestros clientes.',
			list: ['Redacción y ejecución de todo tipo de contratos laborales.'],
		},
		{
			img: { src: '/assets/coin.svg', alt: '' },
			title: 'Derecho Comercial',
			body: 'Brindamos la orientación esencial para ayudar a nuestros clientes a coordinar y ajustar su plan de negocios global a las restricciones regulatorias locales e internacionales.',
			list: ['Redacción y ejecución de todo tipo de contratos laborales.'],
		},
	];
</script>

<header class="">
	<h1 class="text-xl">Nuestros Servicios</h1>
	<p class="mt-3">
		Solano & Mota se especializa en obtener un conocimiento profundo de las
		necesidades del cliente para brindar soluciones personalizadas a través de
		la creación de estrategias legales innovadoras.
	</p>
</header>
<section id="services" class="mb-10">
	{#each services as { img, title, body, list }, i (i)}<ServiceCard
			{img}
			{title}
			{body}
			{list}
		/>{/each}
</section>

<style>
	h2 {
		@apply text-xl mb-2;
	}
	section,
	header {
		@apply pt-6 px-5;
	}
</style>
