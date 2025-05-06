<template>
  <header class="bg-verde text-pastel py-1 shadow-md font-display w-full">
    <div class="  flex  gap-1 lg:gap-0 items-center justify-between pl-4  pr-4">
      <!-- Logo -->
      <div class=" hidden md:flex align-middle items-center gap-1">
        <div class="circulo-externo">
          <div class="circulo-interno">
            <img src="/images/logoSinFondo.png" alt="" class=" h-14">
          </div>
        </div>
        <div class="limon  lg:flex lg:text-4xl font-bold font-amatic "> Sano Delirio</div>
      </div>

   

      <!-- Navegación escritorio -->
      <nav class="hidden md:flex space-x-6 text-lg font-extrabold limon">
        <NuxtLink to="/" class="hover:text-white transition">Inicio</NuxtLink>
        <NuxtLink to="/menu" class="hover:text-white transition">Menu</NuxtLink>
        <NuxtLink to="/about" class="hover:text-white text-pastel">Acerca de</NuxtLink>
      </nav>

      <!-- Botón carrito -->
      <div class="relative mr-4">
        <button @click="toggleCart" class="text-pastel">
          <Icon name="my-icon:shopping-cart" class="w-7 h-7 md:w-10 md:h-10" />
          <span v-if="cartItems > 0"
            class="absolute -top-1 -right-2 flex items-center justify-center w-3 h-3 md:w-6 md:h-6 bg-blanco text-red-700 font-extrabold rounded-full text-sm">
            {{ cartItems }}
          </span>
        </button>
      </div>

      <div class="limon  md:hidden text-2xl lg:text-4xl font-bold font-amatic "> Sano Delirio</div>

      <!-- Botón hamburguesa -->
      <button class="md:hidden text-pastel" @click="menuOpen = !menuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil -->
    <div v-if="menuOpen" class="md:hidden bg-marronClaro limon">
      <NuxtLink to="/" class="block hover:text-pastel p-4" @click="menuOpen = false">Inicio</NuxtLink>
      <NuxtLink to="/menu" class="hover:text-white transition  p-4">Menu</NuxtLink>
      <NuxtLink to="/about" class="block hover:text-pastel  p-4" @click="menuOpen = false">Acerca de</NuxtLink>
    </div>

    <!-- Modal carrito -->
    <CartModal v-if="showCart" @checkout="redirectToWhatsApp" @close="showCart = false" />
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import CartModal from '@/components/CartModal.vue'

const cartStore = useCartStore()
const showCart = ref(false)
const menuOpen = ref(false)

const cartItems = computed(() => cartStore.cart.length)

const toggleCart = () => {
  showCart.value = !showCart.value
  menuOpen.value = false
}

const redirectToWhatsApp = () => {
  const message = encodeURIComponent(
    'Hola, quiero finalizar mi compra con los siguientes productos: ' +
    cartStore.cart.map(p => p.name).join(', ')
  )
  window.open(`https://wa.me/573001112233?text=${message}`, '_blank')
}
</script>


<style scoped>
.circulo-externo {
  width: 70px;
  height: 70px;
  border: 2px solid var(--verde-pastel);
  /* Borde exterior (marrón claro) */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.circulo-interno {
  width: 60px;
  height: 60px;
  background-color: var(--verde-pastel);
  /* Verde del fondo interno */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>