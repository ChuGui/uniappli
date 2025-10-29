<template>
  <div class="relative min-h-[70vh] bg-gray-50 px-4 py-20">
    <div class="pointer-events-none absolute inset-0" ref="confettiHost"></div>

    <div class="mx-auto max-w-3xl text-center">
      <div class="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-emerald-700">
        <span class="inline-block h-2 w-2 rounded-full bg-emerald-600"></span>
        <span class="text-sm font-medium">✅ Rendez-vous confirmé !</span>
      </div>

      <h1 class="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Nous avons bien reçu votre rendez-vous !</h1>
      <!-- Lottie centered -->
        <div class="mx-auto flex justify-center">
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
      <p class="mt-4 text-lg text-gray-700">
        Nous vous remercions pour votre prise de rendez-vous et nous vous contactons dans les plus brefs délais.
      </p>
      <div class="mt-10">
        <NuxtLink to="/" class="btn btn-gradient">
          Retour à l'accueil
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const confettiHost = ref<HTMLElement | null>(null)

function burstConfetti() {
  const host = confettiHost.value
  if (!host) return
  const count = 160
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span')
    piece.className = 'confetti-piece'
    const hue = Math.floor(Math.random() * 360)
    const size = 6 + Math.random() * 7
    const dx = (Math.random() - 0.5) * 420
    const dy = (Math.random() - 0.5) * 300
    const rot = Math.random() * 960
    piece.style.setProperty('--h', String(hue))
    piece.style.width = `${size}px`
    piece.style.height = `${size * 0.45}px`
    piece.style.setProperty('--dx', `${dx}px`)
    piece.style.setProperty('--dy', `${dy}px`)
    piece.style.setProperty('--rot', `${rot}deg`)
    piece.style.left = '50%'
    piece.style.top = '20%'
    host.appendChild(piece)
    piece.addEventListener('animationend', () => piece.remove())
  }
}

onMounted(() => {
  burstConfetti()
})
</script>

<style scoped>
.confetti-piece {
  position: absolute;
  transform: translate(-50%, -50%);
  background: hsl(var(--h) 90% 60%);
  border-radius: 1px;
  opacity: 0;
  animation: confetti 1000ms ease-out forwards;
  box-shadow: 0 0 0.5px rgba(0,0,0,0.15);
}

@keyframes confetti {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(0deg) scale(0.9);
  }
  12% {
    opacity: 1;
  }
  100% {
    opacity: 0.95;
    transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) rotate(var(--rot)) scale(1);
  }
}
</style>
