<template>
  <section class="bg-[#fffcc8] pt-12 overflow-hidden relative">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center pb-16">

      <!-- Texto -->
      <div class="pl-4" ref="textContainer">
        <h1 class="text-5xl font-extrabold">
          <!-- Título -->
          <span v-for="(letter, index) in titleLetters" :key="index" 
            class="letter text-[#A8A35E]" 
            :style="{ animationDelay: `${index * 0.1}s` }">
            {{ letter }}
          </span>
           <br>
        
          <!-- Subtítulo -->
          <span v-for="(letter, index) in subtitleLetters" :key="index" 
            class="letter text-[#333C2F]" 
            :style="{ animationDelay: `${(index + titleLetters.length) * 0.1}s` }">
            {{ letter==" " && index > 0 ? "&nbsp;" : letter }}  
          </span>
        </h1>
        
        <p class="mt-4 text-[#333C2F] max-w-md" ref="description">
          Repostería artesanal con ingredientes naturales, pasión y tradición. Hecho con amor desde nuestra cocina hasta tu mesa.
        </p>
        <div class="mt-6">
          <NuxtLink to="/shop"
            class="inline-block bg-[#333C2F] text-[#FFFFFF] px-6 py-3 rounded-full transition-all duration-500 transform opacity-0 translate-y-10 hover:bg-[#4B5136] hover:scale-110 hover:rotate-3 font-bold animate-arrival"
            ref="button">
            COMPRAR AHORA!
          </NuxtLink>
        </div>
      </div>

      <!-- Imagen -->
      <div class="relative" ref="imageContainer">
        <img src="/images/banner9.png" alt="Croissant" class="w-full max-w-lvh mx-auto drop-shadow-lg" />
      </div>
    </div>

    <!-- Onda decorativa inferior -->
    <div class="overflow-hidden leading-none">
      <svg viewBox="0 0 1440 320" class="w-full h-24 block" preserveAspectRatio="none">
        <path fill="#EFE49D"
          d="M0,160L60,149.3C120,139,240,117,360,106.7C480,96,600,96,720,117.3C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128V320H0Z" />
      </svg>
    </div>
  </section>
</template>


<script setup>
import { onMounted, ref, computed } from 'vue';
import gsap from 'gsap';

const title1 = ref(null);
const title2 = ref(null);
const description = ref(null);
const button = ref(null);
const imageContainer = ref(null);

// Texto a animar
const title = "Deleítate";
const subtitle = " con cada bocado!";

// Dividir el texto en letras individuales
const titleLetters = computed(() => title.split(''));
const subtitleLetters = computed(() => subtitle.split(''));

onMounted(() => {
  // Animación para el título "Deleítate"
  gsap.from(title1.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  });

  // Animación para el título "con cada bocado!"
  gsap.from(title2.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  });

  // Animación para la descripción
  gsap.from(description.value, {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.7,
    ease: 'power3.out'
  });

  // Animación para el botón
  gsap.from(button.value, {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    delay: 0.9,
    ease: 'power3.out'
  });

  // Animación para la imagen
  gsap.from(imageContainer.value, {
    opacity: 0,
    scale: 0.8,
    rotation: 20,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
  });
});
</script>


<style scoped>
@keyframes letterAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.letter {
  display: inline-block;
  opacity: 0;
  animation: letterAnimation 0.6s ease-out forwards;
}

.animate-arrival {
  animation: arrival 1s ease-in-out forwards;
}

@keyframes arrival {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
