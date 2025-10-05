<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <!-- Background -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0">
      <div class="bg-primary-gradient opacity-25 blur-3xl w-[40rem] h-[40rem] rounded-full absolute -top-40 -left-32"></div>
      <div class="bg-primary-gradient opacity-15 blur-3xl w-[32rem] h-[32rem] rounded-full absolute -bottom-40 -right-24"></div>
    </div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
          <span class="text-primary-gradient font-lobster drop-shadow-md">Nos Services</span>
        </h1>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded mx-auto"></div>
        <p class="mt-6 text-lg text-muted">Ce que vous recevez concrètement avec UniAppli.</p>
      </div>

      <!-- Deliverables -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 1. Tunnel de vente -->
        <div class="p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h2 class="text-2xl font-bold">Tunnel de vente personnalisé</h2>
          <ul class="mt-4 list-disc pl-5 text-default space-y-2">
            <li>Pages d’inscription, de vente et de réservation adaptées à votre activité.</li>
            <li>Copywriting de base et structure orientée conversion.</li>
            <li>Intégration pixel/UTM (si demandé) et suivi des conversions.</li>
          </ul>
        </div>
        <!-- 2. CRM -->
        <div class="p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h2 class="text-2xl font-bold">CRM professionnel</h2>
          <ul class="mt-4 list-disc pl-5 text-default space-y-2">
            <li>Pipeline de prospects préconfiguré.</li>
            <li>Fiches contacts et suivi d’activité.</li>
            <li>Tableau de bord et reporting essentiels.</li>
          </ul>
        </div>
        <!-- 3. Automatisations -->
        <div class="p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h2 class="text-2xl font-bold">Automatisations marketing</h2>
          <ul class="mt-4 list-disc pl-5 text-default space-y-2">
            <li>Emails/SMS de nurturing, rappels et confirmation.</li>
            <li>Scénarios d’engagement personnalisables.</li>
            <li>Déclencheurs basés sur les actions des prospects.</li>
          </ul>
        </div>
        <!-- 4. Prise de rendez-vous -->
        <div class="p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h2 class="text-2xl font-bold">Prise de rendez-vous automatisée</h2>
          <ul class="mt-4 list-disc pl-5 text-default space-y-2">
            <li>Widget de réservation synchronisé avec votre calendrier.</li>
            <li>Rappels automatiques et intégration CRM.</li>
            <li>Disponibilités et plages configurables.</li>
          </ul>
        </div>
        <!-- 5. Formation & support -->
        <div class="p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm md:col-span-2">
          <h2 class="text-2xl font-bold">Formation & ressources</h2>
          <ul class="mt-4 list-disc pl-5 text-default space-y-2">
            <li>Onboarding guidé et tutoriels pas à pas.</li>
            <li>Ressources pédagogiques pour améliorer vos résultats.</li>
            <li>Support par email pendant la mise en place.</li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 flex justify-center">
        <NuxtLink
          to="/rendez-vous"
          class="inline-flex items-center justify-center rounded-full bg-primary-gradient text-white px-6 py-3 font-bold shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-transform duration-200 hover:scale-[1.03]">
          Prendre un rendez-vous
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Page Services statique avec sections de livrables
</script>
