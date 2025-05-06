<template>
  <section id="promociones" class="my-20 px-4 sm:px-8 lg:px-16 bg-limon py-20">
    <!-- Título -->
    <h3
        class="text-xl md:text-2xl text-marronClaro font-semibold tracking-wide mb-2 flex items-center justify-center  gap-2">
        <Icon name="my-icon:coffee-beans" /> EVENTOS
      </h3>
    <h2 class="text-3xl md:text-5xl text-center font-bold  mb-4">
      Promociones del Mes
    </h2>

    <!-- Descripción -->
    <p class="text-center text-lg verde max-w-3xl mx-auto mb-12 font-nunito">
      Este mes, déjate sorprender con nuestras promociones especiales diseñadas para cautivar tu paladar. 
      Disfruta sabores únicos, combos exclusivos y descuentos irresistibles en tus productos favoritos. 
      ¡No dejes pasar estas oportunidades pensadas especialmente para ti!
    </p>

    <!-- Tarjetas de promociones -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div 
        v-for="(promo, i) in promos" 
        :key="i"
        class="bg-blanco text-verde p-6 rounded-2xl shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
      >
        <img 
          :src="promo.image" 
          alt="Promo" 
          class="rounded-xl mb-4 h-44 w-full object-cover shadow-sm"
        />
        <h3 class="text-xl font-bold mb-2">{{ promo.title }}</h3>
        <p class="text-sm text-verde/90 mb-4 leading-relaxed font-nunito">
          {{ promo.description }}
        </p>
        <span class="inline-block bg-limon text-[#333C2F] px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
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

<style scoped>

</style>
