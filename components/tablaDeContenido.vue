<template>
  <section class="relative h-[600px] w-full overflow-hidden flex items-center justify-center text-white">
    <!-- Imagen de fondo -->
    <img
      src="/images/banner2.jpeg"
      alt="Fondo tienda"
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
  
    <!-- Capa oscura encima de la imagen -->
    <div class="absolute inset-0 z-10" style="background-color: rgba(0, 0, 0, 0.2)"></div>
  
    <!-- Contenido centrado -->
    <div class="relative z-20 text-center">
      <h1 class="text-4xl font-bold tracking-widest"> CAFETERIA Y REPOSTERIA</h1>
      <p class="mt-2  tracking-wider text-md">Tienda Av 0# 0N - 15 local 5, Quinta Bosch</p>
  
      <div class="mt-6 flex justify-center gap-4">
        <NuxtLink
          to="/menu"
          class="bg-green-400 hover:bg-olive-700 text-white px-5 py-2 rounded-md flex items-center gap-2"
        >
          <!-- Reemplazar el icono -->
          <FontAwesomeIcon icon="coffee" size="2x"/>
          Menú
        </NuxtLink>
        <NuxtLink
          to="/horarios"
          class="bg-olive-600 hover:bg-olive-700 text-white px-5 py-2 rounded-md flex items-center gap-2"
        >
          <!-- Reemplazar el icono -->
          <FontAwesomeIcon icon="calendar" size="2x"/>
          Horarios
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
