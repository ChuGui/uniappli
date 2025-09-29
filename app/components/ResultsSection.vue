<template>
  <section class="relative py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-4xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <lottie-player
            src="/lotties/Star.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="inline-block align-middle w-16 h-16"
            aria-label="Animation star"
          ></lottie-player>
          <span class="text-primary-gradient">Résultats garantis</span>
        </h2>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded"></div>
        <p class="mt-6 text-lg text-muted max-w-2xl">
          Dès la mise en place de votre système, vous constatez des résultats concrets et mesurables.
        </p>
      </div>

      <!-- Results grid -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Result 1 -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <div class="text-4xl font-bold text-default">
            <span class="text-primary-gradient">10+</span>
          </div>
          <p class="mt-2 text-default font-semibold">contacts/mois (garantis*)</p>
          <p class="text-muted">dès le 1er mois, une fois le système en place.</p>
        </div>
        <!-- Result 2 -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <div class="text-4xl font-bold text-default">
            <span class="text-primary-gradient">20h+</span>
          </div>
          <p class="mt-2 text-default font-semibold">libérées/mois</p>
          <p class="text-muted">pour vous concentrer sur votre cœur de métier.</p>
        </div>
        <!-- Result 3 -->
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <div class="text-4xl font-bold text-default">
            <span class="text-primary-gradient">+ sérénité</span>
          </div>
          <p class="mt-2 text-default font-semibold">zéro tâches répétitives</p>
          <p class="text-muted">vous reprenez la main sur votre temps et vos priorités.</p>
        </div>
      </div>

      <!-- Footnote -->
      <p class="mt-6 text-sm text-muted">*Sous réserve de participation active et d'un minimum d'efforts de distribution. Détails fournis dans nos conditions.</p>

      <!-- CTA -->
      <div class="mt-10 flex justify-center md:justify-start">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
          >
          Obtenir mes résultats
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
