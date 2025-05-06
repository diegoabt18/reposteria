<template>
  <section class="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">
    <!-- Imagen de la persona -->
    <div class="w-full lg:w-1/2 relative">
      <img src="/images/aboutUs.png" alt="Mujer tomando café" class="rounded-lg w-full max-h-[800px] object-cover" />
      <!-- Taza superpuesta -->
      <img
        src="/images/coffe.png"
        alt="Taza de café"
        class="absolute bottom-0 right-0 translate-x-1/2 lg:translate-x-0 lg:-right-20 w-40 sm:w-60 md:w-72 lg:w-40 shadow-xl rounded-full"
      />
    </div>

    <!-- Texto -->
    <div class="w-full lg:w-1/2 text-center lg:text-left font-playflairDisplay">
      <h3
        class="text-xl md:text-2xl text-marronClaro font-semibold tracking-wide mb-2 flex items-center justify-center lg:justify-start gap-2">
        <Icon name="my-icon:coffee-beans" /> SOBRE NOSOTROS
      </h3>
      <h2 class="text-3xl md:text-5xl font-bold text-marronOscuro mb-6 leading-tight">
        ¿Un café con algo rico y saludable?
      </h2>
      <p class="text-base md:text-lg text-gray-600 mb-4 font-nunito">
        En Sano Delirio creemos que lo saludable también puede ser delicioso. Servimos energía, sabor y bienestar en
        cada plato. Amamos lo que hacemos, y queremos que cada visita sea una experiencia llena de autenticidad, cariño
        y buena vibra.
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4">
        <!-- Firma -->
        <p class="italic font-bold pastel text-3xl text-marronClaro font-amatic">Sano delirio</p>
        <!-- Botón -->
        <NuxtLink
          to="/shop"
          class="bg-verdePastel hover-button font-semibold blanco px-6 py-3 rounded-full transition duration-300 text-center"
        >
          Descubre Más
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<style scoped>

.hover-button:hover{
  background-color: var(--dorado);
  color: var(--verde);
}
</style>
