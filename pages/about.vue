<template>
    <div>
      <Header />
      <section class="bg-gradient-to-r from-[#1f261c] via-[#2b3327] to-[#4B5136] text-white font-sans pt-16 pb-32 px-6 relative overflow-hidden">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-4xl font-extrabold text-[#EFE49D] mb-12">Acerca de Nosotros</h2>
  
          <!-- Sección Misión y Visión -->
          <div class="grid md:grid-cols-2 gap-12 mb-20">
            <div class="bg-[#333C2F] rounded-2xl shadow-lg p-8 group hover:scale-105 hover:shadow-xl hover:bg-[#3c4635] transition">
              <h3 class="text-2xl font-semibold text-[#EFE49D] mb-4 group-hover:text-white">Misión</h3>
              <p class="text-lg leading-relaxed text-white group-hover:text-[#EFE49D]">
                Ofrecer productos de repostería artesanal elaborados con ingredientes naturales, brindando una experiencia auténtica, saludable y deliciosa a nuestros clientes.
              </p>
            </div>
            <div class="bg-[#333C2F] rounded-2xl shadow-lg p-8 group hover:scale-105 hover:shadow-xl hover:bg-[#3c4635] transition">
              <h3 class="text-2xl font-semibold text-[#EFE49D] mb-4 group-hover:text-white">Visión</h3>
              <p class="text-lg leading-relaxed text-white group-hover:text-[#EFE49D]">
                Ser una referencia en repostería saludable y artesanal, reconocida por nuestra calidad, innovación y compromiso con el bienestar de nuestros clientes.
              </p>
            </div>
          </div>
  
          <!-- Carrusel de Valores -->
          <h3 class="text-3xl font-extrabold text-[#EFE49D] mb-10">Nuestros Valores</h3>
          <Carousel3d :autoplay="true" :autoplay-timeout="3000" :display="3" :controls-visible="false" :width="400" :height="220" class="mb-20">
            <Slide v-for="(value, index) in valuesArray" :key="index">
              <div class="bg-[#333C2F] rounded-2xl shadow-lg p-6 mx-4 transition transform hover:scale-105 hover:shadow-xl hover:bg-[#3c4635] group">
                <p class="text-lg leading-relaxed text-white group-hover:text-[#EFE49D]">{{ value }}</p>
              </div>
            </Slide>
          </Carousel3d>
  
          <!-- Historia -->
          <div class="max-w-3xl mx-auto">
            <h3 class="text-3xl font-extrabold text-[#EFE49D] mb-6">Nuestra Historia</h3>
            <p class="text-lg leading-relaxed text-white">
              Nacimos de una cocina familiar llena de aromas y cariño. Lo que empezó como un pequeño sueño se convirtió en una repostería que celebra la tradición y la innovación en cada receta.
            </p>
          </div>
  
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
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
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
  