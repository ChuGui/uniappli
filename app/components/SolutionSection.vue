<template>
  <section class="relative py-16 md:py-24 bg-gray-50/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-4xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <span class="align-middle mr-2">✅</span>
          <span class="text-primary-gradient">La solution : votre système automatique d’acquisition & de gestion de clients</span>
        </h2>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded"></div>
        <p class="mt-6 text-lg text-muted max-w-2xl">
          Nous mettons en place pour vous une infrastructure complète, clé en main, pour attirer, qualifier et convertir vos prospects tout en gardant le contrôle.
        </p>
      </div>

      <!-- Feature grid -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- CRM -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">CRM</div>
            <h3 class="text-lg font-semibold text-default">CRM sur‑mesure</h3>
          </div>
          <p class="mt-3 text-muted">Centralisez prospects, clients et conversations pour ne rien laisser passer.</p>
        </div>
        <!-- Site / Landing -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">WEB</div>
            <h3 class="text-lg font-semibold text-default">Site / Landing page</h3>
          </div>
          <p class="mt-3 text-muted">Pensée pour convertir directement vos visiteurs en rendez‑vous qualifiés.</p>
        </div>
        <!-- Tunnel de vente -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">FUN</div>
            <h3 class="text-lg font-semibold text-default">Tunnel de vente</h3>
          </div>
          <p class="mt-3 text-muted">Un parcours clair qui accompagne vos prospects jusqu’à l’action.</p>
        </div>
        <!-- Lead magnet -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">LM</div>
            <h3 class="text-lg font-semibold text-default">Lead magnet</h3>
          </div>
          <p class="mt-3 text-muted">Un contenu valeur pour attirer et capter des leads qualifiés.</p>
        </div>
        <!-- Automatisations -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">AUTO</div>
            <h3 class="text-lg font-semibold text-default">Automatisations intelligentes</h3>
          </div>
          <p class="mt-3 text-muted">Emails, WhatsApp, SMS, DM Insta… qualification continue sans effort.</p>
        </div>
        <!-- App mobile -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">APP</div>
            <h3 class="text-lg font-semibold text-default">Application mobile</h3>
          </div>
          <p class="mt-3 text-muted">Gérez tout depuis votre poche, où que vous soyez.</p>
        </div>
        <!-- E-réputation -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm hover:shadow transition sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold">REP</div>
            <h3 class="text-lg font-semibold text-default">Réputation en ligne</h3>
          </div>
          <p class="mt-3 text-muted">Optimisez avis, profils et présence digitale pour inspirer confiance.</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg bg-secondary text-white px-6 py-3 font-medium shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
        >
          Démarrer votre système
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
