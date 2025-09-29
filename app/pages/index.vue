<template>
  <div class="relative">
    <!-- Main content with section anchors (full-width sections) -->
    <section id="accueil"><HeroHome /></section>
    <section id="probleme"><ProblemSection /></section>
    <section id="solution"><SolutionSection /></section>
    <section id="resultats"><ResultsSection /></section>
    <section id="unicite"><UnicitySection /></section>
    <section id="livrables"><DeliverablesSection /></section>
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
        <span class="inline-block w-2.5 h-2.5 rounded-full bg-primary-gradient"></span>
        <span class="text-sm font-medium text-default">{{ item.label }}</span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

type Item = { id: string; label: string }
const items: Item[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'probleme', label: 'Problème' },
  { id: 'solution', label: 'Solution' },
  { id: 'resultats', label: 'Résultats' },
  { id: 'unicite', label: 'Unicité' },
  { id: 'livrables', label: 'Livrables' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'action', label: 'Action' },
]

const activeId = ref<string>('accueil')

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
</script>
