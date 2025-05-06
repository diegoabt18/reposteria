<template>
    <section id="contact" class="py-10 font-nunito">
      <div class="max-w-xl mx-auto px-4">
        <h2 class="text-5xl font-bold text-center mb-4 text-primary font-display">Contáctanos</h2>
        <form class="space-y-4">
          <input type="text" placeholder="Nombre" class="w-full border rounded p-2" />
          <input type="email" placeholder="Correo electrónico" class="w-full border rounded p-2" />
          <textarea placeholder="Mensaje" class="w-full border rounded p-2"></textarea>
          <button type="submit" class="bg-secondary text-dark py-2 px-4 rounded hover:opacity-90 w-full font-semibold font-display">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .bg-secondary {
    background-color: #EFE49D;
  }
  .text-dark {
    color: #4B5136;
  }
  .text-primary {
    color: #333C2F;
  }
  </style>
  