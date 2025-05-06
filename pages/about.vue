<template>
    <div>
      <Header />
      <section class="bg-gradient-to-r from-[#1f261c] via-[#2b3327] to-[#4B5136] text-white font-sans pt-16 pb-32 px-6 relative overflow-hidden">
        <div class="max-w-7xl mx-auto text-center">
          <tablaDeContenido/>
          <!-- Sección Misión y Visión -->
          
  


  
          <!-- Círculos animados en el fondo -->
          <div class="absolute inset-0 pointer-events-none">
            <div
              v-for="circle in circles"
              :key="circle.id"
              :style="{
                top: circle.top,
                left: circle.left,
                width: circle.size,
                height: circle.size,
                animationDuration: circle.duration
              }"
              class="absolute rounded-full bg-[#EFE49D]/20 animate-pulse blur-lg"
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import tablaDeContenido from '~/components/tablaDeContenido.vue'
  import { Carousel3d, Slide } from 'vue3-carousel-3d'
  import 'vue3-carousel-3d/dist/index.css'
  
  const valuesArray = [
    'Pasión por lo que hacemos',
    'Autenticidad en cada receta',
    'Calidad artesanal garantizada',
    'Respeto por los ingredientes',
    'Compromiso con el medio ambiente',
    'Amor por nuestros clientes'
  ]
  
  // Animación de círculos de fondo
  const circles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${40 + Math.random() * 80}px`,
    duration: `${6 + Math.random() * 6}s`
  }))
  </script>
  
  <style scoped>
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.3);
      opacity: 0.5;
    }
  }
  .animate-pulse {
    animation: pulse infinite ease-in-out;
  }
  
  body {
    font-family: 'Quicksand', sans-serif;
  }
  </style>
  