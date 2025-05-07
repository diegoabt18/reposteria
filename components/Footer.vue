<template>
    <footer class="bg-[#4B5136] text-[#EFE49D] py-10">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Marca -->
            <div>
                <h2 class="text-2xl font-bold mb-4">Sano Delirio</h2>
                <p class="text-sm text-[#DAD4A0]">
                    Repostería artesanal con ingredientes naturales, pasión y tradición. Hecho con amor desde nuestra
                    cocina hasta tu mesa.
                </p>
            </div>

            <!-- Enlaces -->
            <div>
                <h3 class="text-xl font-semibold mb-4">Enlaces</h3>
                <ul class="space-y-2 text-[#DAD4A0] text-sm">
                    <li><NuxtLink to="/" class="hover:text-white">Inicio</NuxtLink></li>
                    <li><a href="/menu" class="hover:text-white">Menu</a></li>
                    <li><a href="/#reposteria" class="hover:text-white">Horarios de atención</a></li>
                    <li><a href="/#promociones" class="hover:text-white">Promociones</a></li>
                    <li><a href="/about" class="hover:text-white">Acerca de</a></li>
                   
                </ul>
            </div>

            <!-- Contacto -->
            <div>
                <h3 class="text-xl font-semibold mb-4">Contáctanos</h3>
                <ul class="text-[#DAD4A0] text-sm space-y-2">
                    <li>📍 Av 0 # 0N - 15 local 5, quinta Bosch </li>
                    <li>📞 +57 311 324 5413</li>
                    <li>✉️ hola@sanodelirio.co</li>
                </ul>
            </div>
        </div>

        <!-- Línea inferior -->
        <div class="text-center text-xs text-[#DAD4A0] mt-8 border-t border-[#A8A35E] pt-4">
            © 2025 Sano Delirio. Todos los derechos reservados.
        </div>
    </footer>
</template>