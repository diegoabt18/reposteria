<template >
  <div class="w-full">
    <!-- Header con carrito -->
    <Header :cart="cart" :cartVisible="showCart" @toggle-cart="toggleCart" />

    <MainCarousel />

    <TablaDeContenido/>

    <Promotions/>



    <!-- Filtro de productos por categoría -->
    <ProductFilter @filter="applyFilter" :options="categories" />

    <!-- Lista de productos filtrados -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" @add-to-cart="addToCart" />
    </div>

    <!-- Sección Acerca de -->
    <AboutUs />

    <!-- Formulario de contacto -->
    <ContactForm />

    <!-- Footer -->
    <Footer />

    <!-- Modales -->
    <CartModal v-if="showCart" :cart="cart" @checkout="redirectToWhatsApp" @close="showCart = false" />
    <HoursModal v-if="showHours" @close="showHours = false" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import CartModal from '@/components/CartModal.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
import AboutUs from '@/components/AboutUs.vue'
import ContactForm from '@/components/ContactForm.vue'
import Menu from '@/components/Menu.vue'
import HoursModal from '@/components/HoursModal.vue'
import MainCarousel from '~/components/MainCarousel.vue'

import { useCartStore } from '@/stores/cart'
import TablaDeContenido from '~/components/tablaDeContenido.vue'

const cartStore = useCartStore()
const showCart = ref(false)  // Para controlar la visibilidad del carrito
const showHours = ref(false)  // Para controlar la visibilidad del modal de horarios

import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
const products = productStore.products

// Computada para generar las categorías con imágenes opcionales
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

const filteredProducts = ref([...products])

// Función para aplicar el filtro por categoría
function applyFilter(category) {
  filteredProducts.value = category
    ? products.value.filter(p => p.category === category)
    : [...products.value]
}

// Función para agregar productos al carrito
function addToCart(product) {
  cartStore.addToCart(product)
  showCart.value = true
}

// Función para redirigir a WhatsApp para realizar el checkout
function redirectToWhatsApp() {
  const message = encodeURIComponent(
    'Hola, quiero finalizar mi compra con los siguientes productos: ' +
    cart.value.map(p => p.name).join(', ')
  )
  window.open(`https://wa.me/573185804841?text=${message}`, '_blank')
}

// Función para alternar la visibilidad del carrito
function toggleCart() {
  showCart.value = !showCart.value
}
</script>

<style scoped>
/* Tailwind y estilos personalizados para el layout */
</style>