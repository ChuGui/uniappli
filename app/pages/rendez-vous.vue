<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <!-- Background blobs -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0">
      <div class="bg-primary-gradient opacity-25 blur-3xl w-[40rem] h-[40rem] rounded-full absolute -top-40 -left-32"></div>
      <div class="bg-primary-gradient opacity-15 blur-3xl w-[32rem] h-[32rem] rounded-full absolute -bottom-40 -right-24"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
          <span class="text-primary-gradient font-lobster drop-shadow-md">Prenez votre rendez-vous découverte</span>
        </h1>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded mx-auto"></div>
        <p class="mt-6 text-lg text-muted">Choisissez un créneau qui vous convient et réservez en quelques secondes.</p>
      </div>

      <!-- Booking widget -->
      <div class="mt-10 p-6 sm:p-8 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
        <h2 class="text-2xl font-bold">Prendre rendez-vous</h2>
        <p class="text-muted mt-2 text-sm">Réservez un créneau directement dans notre agenda.</p>
        <div class="mt-4">
          <ClientOnly>
            <div class="w-full" id="booking-widget">
              <iframe src="https://api.leadconnectorhq.com/widget/booking/N1tEhmxizgpmRrGOFxFN" style="width: 100%; border:none; overflow: hidden;" scrolling="no" id="N1tEhmxizgpmRrGOFxFN_1759650607201"></iframe>
              <br />
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

// --- Programmatic load of the provider script ---
function loadBookingScript() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  const existing = document.querySelector('script[src^="https://link.msgsndr.com/js/form_embed.js"]') as HTMLScriptElement | null
  if (!existing) {
    const s = document.createElement('script')
    s.src = 'https://link.msgsndr.com/js/form_embed.js'
    s.type = 'text/javascript'
    s.async = true
    document.body.appendChild(s)
  }
}

// --- GA events ---
function gaTrack(event: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, params)
  } else if (typeof window !== 'undefined' && (window as any).dataLayer) {
    ;(window as any).dataLayer.push({ event, ...params })
  }
}

let widgetViewed = false
let io: IntersectionObserver | null = null
function setupBookingWidgetTracking() {
  if (typeof window === 'undefined') return
  const el = document.getElementById('booking-widget')
  if (!el || 'IntersectionObserver' in window === false) return

  io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!widgetViewed && entry.isIntersecting) {
        widgetViewed = true
        gaTrack('view_booking_widget', { page: 'rendez-vous' })
        if (io) io.disconnect()
      }
    })
  }, { threshold: 0.3 })
  io.observe(el)

  el.addEventListener('click', () => gaTrack('click_booking_widget', { page: 'rendez-vous' }), { once: true })

  const handler = (evt: MessageEvent) => {
    try {
      const origin = String(evt.origin || '')
      if (!origin.includes('leadconnectorhq.com') && !origin.includes('msgsndr.com')) return
      const data = evt.data
      if (typeof data === 'object' && data) {
        const type = (data.type || data.event || '') as string
        if (type && /booking|appointment/i.test(type)) {
          gaTrack('booking_submitted', { page: 'rendez-vous', source: 'leadconnector' })
        }
      }
    } catch (_) { /* ignore */ }
  }
  window.addEventListener('message', handler)

  onBeforeUnmount(() => {
    if (io) io.disconnect()
    window.removeEventListener('message', handler)
  })
}

onMounted(() => {
  loadBookingScript()
  setupBookingWidgetTracking()
})
</script>
