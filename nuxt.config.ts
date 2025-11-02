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
    '@nuxt/image',
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
  nitro: {
    preset: 'vercel', // pas 'vercel-edge'
  },
  routeRules: {
    // Improve caching for transformed images on Vercel
    '/_ipx/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, immutable'
      }
    }
  },
  image: {
    provider: 'vercel',

    // Déclare TOUTES les largeurs que tu utilises (ex: 320, 560, 640, 400 etc.)
    // → Vercel ne redimensionne que les tailles listées
    screens: {
      xs: 320,
      sm: 560,
      md: 640,
      mdFixed: 400,   // pour sizes: "md:400px"
      lg: 768,
      xl: 1024,
      '2xl': 1280
    },

    // Qualité par défaut
    quality: 70,

    // Formats autorisés par Vercel (mime types)
    vercel: {
      formats: ['image/webp']   // tu voulais webp only
    },

    // Pour les images distantes (si tu en as)
    domains: ['res.cloudinary.com', 'cdn.uniappli.fr']
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
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'UniAppli',
            url: 'https://uniappli.fr',
            logo: 'https://uniappli.fr/UniAppli.png'
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'UniAppli',
            url: 'https://uniappli.fr'
          })
        },
      ],
    },
  }
})
