<template>
  <section class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    <div class="mx-auto w-full max-w-3xl">
      <h1 class="text-3xl sm:text-4xl font-bold leading-tight text-default text-center">
        <span class="text-primary-gradient font-lobster drop-shadow-md text-4xl sm:text-5xl">Le Blog</span>
        <span class="block mt-2">Conseils simples pour attirer des clients automatiquement</span>
      </h1>

      <div class="mt-10 grid grid-cols-1 gap-6">
        <article class="rounded-2xl border border-default bg-white/50 backdrop-blur-md p-6 shadow-sm">
          <h2 class="text-2xl font-semibold text-default">
            <NuxtLink to="/blog/clarifier-offre-client" class="hover:underline">
              🎯 Voici comment clarifier votre offre et votre client cible
            </NuxtLink>
          </h2>
          <p class="mt-2 text-muted">La clarté rend votre message magnétique et attire naturellement les bons clients.</p>
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <NuxtLink to="/blog/clarifier-offre-client" class="btn btn-gradient">Lire l’article</NuxtLink>
          </div>
        </article>
        <article class="rounded-2xl border border-default bg-white/50 backdrop-blur-md p-6 shadow-sm">
          <h2 class="text-2xl font-semibold text-default">
            <NuxtLink to="/blog/attirer-prospects-contenu-cible" class="hover:underline">
              🌟 Comment attirer vos prospects avec du contenu ciblé
            </NuxtLink>
          </h2>
          <p class="mt-2 text-muted">Choisir un canal, parler des vrais problèmes et publier avec constance pour attirer naturellement.</p>
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <NuxtLink to="/blog/attirer-prospects-contenu-cible" class="btn btn-gradient">Lire l’article</NuxtLink>
          </div>
        </article>
        <article class="rounded-2xl border border-default bg-white/50 backdrop-blur-md p-6 shadow-sm">
          <h2 class="text-2xl font-semibold text-default">
            <NuxtLink to="/blog/capturer-interet-landing-page" class="hover:underline">
              🪄 Capturer l’intérêt grâce à une landing page
            </NuxtLink>
          </h2>
          <p class="mt-2 text-muted">Pourquoi une page d’inscription transforme vos visiteurs en contacts engagés — et comment la structurer.</p>
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <NuxtLink to="/blog/capturer-interet-landing-page" class="btn btn-gradient">Lire l’article</NuxtLink>
          </div>
        </article>
        <article class="rounded-2xl border border-default bg-white/50 backdrop-blur-md p-6 shadow-sm">
          <h2 class="text-2xl font-semibold text-default">
            <NuxtLink to="/blog/nurturer-sequence-emails-automatisee" class="hover:underline">
              💌 Nurturer avec une séquence d’emails automatisée
            </NuxtLink>
          </h2>
          <p class="mt-2 text-muted">Construire la confiance avec une séquence simple, humaine et automatisée.</p>
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <NuxtLink to="/blog/nurturer-sequence-emails-automatisee" class="btn btn-gradient">Lire l’article</NuxtLink>
          </div>
        </article>
        <article class="rounded-2xl border border-default bg-white/50 backdrop-blur-md p-6 shadow-sm">
          <h2 class="text-2xl font-semibold text-default">
            <NuxtLink to="/blog/optimiser-automatiser-en-continu" class="hover:underline">
              ⚙️ Optimiser et automatiser en continu
            </NuxtLink>
          </h2>
          <p class="mt-2 text-muted">Piloter votre système: analyser, écouter, améliorer et automatiser par petites étapes.</p>
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <NuxtLink to="/blog/optimiser-automatiser-en-continu" class="btn btn-gradient">Lire l’article</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead, useRequestURL } from '#imports'

const url = useRequestURL()
useHead({
  title: 'Blog · Conseils pour coachs & thérapeutes',
  meta: [
    { name: 'description', content: 'Des ressources simples et concrètes pour mettre en place un système d’acquisition automatique et développer votre activité.' }
  ],
  link: [ { rel: 'canonical', href: url.href } ]
})
</script>
