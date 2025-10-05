<template>
  <section class="relative overflow-hidden">
    <!-- Decorative gradient background blob -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none">
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[60rem] h-[60rem] rounded-full absolute -top-40 -left-40"></div>
      <div class="bg-primary-gradient opacity-10 blur-3xl w-[50rem] h-[50rem] rounded-full absolute -bottom-40 -right-40"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Left: Animation -->
        <div class="order-2 md:order-1 flex justify-center md:justify-start">
          <!-- Lottie animation from public/lotties/hero-animation.json -->
          <lottie-player
            src="/lotties/business-team.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="w-full max-w-md md:max-w-lg h-auto"
            aria-label="Animation illustrant la liberté vis-à-vis de la prospection"
          ></lottie-player>
        </div>

        <!-- Right: Text content -->
        <div class="order-1 md:order-2 mx-auto md:mx-0 max-w-2xl text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span class="text-primary-gradient font-lobster drop-shadow-md">
              Libérez-vous des contraintes de la prospection pour vous consacrer sur le cœur de votre métier
            </span>
          </h1>
          <p class="mt-6 text-lg text-muted">
            Gagnez du temps, développez votre activité, et concentrez-vous sur l'essentiel.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full bg-primary-gradient text-white px-6 py-3 font-bold shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition transition-transform duration-200 hover:scale-[1.03]"
            >
              Nous contacter
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="inline-flex items-center justify-center rounded-full  px-6 py-3 font-medium text-default hover:bg-gray-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition transition-transform duration-200 hover:scale-[1.03]"
            >
              En savoir plus
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
