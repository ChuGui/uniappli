<template>
  
        <h1 class="text-2xl font-semibold text-gray-900 text-center">Prenez contact avec nous</h1>
        <p class="mt-2 text-gray-600 text-center"><span class="font-bold text-primary-gradient drop-shadow-md text-4xl font-lobster">UniAppli</span>.</p>
  <ClientOnly>
    <iframe
    src="https://api.leadconnectorhq.com/widget/form/eYrblxPKRutIsvTlJjzu"
    style="width:100%;height:100%;border:none;border-radius:5px"
    id="inline-eYrblxPKRutIsvTlJjzu" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Formulaire - Contact"
    data-height="584"
    data-layout-iframe-id="inline-eYrblxPKRutIsvTlJjzu"
    data-form-id="eYrblxPKRutIsvTlJjzu"
    title="Formulaire - Contact"
        >
</iframe>
  </ClientOnly>
</template>
<script setup lang="ts">
import { useHead, useRequestURL } from '#imports'

const url = useRequestURL()
useHead({
  title: 'Contact · UniAppli',
  meta: [
    { name: 'description', content: 'Contactez UniAppli pour vos projets de système d’acquisition automatique et prenez rendez-vous avec notre équipe.' }
  ],
  link: [ { rel: 'canonical', href: url.href } ],
  script: [
    { src: 'https://link.msgsndr.com/js/form_embed.js', defer: true, body: true }
  ]
})
</script>