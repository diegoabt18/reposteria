<template >
  <header
    class="bg-verde text-pastel py-1 shadow-md font-display w-full "
  >
    <div class="flex gap-1 lg:gap-0 items-center justify-between pl-4 pr-4">
      <!-- Logo -->
      <div class="hidden md:flex align-middle items-center gap-1 transition-transform duration-500 ease-in-out hover:scale-105">
        <div class="circulo-externo">
          <div class="circulo-interno">
            <img src="/images/logoSinFondo.png" alt="" class="h-14" />
          </div>
        </div>
        <div class="limon lg:flex lg:text-4xl font-bold font-amatic">Sano Delirio</div>
      </div>

      <!-- Navegación escritorio -->
      <nav class="hidden md:flex space-x-6 align-middle text-center items-center  text-lg font-extrabold limon">
        
        <NuxtLink to="/" class="hover:text-white transition-transform duration-300 hover:scale-105">Inicio</NuxtLink>
        <NuxtLink to="/menu" class="hover:text-white transition-transform duration-300 hover:scale-105">Menu</NuxtLink>
        <NuxtLink to="/about" class="hover:text-white text-pastel transition-transform duration-300 hover:scale-105">Acerca de</NuxtLink>
             <!-- Botón carrito -->
      <div class="relative cursor-pointer mr-4 transition-transform duration-300 hover:scale-110">
        <button @click="toggleCart" class="text-pastel cursor-pointer">
          <Icon name="my-icon:shopping-cart1" class="w-7 h-7 md:w-10 md:h-10" />
          <span v-if="cartItems > 0"
            class="absolute -top-1 -right-2 flex items-center justify-center w-3 h-3 md:w-6 md:h-6 bg-blanco text-red-700 font-extrabold rounded-full text-sm">
            {{ cartItems }}
          </span>
        </button>
      </div>
      </nav>

 

      <!-- Logo móvil -->
      <div class="limon md:hidden text-2xl lg:text-4xl font-bold font-amatic transition-transform duration-300 hover:scale-105">
        Sano Delirio
      </div>

      <!-- Botón hamburguesa -->
      <button class="md:hidden text-pastel transition-transform duration-300 hover:scale-110" @click="menuOpen = !menuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Menú móvil -->
    <transition name="slide-fade">
      <div v-if="menuOpen" class="md:hidden bg-marronClaro limon">
        <NuxtLink to="/" class="block hover:text-pastel p-4" @click="menuOpen = false">Inicio</NuxtLink>
        <NuxtLink to="/menu" class="hover:text-white transition p-4">Menu</NuxtLink>
        <NuxtLink to="/about" class="block hover:text-pastel p-4" @click="menuOpen = false">Acerca de</NuxtLink>
      </div>
    </transition>

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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-\[fadeInDown_0\.6s_ease-out_forwards\] {
  animation: fadeInDown 0.6s ease-out forwards;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>