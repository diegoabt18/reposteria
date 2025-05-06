<template>
    <Header />
    <Menu :categories="categories" :products="products" @add-to-cart="addToCart" />
    <Footer />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Menu from '~/components/Menu.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const products = productStore.products

import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const showCart = ref(false) 


const categories = computed(() => {
  const catMap = {}
  products.forEach(p => {
    if (!catMap[p.category]) {
      catMap[p.category] = {
        name: p.category,
        image: p.categoryImg // Usa una imagen representativa para la categoría
      }
    }
  })
  return Object.values(catMap)
})


// Función para agregar productos al carrito
function addToCart(product) {
  cartStore.addToCart(product)
  showCart.value = true
}
</script>