<template>
  <section class="relative py-16 md:py-8 overflow-hidden">
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
          <span class="text-primary-gradient">Vous êtes bon dans votre métier, <br></br> mais le web ne le sait pas encore.</span>
        </h2>
        <div class="mt-3 h-1 w-24 bg-primary-gradient rounded"></div>
      </div>

      <!-- Content: image left, text right -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Image placeholder (left on desktop) -->
        <div class="order-1 md:order-1">
          <div class="relative">
            <div aria-hidden="true" class="absolute -inset-6 bg-primary-gradient opacity-20 blur-3xl rounded-[2rem]"></div>
            <div class="relative overflow-hidden bg-transparent group">
              <div class="relative aspect-[4/3] w-full [clip-path:inset(0_round_48px_120px_48px_120px)] [transition:clip-path_400ms_ease] group-hover:[clip-path:inset(0_round_64px_96px_64px_96px)]">
                <img
                  src="/images/femme-affaire.jpg"
                  alt="Automatisation et système marketing"
                  loading="lazy"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[var(--color-primary-start)]/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text content (right on desktop) -->
        <div class="order-2 md:order-2 flex flex-col justify-center">
          <h3 class="text-2xl sm:text-3xl font-semibold text-default mb-3">Comme beaucoup de pros, vous</h3>
          <ul class="mt-1 text-default space-y-4 leading-relaxed md:leading-loose">
            <li>⏳ Perdez des heures à prospecter manuellement.</li>
            <li>💭 Ne savez pas toujours d’où viennent vos clients.</li>
            <li>🚀 Avez du mal à vous démarquer malgré la qualité de votre travail.</li>
          </ul>
          <p class="mt-6 text-secondary/90 font-medium leading-relaxed">Ce n’est pas votre compétence qui manque — c’est le bon système derrière vous.</p>
          <div class="mt-8">
            <NuxtLink
              to="/rendez-vous"
              class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-transform duration-200 hover:scale-[1.03]"
            >
              💡 Découvrir la solution
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
