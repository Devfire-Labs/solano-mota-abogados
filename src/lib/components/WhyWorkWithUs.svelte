<script>
	const reasons = [
		{
			title: 'Proveemos Valor',
			body: 'Además de brindarles a nuestros clientes consejos estratégicos y prácticos, también desarrollamos soluciones creativas para lograr de la mejor manera los objetivos comerciales de nuestros clientes.',
		},
		{
			title: 'Proveemos Experiencia',
			body: 'Todos nuestros abogados son especialistas altamente capacitados en su área del derecho. Su conocimiento legal se mantiene actualizado a través de cursos y capacitaciones departamentales.',
		},
		{
			title: 'Proveemos Soluciones',
			body: 'No solo le asesoraremos sobre la ley, sino que nos basaremos en nuestra experiencia para brindarle soluciones prácticas y efectivas a su situación particular.',
		},
	];
</script>

<section id="why-work-with-us" class="py-10 px-5 text-center">
	<h2 class="text-xl">¿Por Qué Elegirnos?</h2>
	{#each reasons as { title, body }, i (i)}
		<div class="mt-6">
			<h3 class="">{title}</h3>
			<p class="leading-6 mt-2">{body}</p>
		</div>
	{/each}
	<a href="" class="inline-block bg-primary text-quinary rounded-md px-7 py-2.5 mt-11"
		>Sobre nosotros</a
	>
</section>
