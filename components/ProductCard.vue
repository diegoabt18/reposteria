<template>
  <div class="flex gap-4 border rounded-2xl p-4 bg-white shadow-md">
    <!-- Imagen a la izquierda -->
    <img
      v-if="product.image"
      :src="product.image"
      alt="Imagen del producto"
      class="w-24 h-24 object-cover rounded-lg"
    />

    <!-- Contenido del producto -->
    <div class="flex flex-col justify-between flex-1">
      <div>
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-sm text-gray-600">Categoría: {{ product.category }}</p>
        <p class="text-xl font-bold text-primary mt-1">${{ product.price }}</p>
      </div>
      <button
        class="self-end cursor-pointer hover-button text-lg font-bold verde bg-dorado px-4 py-2 rounded-xl shadow-md hover:shadow-xl hover:bg-primary-dark transform transition duration-300 ease-out active:scale-90 active:ring-4 active:ring-dorado/50"
        @click="$emit('add-to-cart', product)"
      >
        Añadir al carrito
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({ product: Object })
</script>

<style scoped>

.hover-button:hover {
  background-color: var(--verde);
  color: var(--dorado);
}

.bg-secondary {
  background-color: #EFE49D;
}
.text-primary {
  color: #333C2F;
}
.text-dark {
  color: #4B5136;
}
</style>
