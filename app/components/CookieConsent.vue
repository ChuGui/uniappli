<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-x-0 bottom-0 z-50 bg-gray-900 text-white shadow-lg"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="text-sm md:text-base">
          <h2 id="cookie-consent-title" class="font-semibold">Cookies</h2>
          <p id="cookie-consent-desc" class="text-gray-300 mt-1">
            Nous utilisons des cookies pour mesurer l'audience (Google Analytics) après votre consentement. Vous pouvez accepter ou refuser.
          </p>
        </div>
        <div class="flex gap-2">
          <button
            @click="deny"
            class="px-4 py-2 rounded border border-gray-500 text-gray-200 hover:bg-gray-800"
          >
            Refuser
          </button>
          <button
            @click="accept"
            class="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white"
          >
            Accepter Analytics
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const CONSENT_KEY = 'cookie:analytics-consent'
const show = ref(false)

function handleOpen() {
  show.value = true
}

onMounted(() => {
  const existing = localStorage.getItem(CONSENT_KEY)
  show.value = !existing // show only if no choice yet
  window.addEventListener('open-cookie-consent', handleOpen)
})

onBeforeUnmount(() => {
  window.removeEventListener('open-cookie-consent', handleOpen)
})

function broadcast(value: 'granted' | 'denied') {
  const evt = new CustomEvent('analytics-consent', { detail: value })
  window.dispatchEvent(evt)
}

function accept() {
  localStorage.setItem(CONSENT_KEY, 'granted')
  broadcast('granted')
  show.value = false
}

function deny() {
  localStorage.setItem(CONSENT_KEY, 'denied')
  broadcast('denied')
  show.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
