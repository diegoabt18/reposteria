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
  <div class="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex justify-center items-center">
    <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 text-center">🛒 Carrito de Compras</h2>

      <div v-if="cartStore.cart.length === 0" class="text-center text-gray-500">
        Tu carrito está vacío
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-gray-700">
          <thead>
            <tr class="border-b">
              <th class="pb-2">Imagen</th>
              <th class="pb-2">Producto</th>
              <th class="pb-2">Cantidad</th>
              <th class="pb-2">Precio unitario</th>
              <th class="pb-2">Subtotal</th>
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
            </tr>
          </tbody>
        </table>

        <div class="flex justify-end text-lg font-semibold text-gray-800 mt-4">
          Total: {{ total }}$
        </div>
      </div>

      <div class="flex justify-end gap-4 mt-6">
        <button @click="$emit('close')" class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
          Cerrar
        </button>
        <button
          @click="checkout"
          class="px-4 py-2 rounded-lg bg-verde text-white  transition"
        >
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</template>
