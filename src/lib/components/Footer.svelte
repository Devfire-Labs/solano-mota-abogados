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

<footer class="px-8 pt-10 bg-primary lg:grid-rows-2">
  <div class="lg:flex lg:place-self-start lg:justify-between">
    <div class="lg:ml-32 lg:order-4">
      <h3 class="w-3/4 text-white font-galey">
        Subscríbete para recibir nuestras promociones y ofertas por correo
        electrónico:
      </h3>
      <form on:submit={(e) => e.preventDefault()} class="mt-6 lg:mt-3 ">
        <input
          type="text"
          class="block w-full py-1 text-center rounded-sm lg:w-2/3"
          placeholder="Correo"
        />
        <button
          type="submit"
          class="block w-full py-1 mt-2 font-bold rounded-sm bg-quinary text-primary font-blueberry lg:w-2/3"
          >Subscribirse</button
        >
      </form>
    </div>

    <div class="lg:order-1 lg:px-10 lg:w-1/3">
      <a href="/" class="block mx-auto">
        <img src="/assets/logo.svg" alt="" class="mx-auto mt-10" />
      </a>

      <div class="flex justify-between w-3/5 mx-auto mt-5 lg:w-1/2">
        <a href="/" class=""
          ><img src="/assets/twitter.svg" alt="Twitter icon" class="w-10" /></a
        >
        <as class="ml-2"
          ><img
            src="/assets/instagram.svg"
            alt="Instagram icon"
            class="w-10"
          /></as
        >
        <a href="/" class="ml-2"
          ><img src="/assets/linkedin.svg" alt="LinkedIn icon" class="" /></a
        >
      </div>
    </div>
    <div
      class="flex flex-wrap text-white mt-7 lg:order-2 lg:flex-col lg:w-1/3 lg:ml-16 lg:text-left"
    >
      <a href="/" class="footer-link">Inicio</a>
      <a href="/nosotros" class="footer-link">Sobre Nosotros</a>
      <a href="/servicios" class="footer-link">Servicios</a>
      <a href="/contacto" class="footer-link">Contacto</a>
    </div>
    <div class="mt-5 text-left text-white lg:ml-16 font-galey lg:order-3">
      {#each info as { img: { src, alt }, text, href }, i (i)}
        {#if href}
          <div class="flex mb-3">
            <img {src} {alt} class="w-5 " />
            <a {href} target="_blank" class="ml-3">{text}</a>
          </div>
        {:else}
          <div class="flex mb-3">
            <img {src} {alt} class="w-5 " />
            <h3 class="ml-3">{text}</h3>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div class="lg:flex-grow lg:place-self-end ">
    <div
      class="pt-2 mt-6 text-sm text-white border-t-2 border-quinary lg:w-100 "
    >
      &copy; 2021 Solano &amp; Mota Servicios Jurídicos.<br
        class="sm:hidden lg:hidden"
      /> Todos los derechos reservados.
    </div>
  </div>
</footer>

<style>
  .footer-link {
    @apply w-1/2 mt-2;
  }

  h3 {
    @apply font-galey;
  }
</style>
