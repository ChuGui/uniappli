<template>
  <section class="relative py-16 md:py-8 bg-gray-50/60 overflow-hidden">
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
            src="/lotties/solution.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="inline-block align-middle mr-2 w-16 h-16"
            aria-label="Animation solution"
          ></lottie-player>
          <span class="text-primary-gradient">La solution : un système d’acquisition qui travaille pour vous</span>
        </h2>
      </div>
      <!-- Content: text left, image right -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Left: concise copy + bullets + CTA -->
        <div class="order-2 md:order-1 max-w-xl">
          <div class="space-y-5">
            <h3 class="text-2xl sm:text-3xl font-semibold text-default">Ce que vous obtenez</h3>
            <ul class="text-default space-y-4 leading-relaxed md:leading-loose">
              <li>🔁 CRM et automatisations intelligentes.</li>
              <li>🌐 Site et tunnel de vente optimisés.</li>
              <li>📱 Suivi simple depuis l'application web et mobile <span class="text-primary-gradient font-lobster drop-shadow-md text-4xl">UniAppli</span></li>
            </ul>
            <p class="text-muted leading-relaxed">
              On met en place une infrastructure simple et automatisée qui attire vos prospects, les convertit en clients et vous fait gagner du temps.
              Vous restez concentré sur votre métier — <span class="font-bold">le système s’occupe du reste.</span>
            </p>
            <div class="pt-2">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-transform duration-200 hover:scale-[1.03]"
              >
                🚀 Démarrer mon système
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right: illustration -->
        <div class="order-1 md:order-2">
          <div class="relative">
            <div aria-hidden="true" class="absolute -inset-6 bg-primary-gradient opacity-20 blur-3xl rounded-[2rem]"></div>
            <div class="relative overflow-hidden bg-transparent group">
              <div class="relative aspect-[4/3] w-full [clip-path:inset(0_round_48px_120px_48px_120px)] [transition:clip-path_400ms_ease] group-hover:[clip-path:inset(0_round_64px_96px_64px_96px)]">
                <img
                  src="/images/concept-de-controle-qualite-standard-m.jpg"
                  alt="Illustration d’automatisation fluide"
                  loading="lazy"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 pointer-events-none bg-gradient-to-tl from-[var(--color-primary-start)]/15 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
