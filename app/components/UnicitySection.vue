<template>
  <section class="relative py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-4xl">
        <h2 class="text-3xl sm:text-4xl font-bold">
          <span class="align-middle mr-2">💎</span>
          <span class="text-primary-gradient">Rien que pour vous</span>
        </h2>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded"></div>
        <p class="mt-6 text-lg text-muted max-w-2xl">
          Un accompagnement personnalisé et une stack pensée sur‑mesure pour refléter vos valeurs et vos ambitions.
        </p>
      </div>

      <!-- Unique value points -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <h3 class="text-lg font-semibold text-default">Un système aligné avec vos valeurs</h3>
          <p class="mt-2 text-muted">Une expérience qui vous ressemble, sans artifices, fidèle à votre identité et à la relation que vous souhaitez créer.</p>
        </div>
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <h3 class="text-lg font-semibold text-default">Une écoute réelle de vos besoins</h3>
          <p class="mt-2 text-muted">Une personne dédiée qui comprend votre contexte et ajuste les priorités avec vous, pas une solution générique.</p>
        </div>
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <h3 class="text-lg font-semibold text-default">CRM & automatisations sur‑mesure</h3>
          <p class="mt-2 text-muted">Des workflows conçus autour de votre façon de travailler, pour gagner du temps sans perdre en qualité.</p>
        </div>
        <div class="p-6 rounded-2xl border border-default bg-white shadow-sm">
          <h3 class="text-lg font-semibold text-default">Veille technologique continue</h3>
          <p class="mt-2 text-muted">Un expert à vos côtés pour rester à la pointe des nouveautés et garder une longueur d’avance sur votre marché.</p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg border border-default px-6 py-3 font-medium text-default hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition"
        >
          Construire mon système sur‑mesure
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
