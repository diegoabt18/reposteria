<template>
    <div class="text-center mb-8">
        <h3
        class="text-xl md:text-2xl uppercase text-marronClaro font-semibold tracking-wide mb-2 flex items-center justify-center  gap-2">
        <Icon name="my-icon:coffee-beans " /> Categorias
      </h3>
        <h2 class="text-5xl font-bold text-gray-800">Nuestros Productos</h2>
        <p class="text-gray-500 mt-2 font-nunito">Disfruta de nuestras opciones saludables y deliciosas</p>
    </div>
 
    <div class="mb-6 p-4">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-700">Filtrar por categoría</label>
        <select id="category" v-model="selected" @change="$emit('filter', selected)"
            class="w-full border border-gray-300 rounded-lg p-2">
            <option value="">Todas</option>
            <option v-for="option in options" :key="option.name" :value="option.name">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    options: Array
})

const selected = ref('')
</script>