<script context="module">
	import ContactUs from '$lib/components/ContactUs.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import WhyWorkWithUs from '$lib/components/WhyWorkWithUs.svelte';

	export const prerender = true;

</script>

<svelte:head><title>Home</title></svelte:head>

<main>
	<Hero />
	<Services />
	<WhyWorkWithUs />
	<ContactUs />
</main>

<!-- <style>
	h2 {
		@apply lg:text-2xl;
	}

</style> -->
