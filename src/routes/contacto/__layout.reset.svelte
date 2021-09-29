<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<Menu />

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style>
</style>
