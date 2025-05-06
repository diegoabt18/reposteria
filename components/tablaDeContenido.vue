<!--<template>
  <section class="w-full text-white ">
    <div class="flex flex-col lg:flex-row w-full min-h-screen">
      
      
      <div class="w-full lg:w-1/2 flex items-center justify-center p-8 bg-dorado h-[500px]">
        <div class="text-center lg:text-left max-w-lg">
          <h1 class="text-4xl font-bold tracking-widest uppercase">Cafetería y Repostería</h1>
          <p class="mt-3 tracking-wide text-md">
            Tienda Av 0# 0N - 15 local 5, Quinta Bosch
          </p>

          <div class="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <NuxtLink
              to="/menu"
              class="bg-green-400 hover:bg-green-600 text-white px-5 py-2 rounded-md flex items-center gap-2 transition"
            >
              <FontAwesomeIcon icon="coffee" size="lg" />
              Menú
            </NuxtLink>
            <NuxtLink
              to="/horarios"
              class="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md flex items-center gap-2 transition"
            >
              <FontAwesomeIcon icon="calendar" size="lg" />
              Horarios
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2  lg:h-auto overflow-hidden">
        <img
          src="/images/banner5.jpeg"
          alt="Banner de cafetería"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
-->

<template>
  <section id="reposteria" class="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">

    <!-- Texto -->
    <div class="w-full lg:w-1/2 text-center lg:text-left font-playflairDisplay">
      <h3
        class="text-xl md:text-2xl uppercase text-marronClaro font-semibold tracking-wide mb-2 flex items-center justify-center lg:justify-start gap-2">
        <Icon name="my-icon:coffee-beans " /> Nuestra carta
      </h3>
      <h2 class="text-3xl md:text-5xl font-bold text-marronOscuro mb-6 leading-tight">
        Cafetería y Repostería
      </h2>
      <p class="text-base md:text-lg text-gray-600 mb-4 font-nunito">
        "Visítanos en la Tienda, Av. 0 #0N-15, Local 5, Quinta Bosch. Te atendemos de lunes a viernes." <span
          class="italic">Descubre más información haciendo clic en los botones a continuación.</span>
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4">
        <!-- Firma -->
        <p class="italic font-bold pastel text-3xl text-marronClaro font-amatic">Sano delirio</p>
        <!-- Botón -->
        <NuxtLink to="/menu"
          class="bg-verdePastel hover-button font-semibold blanco px-6 py-3 rounded-full transition duration-300 text-center">
          <FontAwesomeIcon icon="coffee" size="lg" />
          Menú
        </NuxtLink>
        <NuxtLink to="/horarios"
          class="bg-verdePastel hover-button font-semibold blanco px-6 py-3 rounded-full transition duration-300 text-center">
          <FontAwesomeIcon icon="calendar" size="lg" />
          Horarios
        </NuxtLink>

      </div>
    </div>

    <!-- Imagen de la persona -->
    <div class="w-full lg:w-1/2 relative">
      <img src="/images/banner5.jpeg" alt="Mujer tomando café" class="rounded-lg w-full max-h-[800px] object-cover" />
      <!-- Taza superpuesta -->

    </div>

  </section>
</template>
<style scoped>
.hover-button:hover {
  background-color: var(--dorado);
  color: var(--verde);
}
</style>
