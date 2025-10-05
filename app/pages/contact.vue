<template>
  <section class="relative py-16 md:py-24 overflow-hidden">
    <!-- Decorative gradient blobs -->
    <div aria-hidden="true" class="absolute inset-0 pointer-events-none z-0">
      <div class="bg-primary-gradient opacity-25 blur-3xl w-[40rem] h-[40rem] rounded-full absolute -top-40 -left-32"></div>
      <div class="bg-primary-gradient opacity-15 blur-3xl w-[32rem] h-[32rem] rounded-full absolute -bottom-40 -right-24"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Heading -->
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
          <span class="text-primary-gradient font-lobster drop-shadow-md">Contactez‑nous ou prenez directement votre rendez-vous découverte</span>
        </h1>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded mx-auto"></div>
        <p class="mt-6 text-lg text-muted">Dites‑nous en plus sur votre besoin. Nous revenons vers vous rapidement.</p>
        <div class="mt-6">
          <a href="#booking-widget" @click.prevent="scrollToBooking"
             class="inline-flex items-center justify-center rounded-full bg-primary-gradient text-white px-6 py-3 font-bold shadow-xl hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition transition-transform duration-200 hover:scale-[1.03]">
            Prendre rendez-vous
          </a>
        </div>
      </div>

      <!-- Form + Booking stacked -->
      <div class="mt-10 grid grid-cols-1 gap-8 items-start">
        <!-- Form card -->
        <div class="p-6 sm:p-8 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h2 class="text-2xl font-bold">Contactez-nous</h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-default">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="Ex. marie.dupont@email.com"
              class="mt-2 w-full rounded-xl border border-default bg-white/70 focus:bg-white px-4 py-3 text-default placeholder:text-muted outline-none focus:ring-2 focus:ring-[var(--color-primary-start)] transition-all"
            />
          </div>

          <!-- Full name -->
          <div>
            <label for="fullName" class="block text-sm font-medium text-default">Nom & prénom</label>
            <input
              id="fullName"
              v-model="form.fullName"
              type="text"
              required
              placeholder="Ex. Marie Dupont"
              class="mt-2 w-full rounded-xl border border-default bg-white/70 focus:bg-white px-4 py-3 text-default placeholder:text-muted outline-none focus:ring-2 focus:ring-[var(--color-primary-start)] transition-all"
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-sm font-medium text-default">Numéro de téléphone</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              inputmode="tel"
              required
              placeholder="Ex. 06 12 34 56 78"
              class="mt-2 w-full rounded-xl border border-default bg-white/70 focus:bg-white px-4 py-3 text-default placeholder:text-muted outline-none focus:ring-2 focus:ring-[var(--color-primary-start)] transition-all"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-default">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              placeholder="Décrivez votre besoin..."
              class="mt-2 w-full rounded-xl border border-default bg-white/70 focus:bg-white px-4 py-3 text-default placeholder:text-muted outline-none focus:ring-2 focus:ring-[var(--color-primary-start)] transition-all"
            />
          </div>

          <!-- Submit -->
          <div class="pt-2 flex justify-center sm:justify-end">
            <button
              type="submit"
              :disabled="status === 'sending'"
              class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.03]"
            >
              <span v-if="status !== 'sending'">Envoyer le message</span>
              <span v-else>Envoi…</span>
            </button>
          </div>
          <p v-if="feedback" class="text-sm mt-2" :class="feedbackType === 'error' ? 'text-red-600' : 'text-green-600'">{{ feedback }}</p>
          </form>
        </div>

        <!-- Booking calendar card -->
        <div class="p-6 sm:p-8 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
          <h2 class="text-2xl font-bold">Prendre rendez-vous</h2>
          <p class="text-muted mt-2 text-sm">Réservez un créneau directement dans notre agenda.</p>
          <div class="mt-4">
            <ClientOnly>
              <div class="w-full scroll-mt-28" id="booking-widget">
                <iframe src="https://api.leadconnectorhq.com/widget/booking/N1tEhmxizgpmRrGOFxFN" style="width: 100%; border:none; overflow: hidden;" scrolling="no" id="N1tEhmxizgpmRrGOFxFN_1759650607201"></iframe>
                <br />
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'

// --- EmailJS config ---
const EMAILJS_SERVICE_ID = 'service_7bylv9a'
const EMAILJS_TEMPLATE_ID = 'template_bai8vta'
const EMAILJS_PUBLIC_KEY = '43wcNvyQqbT-Q_-ji'

