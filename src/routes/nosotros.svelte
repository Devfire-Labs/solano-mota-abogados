<script>
	import ContactUs from '$lib/components/ContactUs.svelte';
	const values = [
		{
			title: 'Transparencia',
			body: 'En nuestras interacciones, siempre nos comportamos con honestidad. Ser leal, amable, empático y un buen oyente son cualidades vitales de nuestra firma.',
		},
		{
			title: 'Lealtad',
			body: 'Nuestras conexiones con los clientes son importantes para nosotros. Prestamos atención a las demandas de nuestros clientes y respondemos con vigor, pasión y eficiencia. ',
		},
		{
			title: 'Responsabilidad',
			body: 'Cuando se trata de atender las demandas de nuestros clientes y de nuestra empresa, asumimos la responsabilidad personal. Si vemos algo, nos apropiamos de él y nos aseguramos de que se haga.',
		},
		{
			title: 'Confidencialidad',
			body: 'Como consultores legales, infundimos confianza en nuestros clientes. Cumplimos con nuestros compromisos y también nos adherimos a las pautas éticas más estrictas.',
		},
	];
	const team = [
		{
			name: 'Perez Hilton',
			img: { src: '/assets/team-member.png', alt: '' },
			bio: 'Ignacio es socio de Lloreda Camacho & Co. desde 1996, y es el Director de los Departamentos de Minería-Recursos Naturales, Derecho Tributario, Comercio Exterior y Aduanero de la firma. Es abogado de la Universidad del Rosario, tiene dos especializaciones, una en Derecho Financiero de la Universidad de los Andes y otra en Derecho Administrativo de la Universidad del Rosario, ambas en Bogotá; Ignacio también cuenta con un título de postgrado en Derecho de la Competencia de la Universidad de Konstanz en Alemania.',
		},
		{
			name: 'Perez Hilton',
			img: { src: '/assets/team-member.png', alt: '' },
			bio: 'Ignacio es socio de Lloreda Camacho & Co. desde 1996, y es el Director de los Departamentos de Minería-Recursos Naturales, Derecho Tributario, Comercio Exterior y Aduanero de la firma. Es abogado de la Universidad del Rosario, tiene dos especializaciones, una en Derecho Financiero de la Universidad de los Andes y otra en Derecho Administrativo de la Universidad del Rosario, ambas en Bogotá; Ignacio también cuenta con un título de postgrado en Derecho de la Competencia de la Universidad de Konstanz en Alemania.',
		},
	];
</script>

<svelte:head><title>Sobre nosotros</title></svelte:head>

<header id="work-with-us" class="">
	<h1 class="text-xl">Consulta con nuestros Expertos</h1>
	<p class=" mt-7">
		El personal profesional de Solano & Mota tiene el conocimiento académico,
		las habilidades lingüísticas y la experiencia profesional necesarias para
		brindar asesoramiento y orientación en diferentes áreas legales.
	</p>
</header>

<section id="the-firm">
	<h2 class="">La Firma</h2>
	<p class="">
		Solano & Mota es una firma de abogados dedicada a brindar un servicio
		excepcional y resultados sobresalientes a nuestros clientes. Somos un grupo
		de personas dedicadas a brindar una experiencia positiva y memorable a
		nuestros clientes, elevando el nivel de los estándares y expectativas de la
		profesión legal y estableciendo un ambiente de trabajo ideal y seguro. Desde
		su fundación en 2019, la firma ha construido y mantenido una amplia práctica
		que cubre todos los aspectos del derecho civil.
	</p>
</section>

<section id="values" class="">
	<h2 class="">Nuestros Valores</h2>
	{#each values as { title, body }, i (i)}
		<div class="" class:mt-5={i > 0}>
			<h3 class="text-secondary text-lg">
				<span class="text-2xl">{i + 1}.</span>
				{title}
			</h3>
			<p class="">{body}</p>
		</div>
	{/each}
</section>

<section id="our-team" class="pb-10">
	<h2 class="">Nuestro Equipo</h2>
	{#each team as { name, img: { src, alt }, bio }, i (i)}
		<div class="mt-4">
			<img {src} {alt} class="w-full" />
			<div class="bg-primary text-white text-left p-6">
				<h3 class="text-quinary text-xl">{name}</h3>
				<p class="mt-2">{bio}</p>
			</div>
		</div>
	{/each}
</section>

<ContactUs />

<style>
	h2 {
		@apply text-xl mb-2;
	}
	section, header {
		@apply pt-6 px-5;
	}
</style>
