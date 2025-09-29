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
          <span class="text-primary-gradient font-lobster">Contactez‑nous</span>
        </h1>
        <div class="mt-3 h-1 w-28 bg-primary-gradient rounded mx-auto"></div>
        <p class="mt-6 text-lg text-muted">Dites‑nous en plus sur votre besoin. Nous revenons vers vous rapidement.</p>
      </div>

      <!-- Form card -->
      <div class="mt-10 p-6 sm:p-8 rounded-2xl border border-default bg-white/30 backdrop-blur-md shadow-sm">
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
              class="inline-flex items-center justify-center rounded-full bg-secondary text-white px-6 py-3 font-medium shadow-xl hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-all duration-200 hover:scale-[1.03]"
            >
              <span v-if="status !== 'sending'">Envoyer le message</span>
              <span v-else>Envoi…</span>
            </button>
          </div>
          <p v-if="feedback" class="text-sm mt-2" :class="feedbackType === 'error' ? 'text-red-600' : 'text-green-600'">{{ feedback }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'

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
</script>

<style>
</style>