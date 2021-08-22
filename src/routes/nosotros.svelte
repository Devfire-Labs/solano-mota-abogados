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
	<div class="value lg:grid lg:text-left lg:px-8 gap-y-4 gap-x-8">
		{#each values as { title, body }, i (i)}
			<h3 class="text-secondary text-lg whitespace-nowrap">
				<span class="text-2xl">{i + 1}.</span>
				{title}
			</h3>
			<p class="">{body}</p>
		{/each}
	</div>
</section>

<section id="our-team" class="pb-10">
	<h2 class="">Conoce al Equipo</h2>
	{#each team as { name, img: { src, alt }, bio }, i (i)}
		<div class="mt-4 lg:mt-8 lg:grid w-4/6 mx-auto team-member">
			<img
				{src}
				{alt}
				class="w-full col-start-1 col-end-[10] rounded-xl shadow-xl"
				class:img-right={i % 2 == 0}
			/>
			<div
				class="bg-primary text-white text-left p-6 col-start-9 col-end-[21] row-start-2 row-span-full shadow-2xl"
			>
				<h3 class="text-quinary text-xl">{name}</h3>
				<p class="mt-2">{bio}</p>
			</div>
		</div>
	{/each}
</section>

<ContactUs />

<style lang="postcss">
	h2 {
		@apply text-xl mb-2;
	}
	section,
	header {
		@apply pt-10 px-5;
	}

	.value {
		grid-template-columns: min-content auto;
	}

	.team-member {
		grid-template-rows: repeat(20, minmax(0, 20px));
		grid-template-columns: repeat(20, minmax(0, 1fr));
	}
	/* img.img-right {
		@apply order-last col-start-13 col-end-8;
	} */
</style>
