<template>
  <UCarousel :autoplay="{ delay: 6000 }" auto-height dots :items="slides" :ui="{
    container: 'transition-[height] h-full',
    item: 'w-full h-screen flex-shrink-0',
  }" class="w-full mx-auto">
    <template #default="{ item }" class="w-[1000px]">
      <div :style="{ backgroundImage: `url(${item.image})` }"
        class="min-h-[300px] w-full h-full bg-cover bg-center relative flex items-center">
        <div class="absolute inset-0 bg-black/60 flex items-center">
          <div class="w-full px-6 md:px-12 text-white">
            <h4 class="text-xl uppercase font-extrabold font-display tracking-widest mb-2">Bienvenido a Sano Delirio
            </h4>
            <h1 class="text-5xl font-bold leading-tight">
              {{ item.title }}<br />
              <span class="text-4xl font-semibold">{{ item.subtitle }}</span>
            </h1>
            <p class="mt-4 text-base max-w-xl text-white/80">
              {{ item.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-4">
              <button class="bg-limon hover:bg-[#5a3926] text-black font-semibold px-6 py-3 rounded-md shadow">
                {{ item.primaryButton }}
              </button>
              <!--
              <button class="bg-white text-gray-800 px-6 py-3 rounded-md shadow hover:bg-gray-200">
                {{ item.secondaryButton }}
              </button>
              -->
            </div>
          </div>
        </div>
      </div>
    </template>
  </UCarousel>
</template>

<script setup>
const slides = [
  {
    image: '/images/banner2.jpeg',
    title: 'Disfruta de tu café matutino',
    subtitle: 'Con un delicioso postre saludable',
    description: 'Comienza tu día con el mejor sabor y la mejor compañía.',
    primaryButton: 'Explora nuestro menú',
    secondaryButton: 'Ver menú'
  },
  {
    image: '/images/banner3.jpeg',
    title: 'Un rincón para relajarte',
    subtitle: 'con aroma a café',
    description: 'Encuentra un espacio acogedor para tus tardes de lectura o trabajo.',
    primaryButton: 'Visita nuestra tienda',
    secondaryButton: 'Haz tu pedido'
  },
  {
    image: '/images/banner4.jpeg',
    title: 'Descubre nuevos sabores y promociones',
    subtitle: '¡Cada semana!',
    description: 'Nuestras promociones cambian constantemente para sorprenderte en cada visita.',
    primaryButton: 'Explora aquí y no te pierdas ninguna',
    secondaryButton: 'Contáctanos'
  }
]
</script>