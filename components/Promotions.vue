<template>
    <section class="my-20">
      <h2 class="text-3xl text-center font-bold text-[#EFE49D] mb-10">Promociones del Mes</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        <div
          v-for="(promo, i) in promos"
          :key="i"
          class="bg-[#4B5136] text-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <img :src="promo.image" alt="Promo" class="rounded-lg mb-4 h-40 w-full object-cover" />
          <h3 class="text-xl font-semibold text-[#EFE49D] mb-2">{{ promo.title }}</h3>
          <p class="text-sm text-[#DAD4A0] mb-4">{{ promo.description }}</p>
          <span class="inline-block bg-[#EFE49D] text-[#333C2F] px-4 py-1 rounded-full text-sm font-semibold">
            {{ promo.discount }}
          </span>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const promos = [
    {
      title: '2x1 en cupcakes',
      description: 'Compra uno y recibe otro gratis solo los fines de semana.',
      discount: '2x1',
      image: '/images/cupcakes.png'
    },
    {
      title: 'Descuento en pasteles',
      description: '15% de descuento en todos los pasteles personalizados.',
      discount: '-15%',
      image: '/images/torta.png'
    },
    {
      title: 'Panadería saludable',
      description: 'Llévate 3 productos saludables y paga solo 2.',
      discount: '3x2',
      image: '/images/pan.png'
    }
  ];
  </script>