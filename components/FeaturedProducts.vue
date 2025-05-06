<template>
    <section class="my-10">
      <h2 class="text-2xl font-bold text-center mb-6">Productos Destacados</h2>
      <!-- Filtramos los productos destacados -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import ProductCard from './ProductCard.vue'
  
  const props = defineProps({
    products: {
      type: Array,
      required: true
    }
  })
  
  const emit = defineEmits(['add-to-cart'])
  
  // Filtrar los productos destacados
  const featuredProducts = computed(() => {
    return props.products.filter(product => product.featured)
  })
  
  function handleAddToCart(product) {
    emit('add-to-cart', product)
  }
  </script>
  
  <style scoped>
  /* Puedes agregar más estilos si es necesario */
  </style>
  