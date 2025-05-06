<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const emit = defineEmits(['checkout', 'close'])

const checkout = () => {
  emit('checkout')
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white rounded-lg p-4 max-w-lg w-full">
      <h2 class="text-xl font-bold mb-4">Carrito de Compras</h2>
      <div v-if="cartStore.cart.length === 0" class="text-center">Tu carrito está vacío</div>
      <ul v-else>
        <li v-for="item in cartStore.cart" :key="item.id" class="flex justify-between mb-2">
          <span>{{ item.name }}</span>
          <span>{{ item.price }}$</span>
        </li>
      </ul>
      <div class="flex justify-between mt-4">
        <button @click="$emit('close')" class="bg-gray-300 py-2 px-4 rounded">Cerrar</button>
        <button @click="checkout" class="bg-blue-500 text-white py-2 px-4 rounded">Finalizar compra</button>
      </div>
    </div>
  </div>
</template>
