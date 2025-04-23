<template>
    <div class="min-h-screen bg-gradient-to-r from-[#1f261c] via-[#2b3327] to-[#4B5136] text-white font-sans">
      <Header />
      <Banner />
  
      <main class="p-8 max-w-7xl mx-auto">
        <!-- Productos -->
        <section ref="productsSection" class="mb-16">
          <h2 class="text-3xl text-center font-semibold text-[#EFE49D] mb-8">Nuestros Productos</h2>
  
          <!-- 🔍 Input de búsqueda -->
          <div class="flex items-center mb-6 mx-auto gap-2 w-full">
            <div class="text-[#EFE49D] font-semibold md:text-2xl flex-1/4 text-lg">
              ¿Qué estás buscando?
            </div>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar productos por nombre..."
              class="w-full p-3 border rounded-xl shadow focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>
  
          <!-- 🛍️ Lista de productos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ProductCard
              v-for="(product, i) in paginatedProducts"
              :key="i"
              :product="product"
            />
          </div>
  
          <!-- 📄 Paginación -->
          <div v-if="totalPages > 1" class="flex justify-center mt-8 space-x-2">
            <button
              @click="goToPage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-4 py-2 bg-[#EFE49D] text-black rounded-xl disabled:opacity-50"
            >
              Anterior
            </button>
  
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'px-4 py-2 rounded-xl',
                page === currentPage ? 'bg-white text-black font-bold' : 'bg-[#EFE49D] text-black'
              ]"
            >
              {{ page }}
            </button>
  
            <button
              @click="goToPage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-4 py-2 bg-[#EFE49D] text-black rounded-xl disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </section>
  
        <!-- Promociones -->
        <Promotions />
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, nextTick } from 'vue'
  
  import Header from '@/components/Header.vue'
  import Banner from '@/components/Banner.vue'
  import ProductCard from '@/components/ProductCard.vue'
  import Promotions from '@/components/Promotions.vue'
  import Footer from '@/components/Footer.vue'
  
  // 🧁 Lista de productos
  const products = ref([
    { name: 'Galletas de avena', price: '$50', image: '/images/galleta.png' },
    { name: 'Torta de zanahoria', price: '$120', image: '/images/torta.png' },
    { name: 'Pan integral', price: '$80', image: '/images/pan.png' },
    { name: 'Muffin de plátano', price: '$60', image: '/images/muffin.png' },
    { name: 'Brownie vegano', price: '$75', image: '/images/brownie.png' },
    { name: 'Croissant integral', price: '$90', image: '/images/croissant.png' },
    { name: 'Pan de centeno', price: '$85', image: '/images/centeno.png' }
  ])
  
  // 🔍 Búsqueda
  const searchQuery = ref('')
  
  // 📄 Paginación
  const currentPage = ref(1)
  const productsPerPage = 6
  
  // Referencia para la sección de productos
  const productsSection = ref(null)
  
  // Filtrar productos por nombre
  const filteredProducts = computed(() => {
    if (!searchQuery.value) return products.value
    return products.value.filter(p =>
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  
  // Total de páginas
  const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / productsPerPage)
  })
  
  // Productos de la página actual
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * productsPerPage
    const end = start + productsPerPage
    return filteredProducts.value.slice(start, end)
  })
  
  // Cambiar de página
  function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
  
      // Scroll al inicio de la sección de productos
      nextTick(() => {
        productsSection.value?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }
  
  // Reiniciar la página a la 1 cuando cambie la búsqueda
  watch(searchQuery, () => {
    currentPage.value = 1
    nextTick(() => {
      productsSection.value?.scrollIntoView({ behavior: 'smooth' })
    })
  })
  </script>
  
  <style>
  body {
    font-family: 'Quicksand', sans-serif;
  }
  </style>