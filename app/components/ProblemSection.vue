<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <!-- Decorative diffuse blobs (background) -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0">
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[36rem] h-[36rem] rounded-full absolute -left-32"></div>
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[28rem] h-[28rem] rounded-full absolute -bottom-44 -right-20"></div>
      <div class="bg-secondary/30 blur-3xl w-[18rem] h-[18rem] rounded-full absolute top-1/3 -right-16"></div>
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <lottie-player
            src="/lotties/under-maintenance.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="inline-block align-middle w-14 h-14 mr-2"
            aria-label="Animation under maintenance"
          ></lottie-player>
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
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous perdez des heures précieuses dans des tâches chronophages pour acquérir de nouveaux contacts.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous avez peur de passer à côté des dernières innovations et de perdre de l’argent.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous avez l’impression d’être en réaction plutôt qu’en action.</p>
          </div>
        </div>
        <div class="space-y-4">
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous rêvez d’un “double” de vous qui gère automatiquement vos prospects et vos clients.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous n’avez pas un suivi clair de vos prospects ni de vos clients.</p>
          </div>
          <div class="flex items-start gap-3 p-4 rounded-xl border border-default bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-md">
            <span class="mt-1 text-secondary">👉</span>
            <p class="text-default">Vous avez du mal à vous démarquer de la concurrence.</p>
          </div>
        </div>
      </div>

      <!-- CTA subtle -->
      <div class="mt-10 flex justify-center md:justify-start">
        <NuxtLink
          to="/rendez-vous"
          class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition transition-transform duration-200 hover:scale-[1.03]"
          >
          Résoudre ces problèmes
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