// --- Form state ---
const form = reactive({
  email: '',
  fullName: '',
  phone: '',
  message: ''
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const feedback = ref('')
const feedbackType = ref<'success' | 'error' | ''>('')

// --- EmailJS loader (CDN) ---
let emailjsLib: any = null
function loadEmailJs(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('SSR'))
    if ((window as any).emailjs) return resolve((window as any).emailjs)
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.async = true
    script.onload = () => resolve((window as any).emailjs)
    script.onerror = () => reject(new Error('Failed to load EmailJS'))
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  try {
    emailjsLib = await loadEmailJs()
    if (EMAILJS_PUBLIC_KEY && !EMAILJS_PUBLIC_KEY.includes('YOUR_PUBLIC_KEY')) {
      emailjsLib.init({ publicKey: EMAILJS_PUBLIC_KEY })
    }
  } catch (e) {
    // ignore, handled on submit
  }
})

// --- Confetti loader (CDN) ---
let confettiLib: any = null
function loadConfetti(): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('SSR'))
    if ((window as any).confetti) return resolve((window as any).confetti)
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js'
    script.async = true
    script.onload = () => resolve((window as any).confetti)
    script.onerror = () => reject(new Error('Failed to load confetti'))
    document.head.appendChild(script)
  })
}

async function fireConfetti() {
  try {
    confettiLib = confettiLib || (await loadConfetti())
    // Two quick bursts
    confettiLib({ particleCount: 80, spread: 70, origin: { y: 0.6 } })
    setTimeout(() => confettiLib({ particleCount: 60, spread: 90, origin: { y: 0.6 } }), 200)
  } catch (_) {
    // no-op if confetti fails to load
  }
}

async function handleSubmit() {
  feedback.value = ''
  feedbackType.value = ''

  if (
    !EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID.includes('YOUR_TEMPLATE_ID') ||
    !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.includes('YOUR_PUBLIC_KEY')
  ) {
    feedback.value = "Configuration EmailJS manquante: merci de me donner le Template ID et la Public Key."
    feedbackType.value = 'error'
    return
  }

  status.value = 'sending'
  try {
    if (!emailjsLib) emailjsLib = await loadEmailJs()
    emailjsLib.init({ publicKey: EMAILJS_PUBLIC_KEY })
    await emailjsLib.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      email: form.email,
      fullName: form.fullName,
      phone: form.phone,
      message: form.message,
    })
    status.value = 'success'
    feedback.value = 'Merci ! Votre message a été envoyé. Nous vous recontactons rapidement.'
    feedbackType.value = 'success'
    fireConfetti()
    form.email = ''
    form.fullName = ''
    form.phone = ''
    form.message = ''
  } catch (err) {
    status.value = 'error'
    feedback.value = "Une erreur est survenue lors de l'envoi. Réessayez plus tard."
    feedbackType.value = 'error'
    console.error('EmailJS error', err)
  }
}

// --- Google Analytics tracking for booking widget ---
function gaTrack(event: string, params: Record<string, any> = {}) {
  // Fire only if gtag is available (i.e., user consented and GA loaded)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, params)
  } else if (typeof window !== 'undefined' && (window as any).dataLayer) {
    // Fallback to dataLayer push
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
        gaTrack('view_booking_widget', { page: 'contact' })
        if (io) io.disconnect()
      }
    })
  }, { threshold: 0.3 })
  io.observe(el)

  // Click/interaction tracking as a best-effort signal
  el.addEventListener('click', () => gaTrack('click_booking_widget', { page: 'contact' }), { once: true })

  // Listen for potential postMessage from the widget (best-effort; schema may vary by provider)
  const handler = (evt: MessageEvent) => {
    try {
      const origin = String(evt.origin || '')
      if (!origin.includes('leadconnectorhq.com') && !origin.includes('msgsndr.com')) return
      const data = evt.data
      if (typeof data === 'object' && data) {
        const type = (data.type || data.event || '') as string
        if (type && /booking|appointment/i.test(type)) {
          gaTrack('booking_submitted', { page: 'contact', source: 'leadconnector' })
        }
      }
    } catch (_) { /* ignore */ }
  }
  window.addEventListener('message', handler)

  // Cleanup
  onBeforeUnmount(() => {
    if (io) io.disconnect()
    window.removeEventListener('message', handler)
  })
}

onMounted(() => {
  setupBookingWidgetTracking()
  // Load LeadConnector embed script programmatically to avoid side-effect tag in template
  try {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const existing = document.querySelector('script[src^="https://link.msgsndr.com/js/form_embed.js"]') as HTMLScriptElement | null
      if (!existing) {
        const s = document.createElement('script')
        s.src = 'https://link.msgsndr.com/js/form_embed.js'
        s.type = 'text/javascript'
        s.async = true
        document.body.appendChild(s)
      }
    }
  } catch (_) { /* no-op */ }
})

function scrollToBooking() {
  if (typeof window === 'undefined') return
  const el = document.getElementById('booking-widget')
  if (!el) return
  const offset = 112 // ~28px * 4, adjust if header height changes
  const y = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: y, behavior: 'smooth' })
}
</script>

<style>
</style>