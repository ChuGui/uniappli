<template>
  <div class="relative">
    <!-- Main content with section anchors (full-width sections) -->
    <section id="accueil"><HeroHome /></section>
    <section id="probleme"><ProblemSection /></section>
    <section id="solution"><SolutionSection /></section>

    <section id="tarifs"><PricingSection /></section>
    <section id="action"><ActionSection /></section>

    <!-- Floating breadcrumb over content (hidden on small screens) -->
    <nav
      class="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
      aria-label="Navigation sections"
    >
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        @click.prevent="scrollTo(item.id)"
        class="group inline-flex items-center gap-3 px-3 py-2 rounded-full border border-default bg-white/50 backdrop-blur-md shadow-sm transition-all duration-200 hover:scale-[1.02]"
        :class="activeId === item.id ? 'ring-2 ring-[var(--color-primary-start)]' : 'hover:bg-white/70'"
      >
        <lottie-player
          v-if="lotties[item.id]"
          :src="lotties[item.id]"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="w-5 h-5"
          :aria-label="`Icône ${item.label}`"
        ></lottie-player>
        <span class="text-sm font-medium text-default">{{ item.label }}</span>
      </a>
    </nav>

    <!-- Mobile-only floating breadcrumb (Accueil, Garantie, Tarifs) -->
    <nav
      class="flex lg:hidden fixed right-3 bottom-6 z-40 flex-col gap-2"
      aria-label="Navigation sections (mobile)"
    >
      <a
        v-for="item in mobileItems"
        :key="item.id"
        :href="`#${item.id}`"
        @click.prevent="scrollTo(item.id)"
        class="group inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-default bg-white/60 backdrop-blur-md shadow-sm transition-all duration-200 hover:scale-[1.02]"
        :class="activeId === item.id ? 'ring-2 ring-[var(--color-primary-start)]' : 'hover:bg-white/80'"
      >
        <lottie-player
          v-if="lotties[item.id]"
          :src="lotties[item.id]"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="w-5 h-5"
          :aria-label="`Icône ${item.label}`"
        ></lottie-player>
        <span class="text-xs font-medium text-default">{{ item.label }}</span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useHead, useRequestURL } from '#imports'

type Item = { id: string; label: string }
const items: Item[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'probleme', label: 'Problème' },
  { id: 'solution', label: 'Solution' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'action', label: 'Action' },
]

const activeId = ref<string>('accueil')

// Lottie icons per section (used in the floating breadcrumb)
const lotties: Record<string, string> = {
  accueil: '/lotties/business-team.json',
  probleme: '/lotties/under-maintenance.json',
  solution: '/lotties/solution.json',
  tarifs: '/lotties/dollar.json',
  action: '/lotties/rocket-solo.json',
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer: IntersectionObserver | null = null
onMounted(() => {
  const sections = items
    .map(i => document.getElementById(i.id))
    .filter((el): el is HTMLElement => !!el)

  observer = new IntersectionObserver(
    entries => {
      // Pick the entry most visible in viewport
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
      if (visible[0]?.target?.id) activeId.value = visible[0].target.id
    },
    { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.1, 0.25, 0.5, 0.75] }
  )

  sections.forEach(s => observer!.observe(s))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

// Items to show on mobile only (Accueil, Tarifs)
const mobileItems = items.filter(i => ['accueil', 'tarifs'].includes(i.id))

const url = useRequestURL()
useHead({
  title: 'UniAppli · Système d’acquisition automatique pour coachs et thérapeutes',
  meta: [
    { name: 'description', content: 'Mettez en place un système clé en main pour attirer, qualifier et convertir automatiquement vos clients avec UniAppli.' }
  ],
  link: [ { rel: 'canonical', href: url.href } ],
  script: [
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
    }
  ]
})
</script>

