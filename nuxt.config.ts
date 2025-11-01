// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag)
    }
  },
  modules: [
    ['@nuxtjs/sitemap', {
      siteUrl: 'https://uniappli.fr',
      exclude: [
        '/inscription/merci',
        '/contact/merci',
        '/rendez-vous/merci'
      ]
    }],
    ['@nuxtjs/robots', {
      rules: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/inscription/merci', '/contact/merci', '/rendez-vous/merci'] }
      ],
      sitemap: 'https://uniappli.fr/sitemap.xml'
    }]
  ],
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
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s · UniAppli',
      meta: [
        { name: 'description', content: 'UniAppli — solution clé en main pour automatiser prospection et marketing, et booster votre activité.' },
        { name: 'theme-color', content: '#BA67CF' },
        { property: 'og:site_name', content: 'UniAppli' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'og:image', content: '/og/home.png' },
        { name: 'twitter:image', content: '/og/home.png' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://link.msgsndr.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://api.leadconnectorhq.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://unpkg.com', crossorigin: 'anonymous' }
      ],
      script: [
        {
          src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
          defer: true,
        },
      ],
    },
  }
})
