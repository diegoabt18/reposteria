<template>
  <section class="p-6 bg-white shadow rounded mb-6 animate-fade-in overflow-x-hidden">
    <Toast ref="toastRef" />
    <div v-for="category in categories" :key="category.name" class="mb-10">
      <!-- Header de Categoría -->
      <div class="text-center mb-8 transition-all duration-700 ease-out transform hover:scale-105">
        <img v-if="category.image" :src="category.image" :alt="`Imagen de ${category.name}`"
          class="mx-auto w-20 h-20 object-cover rounded-full mb-3 shadow-md transition hover:rotate-3 hover:scale-110" />
        <h2 class="text-3xl font-bold text-gray-800">{{ category.name }}</h2>
        <p class="text-gray-500 mt-2">Disfruta de nuestras opciones saludables y deliciosas</p>
      </div>

      <!-- Lista de productos en formato fila -->
      <transition-group name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="product in productsByCategory(category.name)" :key="product.id"
          class="flex items-center gap-6 p-4 border-b border-gray-200 bg-white rounded-lg shadow transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg">
          <!-- Imagen del producto -->
          <img :src="product.image" :alt="`Imagen de ${product.name}`" class="w-20 h-20 object-cover rounded" />

          <!-- Detalles del producto -->
          <div class="flex-1 flex flex-col">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <span class="text-primary font-bold text-lg">${{ product.price.toFixed(2) }}</span>
            </div>
            <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>

            <!-- Botón con animación vistosa -->
            <button @click="handleAddToCart(product)"
              class="self-end cursor-pointer hover-button text-lg font-bold verde bg-dorado px-4 py-2 rounded-xl shadow-md hover:shadow-xl hover:bg-primary-dark transform transition duration-300 ease-out active:scale-90 active:ring-4 active:ring-dorado/50">
              Agregar al carrito
            </button>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>


<script setup>

import Toast from './Toast.vue'
import { ref, onMounted } from 'vue'


const toastRef = ref()


function triggerToast(name) {
  toastRef.value?.showToast('Producto ' + name + '! agregado con exito')
}

function handleAddToCart(product) {
  emit('add-to-cart', product)
  triggerToast(product.name)

}

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['add-to-cart'])

const productsByCategory = (categoryName) => {
  return props.products.filter(p => p.category === categoryName)
}


</script>

<style scoped>
.hover-button:hover {
  background-color: var(--verde-pastel);
  color: var(--dorado);
}
</style>