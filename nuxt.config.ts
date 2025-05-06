// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    '@/assets/css/fonts.css'
  ], icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },
  modules: ['@nuxt/ui', '@nuxt/icon', '@pinia/nuxt'],
  plugins: ['~/plugins/fontawesome.js'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})