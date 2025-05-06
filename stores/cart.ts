import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const addToCart = (product) => {
    cart.value.push(product)
  }

  const clearCart = () => {
    cart.value = []
  }

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price, 0)
  )

  return { cart, addToCart, clearCart, totalPrice }
})