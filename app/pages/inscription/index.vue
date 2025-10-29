<template>
  
        <h1 class="text-2xl font-semibold text-gray-900 text-center">Renseignez les informations de votre activité</h1>
        <p class="mt-2 text-gray-600 text-center">
           et recevez votre système <span class="font-bold text-primary-gradient drop-shadow-md text-4xl font-lobster">UniAppli</span> clé en main !</p>
  <ClientOnly>
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/RzE7Q7PcyFsdIaa6CvhN"
      style="width:100%;height:1118px;border:none;border-radius:3px"
      id="inline-RzE7Q7PcyFsdIaa6CvhN"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Information nouveau compte"
      data-height="1118"
      data-layout-iframe-id="inline-RzE7Q7PcyFsdIaa6CvhN"
      data-form-id="RzE7Q7PcyFsdIaa6CvhN"
      title="Information nouveau compte"
    ></iframe>
  </ClientOnly>
</template>
<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  script: [
    { src: 'https://link.msgsndr.com/js/form_embed.js', defer: true, body: true }
  ]
})
</script>