<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const emit = defineEmits(['checkout', 'close'])

// Agrupa productos duplicados
const groupedCart = computed(() => {
  const groups = {}
  cartStore.cart.forEach(item => {
    if (!groups[item.name]) {
      groups[item.name] = { ...item, quantity: 1 }
    } else {
      groups[item.name].quantity += 1
    }
  })
  return Object.values(groups)
})

// Calcula el total
const total = computed(() =>
  cartStore.cart.reduce((sum, item) => sum + item.price, 0)
)

// Eliminar un producto del carrito
const removeItem = (itemId) => {
  const itemIndex = cartStore.cart.findIndex(item => item.id === itemId)
  if (itemIndex > -1) {
    cartStore.cart.splice(itemIndex, 1)  // Elimina el primer producto encontrado
  }
}

// Checkout con mensaje para WhatsApp
const checkout = () => {
  const productsText = groupedCart.value.map(item => {
    return `🛍 *${item.name}* x${item.quantity}\n- Unitario: ${item.price}$\n- Subtotal: ${item.price * item.quantity}$`
  }).join('\n\n')

  const totalText = `💰 *Total: ${total.value}$*`

  const message = `Hola *SanoDelirio*, me gustaría realizar el siguiente pedido:\n\n${productsText}\n\n${totalText}`

  const whatsappURL = `https://wa.me/573001112233?text=${encodeURIComponent(message)}`

  window.open(whatsappURL, '_blank')

  emit('checkout')
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex justify-center items-center px-4">
    <div class="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 text-center">
        🛒 Carrito de Compras
      </h2>

      <div v-if="cartStore.cart.length === 0" class="text-center text-gray-500">
        Tu carrito está vacío
      </div>

      <!-- Tabla en pantallas medianas y grandes -->
      <div v-if="cartStore.cart.length > 0" class="hidden sm:block overflow-x-auto font-nunito">
        <table class="w-full text-left text-gray-700">
          <thead>
            <tr class="border-b">
              <th class="pb-2">Imagen</th>
              <th class="pb-2">Producto</th>
              <th class="pb-2">Cantidad</th>
              <th class="pb-2">Unitario</th>
              <th class="pb-2">Subtotal</th>
              <th class="pb-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in groupedCart" :key="item.id" class="border-b py-2">
              <td class="py-2">
                <img :src="item.image" alt="Producto" class="w-12 h-12 object-cover rounded" />
              </td>
              <td>{{ item.name }}</td>
              <td>x{{ item.quantity }}</td>
              <td>{{ item.price }}$</td>
              <td>{{ item.price * item.quantity }}$</td>
              <td>
                <button @click="removeItem(item.id)" class="text-red-500 hover:text-red-700 cursor-pointer">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Vista tipo tarjeta en móviles -->
      <div v-if="cartStore.cart.length > 0" class="block sm:hidden space-y-4">
        <div
          v-for="item in groupedCart"
          :key="item.id"
          class="flex items-center gap-4 border p-3 rounded-lg shadow-sm bg-gray-50"
        >
          <img :src="item.image" alt="Producto" class="w-16 h-16 object-cover rounded" />
          <div class="flex-1">
            <p class="font-semibold text-gray-800">{{ item.name }}</p>
            <p class="text-sm text-gray-600">Cantidad: x{{ item.quantity }}</p>
            <p class="text-sm text-gray-600">Unitario: {{ item.price }}$</p>
            <p class="text-sm font-medium text-gray-700">
              Subtotal: {{ item.price * item.quantity }}$
            </p>
            <button @click="removeItem(item.id)" class="text-red-500 hover:text-red-700 cursor-pointer">
            Eliminar
          </button>
          </div>
       
        </div>
      </div>

      <!-- Total -->
      <div class="flex justify-end text-base sm:text-lg font-semibold text-gray-800 mt-4">
        Total: {{ total }}$
      </div>

      <!-- Botones -->
      <div class="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
        <button
          @click="$emit('close')"
          class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition w-full sm:w-auto cursor-pointer"
        >
          Cerrar
        </button>
        <button
          @click="checkout"
          class="px-4 py-2 rounded-lg bg-verde text-white hover:opacity-90 transition w-full sm:w-auto cursor-pointer"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</template>
