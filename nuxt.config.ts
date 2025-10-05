// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      gaId: 'G-19M8SKYC1G',
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      script: [
        {
          src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
          defer: true,
        },
      ],
    },
  },
})
