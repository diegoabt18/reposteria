<template>
  <div class="fixed inset-0 bg-white/30 backdrop-blur-sm flex justify-center items-center z-50">
    <div class="relative bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
      <!-- Botón de cerrar -->
      <button
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
        @click="$emit('close')"
        aria-label="Cerrar"
      >
        <i class="fas fa-times text-lg"></i>
      </button>

      <!-- Título -->
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">🕒 Nuestros Horarios</h2>

      <!-- Horarios -->
      <div class="space-y-3 text-gray-700">
        <p><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM</p>
        <p><strong>Sábados:</strong> 10:00 AM - 4:00 PM</p>
        <p><strong>Domingos:</strong> Cerrado</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Sin lógica adicional necesaria
</script>

<style scoped>
/* Si necesitas animaciones o efectos adicionales, puedes colocarlos aquí */
</style>
