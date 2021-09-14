<script>
  export let title, body, img, list;
  let { src, alt } = img;
</script>

<div class="px-5 py-6 mt-6 text-left text-white bg-secondary">
  <img {src} {alt} class="w-6 lg:w-12" />
  <h3 class="mt-4 text-xl">{title}</h3>
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
