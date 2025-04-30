<template>
    <header class="bg-[#4B5136] py-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div class="text-[#EFE49D] text-2xl font-bold">Sano Delirio</div>
        <nav class="hidden md:flex space-x-6 text-[#A8A35E] font-medium">
          <NuxtLink to="/" class="hover:text-[#EFE49D]">Inicio</NuxtLink>
          <a href="#" class="hover:text-[#EFE49D]">Productos</a>
          <a href="#" class="hover:text-[#EFE49D]">Promociones</a>
          <a href="#" class="hover:text-[#EFE49D]">Contacto</a>
          <NuxtLink to="/about" class="hover:underline">Acerca de</NuxtLink>
        </nav>
        <button class="md:hidden text-[#EFE49D]" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
  
      <!-- Mobile menu -->
      <div v-if="menuOpen" class="md:hidden px-6 mt-2 space-y-2 text-[#A8A35E] font-medium">
        <a href="#" class="block hover:text-[#EFE49D]">Inicio</a>
        <a href="#" class="block hover:text-[#EFE49D]">Productos</a>
        <a href="#" class="block hover:text-[#EFE49D]">Promociones</a>
        <a href="#" class="block hover:text-[#EFE49D]">Contacto</a>
        <NuxtLink to="/about" class="hover:underline">Acerca de</NuxtLink>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const menuOpen = ref(false)
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }
  </script>