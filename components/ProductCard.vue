<template>
    <div class="bg-dark text-white p-4 rounded-lg shadow-md bg-[#4B5136]">
        <img :src="product.image" alt="product.name" class="w-full h-64 object-cover rounded-md" />
        <h3 class="mt-2 text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-secondary font-bold">{{ product.price }}</p>
        <div class="flex justify-end w-full">
            <button
                class="mt-2 bg-secondary text-primary px-4 py-2 rounded-full hover:bg-accent bg-[#EFE49D] text-[#333C2F] font-bold">
                Agregar al Carrito
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
}
</script>