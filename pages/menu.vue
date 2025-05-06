<template>
    <Header />
    <Menu :categories="categories" :products="products" @add-to-cart="addToCart" />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Menu from '~/components/Menu.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const products = productStore.products


const categories = computed(() => {
  const catMap = {}
  products.forEach(p => {
    if (!catMap[p.category]) {
      catMap[p.category] = {
        name: p.category,
        image: p.image // Usa una imagen representativa para la categoría
      }
    }
  })
  return Object.values(catMap)
})
</script>