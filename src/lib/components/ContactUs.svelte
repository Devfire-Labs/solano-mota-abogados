<script>
	import { info } from '$lib/utils';
</script>

<section id="contact-us" class="flex lg:text-left">
	<div class="hidden lg:block bg-primary text-white py-10 px-5">
		<h2 class="text-quinary text-xl lg:text-2xl">Contáctanos</h2>
		<p class="mt-4">
			Para asistirle con mayor rapidez puede comunicarse con nosotros a través
			de:
		</p>
		<div class="font-galey text-left mt-8">
			{#each info as { img: { src, alt }, text, href }, i (i)}
				{#if href}
					<div class="flex mb-5">
						<img {src} {alt} class=" w-5" />
						<a {href} target="_blank" class="ml-3">{text}</a>
					</div>
				{:else}
					<div class="flex mb-5">
						<img {src} {alt} class=" w-5" />
						<h3 class="ml-3 font-galey">{text}</h3>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class="bg-quaternary py-10 px-5 text-primary">
		<h2 class="text-xl lg:text-2xl">Consulta con nosotros</h2>
		<p class="mt-4">
			Queremos asistirle en sus necesidades legales y, para ello, ponemos a su
			disposición a nuestro equipo de abogados. Rellena el formulario y nuestro
			equipo se pondrá en contacto lo antes posible.
		</p>
		<form on:submit={(e) => e.preventDefault()} class="mt-4">
			<div class="lg:flex gap-x-3">
				<input type="text" placeholder="Nombre" class="text-input" />
				<input type="text" placeholder="Correo" class="text-input" />
			</div>
			<textarea class="text-input textarea lg:h-32" placeholder="Mensaje" />
			<button
				type="submit"
				class="bg-secondary inline-block mt-6 rounded-md text-white font-blueberry font-bold px-11 py-2"
				>Enviar</button
			>
		</form>
	</div>
</section>

<style>
	.text-input {
		@apply mt-3 block w-full border-2 border-gray-400 rounded-md text-center py-0.5;
	}
	/* @media (min-width: 1024px) {
		.text-input {
			@apply text-left;
		}
	} */
</style>
