<template>
  <section class="p-6 bg-white shadow rounded mb-6">
    <Toast ref="toastRef" />
    <div v-for="category in categories" :key="category.name" class="mb-10">
      <!-- Header de Categoría -->
      <div class="text-center mb-8">
        <img v-if="category.image" :src="category.image" :alt="`Imagen de ${category.name}`"
          class="mx-auto w-20 h-20 object-cover rounded-full mb-3" />
        <h2 class="text-3xl font-bold text-gray-800">{{ category.name }}</h2>
        <p class="text-gray-500 mt-2">Disfruta de nuestras opciones saludables y deliciosas</p>
      </div>

      <!-- Lista de productos en formato fila -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="product in productsByCategory(category.name)" :key="product.id"
          class="flex items-center gap-6 p-4 border-b border-gray-200">
          <!-- Imagen del producto -->
          <img :src="product.image" :alt="`Imagen de ${product.name}`" class="w-20 h-20 object-cover rounded" />

          <!-- Detalles del producto -->
          <div class="flex-1 flex flex-col">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
              <span class="text-primary font-bold text-lg">${{ product.price.toFixed(2) }}</span>
            </div>
            <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>

            <!-- Botón alineado a la derecha -->
            <button @click="handleAddToCart(product)"
              class="self-end text-lg font-bold verde bg-dorado px-3 py-1 rounded hover:bg-primary-dark transition-colors">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import Toast from './Toast.vue'
import { ref, onMounted } from 'vue'


const toastRef = ref()


function triggerToast(name) {
  console.log("pedo")
  toastRef.value?.showToast('Producto '+name+'! agregado con exito')
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