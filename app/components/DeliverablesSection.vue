<template>
  <section class="relative py-16 md:py-24 bg-gray-50/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-4xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <lottie-player
            src="/lotties/gift.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="inline-block align-middle mr-2 w-10 h-10"
            aria-label="Animation gift"
          ></lottie-player>
          <span class="text-primary-gradient">Ce que vous recevez concrètement</span>
        </h2>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded"></div>
        <p class="mt-6 text-lg text-muted max-w-2xl">
          Tout ce qu’il faut pour attirer, qualifier et convertir, réuni en un seul écosystème pensé pour votre activité.
        </p>
      </div>

      <!-- Deliverables list -->
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Left column -->
        <div class="space-y-4">
          <div class="p-5 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <div class="flex items-start gap-3">
              <span class="text-xl">🔥</span>
              <div>
                <h3 class="text-default font-semibold">Tunnel de vente complet</h3>
                <p class="text-muted">Landing page + séquences d’automatisation prêtes à convertir.</p>
              </div>
            </div>
          </div>
          <div class="p-5 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <div class="flex items-start gap-3">
              <span class="text-xl">🎯</span>
              <div>
                <h3 class="text-default font-semibold">Lead magnet personnalisé</h3>
                <p class="text-muted">Création d’un contenu valeur avec prise de rendez‑vous intégrée.</p>
              </div>
            </div>
          </div>
          <div class="p-5 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <div class="flex items-start gap-3">
              <span class="text-xl">📅</span>
              <div>
                <h3 class="text-default font-semibold">Calendrier éditorial stratégique</h3>
                <p class="text-muted">Planning de publications optimisé pour vos réseaux.</p>
              </div>
            </div>
          </div>
          <div class="p-5 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <div class="flex items-start gap-3">
              <span class="text-xl">🛠️</span>
              <div>
                <h3 class="text-default font-semibold">CRM qui regroupe</h3>
                <ul class="mt-2 space-y-2 text-muted list-disc pl-5">
                  <li>📒 Gestion de calendrier & prises de rendez‑vous automatisées</li>
                  <li>👥 Gestion des contacts selon leurs intérêts</li>
                  <li>📲 Tous vos canaux de communication au même endroit <span class="text-muted">( Instagram, emails, WhatsApp, Messenger… )</span> </li>
                  <li>📅 Planificateur de réseaux sociaux <span class="text-muted">( Programmez vos contenus et reliez directement votre tunnel de vente )</span> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column -->
        <div class="space-y-4">
          <div class="p-5 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <div class="flex items-start gap-3">
              <span class="text-xl">⭐</span>
              <div>
                <h3 class="text-default font-semibold">Filtrage intelligent</h3>
                <p class="text-muted">Score automatique de vos prospects et gestion de vos avis Google.</p>
              </div>
            </div>
          </div>
          <div class="p-5 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <div class="flex items-start gap-3">
              <span class="text-xl">📍</span>
              <div>
                <h3 class="text-default font-semibold">Google Business Profile optimisé</h3>
                <p class="text-muted">Boostez votre visibilité locale avec une fiche parfaitement configurée.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-10 flex justify-center md:justify-start">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.03]"
          >
          Obtenir ma checklist détaillée
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
