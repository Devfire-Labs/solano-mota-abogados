<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/tailwind-output.css';
	import '../styles/base.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />
