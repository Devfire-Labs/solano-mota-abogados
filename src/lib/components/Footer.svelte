<script>
  const info = [
    { img: { src: "/assets/phone.svg", alt: "" }, text: "+1 (829)-993-8549" },
    {
      img: { src: "/assets/envelope.svg", alt: "" },
      text: "SolanoyMota@gmail.com",
      href: "mailto:SolanoyMota@gmail.com",
    },
    {
      img: { src: "/assets/pin.svg", alt: "" },
      text: "Calle 30 de Marzo, No. 28 San Pedro De Macoris, Rep. Dominicana.",
    },
  ];
</script>

<footer class="bg-primary pt-10 px-8 lg:flex">
  <div class="lg:order-4">
    <h3 class="font-galey text-white">
      Subscríbete para recibir nuestras promociones y ofertas por correo
      electrónico:
    </h3>
    <form on:submit={(e) => e.preventDefault()} class=" mt-6">
      <input
        type="text"
        class="text-center block w-full rounded-sm py-1"
        placeholder="Correo"
      />
      <button
        type="submit"
        class="block w-full bg-quinary text-primary rounded-sm mt-2 font-blueberry font-bold py-1"
        >Subscribirse</button
      >
    </form>
  </div>

  <div class="lg:order-1">
    <a href="/" class="block mx-auto">
      <img src="/assets/logo.svg" alt="" class="mx-auto mt-10" />
    </a>
    <div class="flex justify-between mt-5 mx-auto w-3/5 lg:w-1/3">
      <a href=""
        ><img src="/assets/twitter.svg" alt="Twitter icon" class="" /></a
      >
      <as class=""
        ><img src="/assets/instagram.svg" alt="Instagram icon" class="" /></as
      >
      <a href=""
        ><img src="/assets/linkedin.svg" alt="LinkedIn icon" class="" /></a
      >
    </div>
  </div>
  <div class="flex flex-wrap text-white mt-7 lg:order-2 lg:flex-col ">
    <a href="/" class="footer-link">Inicio</a>
    <a href="/nosotros" class="footer-link">Sobre Nosotros</a>
    <a href="/servicios" class="footer-link">Servicios</a>
    <a href="/contacto" class="footer-link">Contacto</a>
  </div>
  <div class="text-white font-galey text-left mt-5 lg:order-3">
    {#each info as { img: { src, alt }, text, href }, i (i)}
      {#if href}
        <div class="flex mb-3">
          <img {src} {alt} class=" w-5" />
          <a {href} target="_blank" class="ml-3">{text}</a>
        </div>
      {:else}
        <div class="flex mb-3">
          <img {src} {alt} class=" w-5" />
          <h3 class="ml-3">{text}</h3>
        </div>
      {/if}
    {/each}
  </div>
  <div class="border-t-2 border-quinary text-white pt-2 text-sm mt-6 lg:mb-4">
    &copy; 2021 Solano &amp; Mota Servicios Jurídicos.<br
      class="sm:hidden lg:hidden"
    /> Todos los derechos reservados.
  </div>
</footer>

<style>
  .footer-link {
    @apply w-1/2;
  }

  h3 {
    @apply font-galey;
  }
</style>
