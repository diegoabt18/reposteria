<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-black"
          @click="$emit('close')"
        >
          <i class="fas fa-times text-xl"></i>
        </button>
        <h2 class="text-xl font-bold text-center mb-4">Nuestros Horarios</h2>
        <div class="space-y-2">
          <p><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Sábados:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Domingos:</strong> Cerrado</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>