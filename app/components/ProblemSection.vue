<template>
  <section class="relative py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <span class="align-middle mr-2">🎯</span>
          <span class="text-primary-gradient">Le problème</span>
        </h2>
        <div class="mt-3 h-1 w-24 bg-primary-gradient rounded"></div>
        <p class="mt-6 text-lg text-muted max-w-2xl">
          Beaucoup de professionnels gaspillent de l'énergie dans la prospection au lieu de se concentrer sur leur savoir‑faire. Si cela vous parle, vous n'êtes pas seul.
        </p>
      </div>

      <!-- Content -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/50">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous perdez des heures précieuses dans des tâches chronophages pour acquérir de nouveaux contacts.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/50">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous avez peur de passer à côté des dernières innovations et de perdre de l’argent.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/50">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous avez l’impression d’être en réaction plutôt qu’en action.</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/50">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous rêvez d’un “double” de vous qui gère automatiquement vos prospects et vos clients.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/50">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous n’avez pas un suivi clair de vos prospects ni de vos clients.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/50">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous avez du mal à vous démarquer de la concurrence.</p>
          </div>
        </div>
      </div>

      <!-- CTA subtle -->
      <div class="mt-10">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg border border-default px-5 py-2.5 font-medium text-default hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
        >
          Parler de vos enjeux
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
