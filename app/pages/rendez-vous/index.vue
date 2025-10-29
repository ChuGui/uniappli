<template>
  <div class="px-4 sm:px-6 lg:px-8 py-6">
    <h1 class="text-2xl font-semibold text-gray-900 text-center">Prenez rendez-vous</h1>
    <p class="mt-2 text-gray-600 text-center">
      pour découvrir <span class="font-bold text-primary-gradient drop-shadow-md text-4xl font-lobster">UniAppli</span>, la solution clé en main !
    </p>
    <ClientOnly>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/N1tEhmxizgpmRrGOFxFN"
        style="width: 100%; height: 100vh; border: none; overflow: auto; border-radius: 6px;"
        scrolling="yes"
        id="N1tEhmxizgpmRrGOFxFN_1761752772507"
        title="Prise de rendez-vous"
      ></iframe>
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  script: [
    { src: 'https://link.msgsndr.com/js/form_embed.js', defer: true, body: true }
  ]
})
</script>