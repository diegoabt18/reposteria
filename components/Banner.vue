<template>
    <section class="bg-[#fffcc8] pt-12 overflow-hidden  relative">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center pb-16">
        
        <!-- Texto -->
        <div class="pl-4">
          <h1 class="text-5xl font-extrabold">
            <span class="text-[#A8A35E]">Deleítate</span>
            <span class="text-[#333C2F]"> con cada bocado!</span>
          </h1>
          <p class="mt-4 text-[#333C2F] max-w-md">
            Repostería artesanal con ingredientes naturales, pasión y tradición. Hecho con amor desde nuestra cocina hasta tu mesa.
          </p>
          <div class="mt-6">
            <NuxtLink
              to="/shop"
              class="inline-block bg-[#333C2F] text-[#FFFFFF] px-6 py-3 rounded-full hover:bg-[#4B5136] transition font-bold"
            >
              COMPRAR AHORA!
            </NuxtLink>
          </div>
        </div>
  
        <!-- Imagen -->
        <div class="relative">
          <img
            src="/images/banner9.png"
            alt="Croissant"
            class="w-full max-w-lvh mx-auto drop-shadow-lg"
          />
        </div>
      </div>
  
      <!-- Onda decorativa inferior -->
      <div class="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" class="w-full h-24 block" preserveAspectRatio="none">
          <path
            fill="#EFE49D"
            d="M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128V320H0Z"
          />
        </svg>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script logic needed
  </script>