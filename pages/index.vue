<template>
    <div class="min-h-screen bg-gradient-to-r from-[#1f261c] via-[#2b3327] to-[#4B5136]  text-white font-sans">
        <Header />

        <Banner />

        <main class="p-8 max-w-7xl mx-auto">
            <!-- Productos -->
            <section class="mb-16 ">
                <h2 class="text-3xl text-center font-semibold text-[#EFE49D] mb-8">Nuestros Productos</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    <ProductCard v-for="(product, i) in products" :key="i" :product="product" />
                </div>
            </section>

            <!-- Promociones -->
            <Promotions />
       
        </main>

        <Footer />
    </div>
</template>

<script setup>

import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import ProductCard from '@/components/ProductCard.vue'
import Promotions from '@/components/Promotions.vue'
import Footer from '@/components/Footer.vue'

const products = [
    {
        name: 'Galletas de avena',
        price: '$50',
        image: '/images/galleta.png'
    },
    {
        name: 'Torta de zanahoria',
        price: '$120',
        image: '/images/torta.png'
    },
    {
        name: 'Pan integral',
        price: '$80',
        image: '/images/pan.png'
    }
];
</script>

<style>
body {
    font-family: 'Quicksand', sans-serif;
}
</style>