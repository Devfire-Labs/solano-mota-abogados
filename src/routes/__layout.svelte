<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../styles/tailwind-output.css';
	import '../styles/base.css';
</script>

<Navbar />

<main>
	<slot />
</main>
