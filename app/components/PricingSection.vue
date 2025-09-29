<template>
  <section class="relative py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-4xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <lottie-player
            src="/lotties/dollar.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="inline-block align-middle mr-2 w-10 h-10"
            aria-label="Animation dollar"
          ></lottie-player>
          <span class="text-primary-gradient">Tarifs</span>
        </h2>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded"></div>
        <p class="mt-6 text-lg text-muted max-w-2xl">
          Choisissez l'option qui vous convient. Aucun coût caché, tout est inclus.
        </p>
      </div>

      <!-- Pricing cards -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Monthly subscription -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm h-full flex flex-col">
          <h3 class="text-xl font-semibold text-default flex items-center gap-2">
            <span>Abonnement mensuel</span>
            <span class="text-sm px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">Recommandé</span>
          </h3>
          <div class="mt-3 text-4xl font-bold text-default">
            <span class="text-primary-gradient">197 €</span>
            <span class="text-base font-medium text-muted">/mois</span>
          </div>
          <p class="mt-4 text-default font-medium">Tout compris :</p>
          <ul class="mt-3 space-y-2 text-muted list-disc pl-5">
            <li>Hébergement</li>
            <li>CRM</li>
            <li>Support</li>
            <li>Mise à jour</li>
            <li>Optimisation continue</li>
          </ul>
          <div class="mt-auto pt-6 flex justify-center md:justify-end">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
              >
              Démarrer mon abonnement
            </NuxtLink>
          </div>
        </div>

        <!-- Setup fee -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm h-full flex flex-col">
          <h3 class="text-xl font-semibold text-default">Frais de mise en place complète</h3>
          <div class="mt-3 text-4xl font-bold text-default">
            <span class="text-primary-gradient">797 €</span>
          </div>
          <p class="mt-4 text-muted">
            Mise en place de l'écosystème complet (tunnel, CRM, automatisations, tracking, contenus clés, connecteurs...).
          </p>
          <div class="mt-auto pt-6 flex justify-center md:justify-end">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
              >
              Réserver ma mise en place
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Note -->
      <p class="mt-6 text-sm text-muted">
        Besoin d'un plan sur-mesure ? Contactez-nous pour une offre adaptée à votre activité.
      </p>
    </div>
  </section>
</template>
