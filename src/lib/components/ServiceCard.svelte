<script>
	export let title, body, img, list;
	let { src, alt } = img;
</script>

<div class="bg-secondary text-white py-6 px-5 mt-6 text-left">
	<img {src} {alt} class="" />
	<h3 class="text-xl mt-4">{title}</h3>
	<p class="mt-6 leading-6">
		{body}
		{#if list}
			<ul class="list-disc list-inside">
				{#each list as item, i (i)}
					<li class="mt-4" class:mt-2={i > 0}>{item}</li>
				{/each}
			</ul>
		{/if}
	</p>
</div>
