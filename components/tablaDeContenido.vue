<template>
  <section id="reposteria" class="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">
    <HoursModal v-if="showHorario" @close="cerrarModal" />

    <!-- Texto animado desde la izquierda -->
    <div
      class="w-full lg:w-1/2 text-center lg:text-left font-playflairDisplay opacity-0 animate-slideInLeft"
    >
      <h3
        class="text-xl md:text-2xl uppercase text-marronClaro font-semibold tracking-wide mb-2 flex items-center justify-center lg:justify-start gap-2">
        <Icon name="my-icon:coffee-beans" /> Nuestra carta
      </h3>
      <h2 class="text-3xl md:text-5xl font-bold text-marronOscuro mb-6 leading-tight">
        Cafetería y Repostería
      </h2>
      <p class="text-base md:text-lg text-gray-600 mb-4 font-nunito">
        "Visítanos en la Tienda, Av. 0 #0N-15, Local 5, Quinta Bosch. Te atendemos de lunes a sabado." 
        <span class="italic">Descubre más información haciendo clic en los botones a continuación.</span>
      </p>

      <div class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4">
        <p class="italic font-bold pastel text-3xl text-marronClaro font-amatic">Sano delirio</p>
        <NuxtLink to="/menu"
          class="bg-verdePastel hover-button font-semibold blanco px-6 py-3 rounded-full transition duration-300 text-center transform hover:scale-105">
          <FontAwesomeIcon icon="coffee" size="lg" /> Menú
        </NuxtLink>
        <button @click="abrirModal"
          class="bg-verdePastel hover-button font-semibold blanco px-6 py-3 rounded-full transition duration-300 text-center transform hover:scale-105">
          <FontAwesomeIcon icon="calendar" size="lg" /> Horarios
        </button>
      </div>
    </div>

    <!-- Imagen animada desde la derecha con zoom -->
    <div class="w-full lg:w-1/2 relative opacity-0 animate-slideInRightZoom">
      <img src="/images/banner5.jpeg" alt="Mujer tomando café" class="rounded-lg w-full max-h-[800px] object-cover" />
    </div>
  </section>
</template>

<style scoped>
.hover-button:hover {
  background-color: var(--dorado);
  color: var(--verde);
}


@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRightZoom {
  0% {
    opacity: 0;
    transform: translateX(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.animate-slideInLeft {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slideInRightZoom {
  animation: slideInRightZoom 0.8s ease-out 0.3s forwards;
}

</style>

<script setup>
import HoursModal from './HoursModal.vue'


const showHorario = ref(false)

const abrirModal = () => {
  showHorario.value = true
}

const cerrarModal = () => {
  showHorario.value = false
}
</script>
