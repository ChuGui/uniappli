<template>
  <section class="relative py-16 md:py-8 overflow-hidden">
    <!-- Decorative diffuse blobs (background) -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0">
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[36rem] h-[36rem] rounded-full absolute -left-32"></div>
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[28rem] h-[28rem] rounded-full absolute -bottom-44 -right-20"></div>
      <div class="bg-secondary/30 blur-3xl w-[18rem] h-[18rem] rounded-full absolute top-1/3 -right-16"></div>
    </div>
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
        <h3 class="text-2xl sm:text-3xl font-semibold text-default mt-4">Choisissez l'option qui vous convient. <br></br> <span class="text-primary">C'est sans engagement !</span></h3>
      </div>

      <!-- Combined pricing card -->
      <div class="mt-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <!-- Starter -->
          <div class="relative p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md flex flex-col h-full">
            <h3 class="text-xl font-semibold text-default flex items-center gap-2">
              <span>Starter</span>
              <span class="text-sm px-2 py-0.5 rounded-full bg-[rgba(16,185,129,0.12)] text-emerald-600">179 € / mois</span>
            </h3>
            <p class="mt-2 text-sm text-muted">Idéal pour un coach solo qui veut une base automatisée simple.</p>
            <ul class="mt-4 space-y-3 text-default">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Création du CRM complet GoHighLevel</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>1 funnel de conversion (ex : quiz ou lead magnet)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Calendrier de rendez-vous automatisé</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Pipeline de suivi (prospect → rendez-vous → client)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Messagerie centralisée (email, SMS, WhatsApp)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Formulaire de capture intégré au site</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>1 séquence email automatique (5 messages)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Support technique & hébergement GHL inclus</span>
              </li>
            </ul>
            <div class="mt-auto pt-4">
              <!-- <p class="mb-3 text-base md:text-lg font-semibold text-secondary">Objectif : passer du bouche-à-oreille à un système automatique de génération de leads.</p> -->
              <NuxtLink
                to="/contact"
                class="inline-flex w-full items-center justify-center rounded-full bg-secondary text-white px-5 py-2.5 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.02]"
              >
                Choisir Starter
              </NuxtLink>
            </div>
          </div>

          <!-- Full -->
          <div class="relative p-6 rounded-2xl border-2 border-secondary/40 bg-white/50 backdrop-blur-md shadow-md transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-lg flex flex-col h-full">
            <span class="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-white shadow">Populaire</span>
            <h3 class="text-xl font-semibold text-default flex items-center gap-2">
              <span>Full</span>
              <span class="text-sm px-2 py-0.5 rounded-full bg-[rgba(147,51,234,0.12)] text-purple-600">297 € / mois</span>
            </h3>
            <p class="mt-2 text-sm text-muted">Pour un coach qui veut un système marketing complet.</p>
            <ul class="mt-4 space-y-3 text-default">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Tout le Starter, plus :</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>2 funnels complets (quiz + lead magnet ou webinaire)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Site vitrine optimisé SEO (3 pages : accueil, à propos, contact)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Automatisation de suivi par email + SMS + WhatsApp</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Dashboard de performance (suivi des taux de conversion)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Système de prise de rendez-vous + rappels automatiques</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Sequences de nurturing (10 emails) configurées</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Connexion réseaux sociaux (Instagram, Facebook)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Mise en place du blog et articles IA (2/mois)</span>
              </li>
            </ul>
            <div class="mt-auto pt-4">
              <!-- <p class="mb-3 text-base md:text-lg font-semibold text-secondary">Objectif : générer un flux constant de leads qualifiés et les convertir automatiquement.</p> -->
              <NuxtLink
                to="/contact"
                class="inline-flex w-full items-center justify-center rounded-full bg-primary-gradient text-white px-5 py-2.5 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.02]"
              >
                Choisir Full
              </NuxtLink>
            </div>
          </div>

          <!-- Premium -->
          <div class="relative p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md flex flex-col h-full">
            <h3 class="text-xl font-semibold text-default flex items-center gap-2">
              <span>Premium</span>
              <span class="text-sm px-2 py-0.5 rounded-full bg-[rgba(239,68,68,0.12)] text-red-600">497 € / mois</span>
            </h3>
            <!-- <p class="mt-2 text-sm text-muted">Pour un coach déjà établi qui veut un écosystème 100% automatisé.</p> -->
            <ul class="mt-4 space-y-3 text-default">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Tout le Full, plus :</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Tunnel multi-offres (programme, call découverte, upsell)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Campagnes pub Facebook/Instagram intégrées</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Automatisation avancée (follow-up IA, détection d’intérêt, rebooking)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Blog IA illimité (articles SEO mensuels)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Optimisation continue des funnels (A/B tests)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Assistant IA conversationnel (setter automatisé)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Suivi hebdomadaire des performances</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
                <span>Formation 1:1 onboarding + accompagnement stratégique</span>
              </li>
            </ul>
            <div class="mt-auto pt-4">
              <!-- <p class="mb-3 text-base md:text-lg font-semibold text-secondary">Objectif : scaler votre activité avec une machine d’acquisition entièrement automatisée.</p> -->
              <NuxtLink
                to="/contact"
                class="inline-flex w-full items-center justify-center rounded-full bg-secondary text-white px-5 py-2.5 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.02]"
              >
                Choisir Premium
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="my-8 h-px w-full bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"></div>

        <!-- Setup fee -->
        <!-- <div class="p-6 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h4 class="text-default font-semibold">Frais d’intégration</h4>
          <div class="mt-2 text-3xl font-bold text-default">
            <span class="text-primary-gradient">789 €</span>
          </div>
          <p class="mt-3 text-muted">Mise en place complète de l’écosystème :</p>
          <ul class="mt-3 space-y-2 text-muted list-disc pl-5">
            <li>Configuration GHL</li>
            <li>Intégration CRM + pipelines + automatisations</li>
            <li>Design du funnel & setup technique</li>
            <li>Synchronisation email, calendrier, domaines</li>
            <li>Formation de prise en main</li>
          </ul>
        </div> -->

        <!-- CTAs -->
        <!--<div class="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-full bg-primary-gradient text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.03]"
          >
            Parler à un expert
          </NuxtLink>
        </div> -->
      </div>

      <!-- Note -->
      <!--<p class="mt-6 text-sm text-muted">
        Besoin d'un plan sur-mesure ? Contactez-nous pour une offre adaptée à votre activité.
      </p>-->
    </div>
  </section>
</template>
