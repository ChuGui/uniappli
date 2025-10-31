<template>
  <section class="relative py-16 md:py-8 bg-gray-50/60 overflow-hidden">
    <!-- Decorative diffuse blobs (background) -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0">
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[36rem] h-[36rem] rounded-full absolute -left-32"></div>
      <div class="bg-primary-gradient opacity-20 blur-3xl w-[28rem] h-[28rem] rounded-full absolute -bottom-44 -right-20"></div>
      <div class="bg-secondary/30 blur-3xl w-[18rem] h-[18rem] rounded-full absolute top-1/3 -right-16"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text column -->
        <div class="order-1 md:order-1 max-w-3xl">
          <h2 class="text-3xl sm:text-4xl font-bold">
            <lottie-player
              src="/lotties/rocket-solo.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              class="inline-block align-middle mr-2 w-10 h-10"
              aria-label="Animation fusée solo"
            ></lottie-player>
            <span class="text-primary-gradient">Passez à l’action dès aujourd’hui</span>
          </h2>
          <div class="mt-3 h-1 w-28 bg-primary-gradient rounded"></div>
          <p class="mt-6 text-lg text-default subtitle">
            Ne laissez plus vos prospects filer. Offrez-vous un système qui travaille pour vous 24h/24 – 7j/7.
          </p>
          <!-- Mobile-only rocket between text and CTA -->
          <div class="mt-6 flex justify-center md:hidden">
            <lottie-player
              src="/lotties/rocket.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              class="w-56 h-56 sm:w-64 sm:h-64"
              aria-label="Animation fusée"
            ></lottie-player>
          </div>

          <div class="mt-8">
            <NuxtLink
              to="/contact"
              class="inline-flex text-center items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
              >
              <span>👉 Prenez votre appel stratégique gratuit dès maintenant</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Lottie column: below on mobile, right on desktop -->
        <div class="order-2 md:order-2 hidden md:flex justify-end">
          <lottie-player
            src="/lotties/rocket.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72"
            aria-label="Animation fusée"
          ></lottie-player>
        </div>
      </div>
    </div>
  </section>
</template>
