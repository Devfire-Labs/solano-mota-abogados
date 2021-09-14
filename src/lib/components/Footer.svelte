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
  <div class="lg:flex lg:place-self-start lg:justify-around lg:mb-3 lg:mt-3">
    <div class="lg:ml-8 lg:order-4">
      <h3 class="w-3/4 text-white lg:text-left lg:text-lg lg:w-full font-galey">
        Subscríbete para recibir nuestras promociones y ofertas por correo
        electrónico:
      </h3>
      <form on:submit={(e) => e.preventDefault()} class="mt-6 lg:mt-3 ">
        <input
          type="text"
          class="block w-full py-1 text-center rounded-sm lg:w-full"
          placeholder="Correo"
        />
        <button
          type="submit"
          class="block w-full py-1 mt-2 font-bold rounded-sm bg-quinary text-primary font-blueberry lg:w-full"
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
          ><img src="/assets/twitter.svg" alt="Twitter icon" class="w-7" /></a
        >
        <as class="ml-2"
          ><img
            src="/assets/instagram.svg"
            alt="Instagram icon"
            class="w-7"
          /></as
        >
        <a href="/" class="ml-2"
          ><img src="/assets/linkedin.svg" alt="LinkedIn icon" class="w-7" /></a
        >
      </div>
    </div>
    <div
      class="flex flex-wrap text-white mt-7 lg:mt-0 lg:order-2 lg:flex-col lg:w-1/3 lg:ml-8 lg:text-left lg:text-xl"
    >
      <a href="/" class="w-full ">Inicio</a>
      <a href="/nosotros" class="footer-link">Sobre Nosotros</a>
      <a href="/servicios" class="footer-link">Servicios</a>
      <a href="/contacto" class="footer-link">Contacto</a>
    </div>
    <div
      class="pr-10 mt-3 text-left text-white lg:mt-1 lg:ml-6 font-galey lg:order-3 lg:text-xl"
    >
      {#each info as { img: { src, alt }, text, href }, i (i)}
        {#if href}
          <div class="flex mb-5">
            <img {src} {alt} class="w-5 " />
            <a {href} target="_blank" class="ml-3">{text}</a>
          </div>
        {:else}
          <div class="flex mb-5">
            <img {src} {alt} class="w-5 " />
            <h3 class="ml-3">{text}</h3>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div class="lg:flex-grow lg:place-self-end ">
    <div
      class="pt-2 mt-6 text-sm text-white border-t-2 border-quinary lg:w-100 lg:text-lg "
    >
      &copy; 2021 Solano &amp; Mota Servicios Jurídicos.<br
        class="sm:hidden lg:hidden"
      /> Todos los derechos reservados.
    </div>
  </div>
</footer>

<style>
  .footer-link {
    @apply w-full mt-5;
  }

  h3 {
    @apply font-galey;
  }
</style>
