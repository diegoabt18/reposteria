<template>
    <transition name="fade">
      <div v-if="visible" class="fixed top-4 right-4 bg-dorado verde font-nunito font-bold px-4 py-2 rounded shadow">
        {{ message }}
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const visible = ref(false)
  const message = ref('')
  
  function showToast(msg = 'Este es un toast') {
    message.value = msg
    visible.value = true
    setTimeout(() => (visible.value = false), 3000)
  }
  
  // Exponer la función
  defineExpose({ showToast })
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>