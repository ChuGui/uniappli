<template>
  <div class="min-h-screen bg-gray-50 px-4 py-12">
    <div class="mx-auto w-full max-w-2xl">
      <div v-if="submitted" class="relative overflow-hidden rounded-2xl bg-white p-8 shadow">
        <h1 class="text-2xl font-semibold text-gray-900">Merci !</h1>
        <p class="mt-2 text-gray-600">
          Nous nous mettons au travail pour vous fournir votre compte UniAppli le plus rapidement possible.
        </p>
        <div ref="confettiHost" class="pointer-events-none absolute inset-0"></div>
        <button class="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black/90" @click="reset">
          Envoyer un autre formulaire
        </button>
      </div>

      <div v-else class="rounded-2xl bg-white p-8 shadow">
        <h1 class="text-2xl font-semibold text-gray-900">Informations du compte</h1>
        <p class="mt-2 text-gray-600">Merci de renseigner les informations pour la création de votre compte <span class="font-bold text-primary-gradient drop-shadow-md text-4xl font-lobster">UniAppli</span>.</p>

        <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
          <div class="space-y-1">
            <label for="companyName" class="block text-sm font-medium text-gray-800">Nom de l’entreprise <span class="text-red-600">*</span></label>
            <input id="companyName" v-model.trim="form.companyName" type="text" required class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Ex: UniAppli SAS" />
          </div>

          <div class="space-y-1">
            <label for="activityDescription" class="block text-sm font-medium text-gray-800">Description de l’activité de l’entreprise <span class="text-gray-500 text-xs">(optionnel)</span></label>
            <textarea id="activityDescription" v-model.trim="form.activityDescription" rows="3" class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Décrivez brièvement votre activité"></textarea>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="space-y-1">
              <label for="firstName" class="block text-sm font-medium text-gray-800">Prénom <span class="text-red-600">*</span></label>
              <input id="firstName" v-model.trim="form.firstName" type="text" required class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Ex: Jean" />
            </div>
            <div class="space-y-1">
              <label for="lastName" class="block text-sm font-medium text-gray-800">Nom <span class="text-red-600">*</span></label>
              <input id="lastName" v-model.trim="form.lastName" type="text" required class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Ex: Dupont" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="email" class="block text-sm font-medium text-gray-800">Email <span class="text-red-600">*</span></label>
            <input id="email" v-model.trim="form.email" type="email" required class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="jean.dupont@exemple.com" />
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="space-y-1">
              <label for="businessPhone" class="block text-sm font-medium text-gray-800">Téléphone professionnel <span class="text-red-600">*</span></label>
              <input id="businessPhone" v-model.trim="form.businessPhone" type="tel" required class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Ex: +33 6 12 34 56 78" />
            </div>
            <div class="space-y-1">
              <label for="international" class="block text-sm font-medium text-gray-800">Activité internationale</label>
              <div class="mt-2 flex items-center gap-2">
                <input id="international" v-model="form.international" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900/30" />
                <span class="text-sm text-gray-700">Cochez si vous avez des activités à l’international</span>
              </div>
            </div>
          </div>

          <div class="space-y-1" v-if="form.international">
            <label for="language" class="block text-sm font-medium text-gray-800">Langue</label>
            <select id="language" v-model="form.language" class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10">
              <option disabled value="">Choisir…</option>
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          <div class="space-y-1" v-if="form.international">
            <label for="timezone" class="block text-sm font-medium text-gray-800">Fuseau horaire</label>
            <select id="timezone" v-model="form.timezone" class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10">
              <option disabled value="">Choisir…</option>
              <option v-for="tz in timezones" :key="tz.value" :value="tz.value">{{ tz.label }}</option>
            </select>
          </div>

          <div class="space-y-1" v-if="form.international">
            <label for="ein" class="block text-sm font-medium text-gray-800">Numéro d’identification (EIN) – optionnel (si envoi de SMS vers les États‑Unis)</label>
            <input id="ein" v-model.trim="form.ein" type="text" class="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Ex: 12-3456789" />
          </div>

          <div class="pt-2">
            <button type="submit" :disabled="submitting" class="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-60">
              <span v-if="!submitting">Envoyer</span>
              <span v-else>Envoi…</span>
            </button>
            <p v-if="error" class="mt-3 text-sm text-red-600">{{ error }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, nextTick, onMounted } from 'vue'
import { useHead } from '#imports'

useHead({ title: 'Informations compte · UniAppli' })

const WEBHOOK_URL = 'https://n8n.srv1066181.hstgr.cloud/webhook/c082177d-9a23-4511-967e-b080bf97133a'

const submitted = ref(false)
const submitting = ref(false)
const error = ref('')
const confettiHost = ref<HTMLElement | null>(null)

const form = reactive({
  companyName: '',
  firstName: '',
  lastName: '',
  email: '',
  businessPhone: '',
  activityDescription: '',
  international: false,
  language: '',
  timezone: '',
  ein: ''
})

// A shortlist of common timezones. Can be extended easily.
const timezones = [
  { label: 'Europe/Paris (UTC+1/+2)', value: 'Europe/Paris' },
  { label: 'UTC', value: 'UTC' },
  { label: 'Europe/London (UTC+0/+1)', value: 'Europe/London' },
  { label: 'America/New_York (UTC-5/-4)', value: 'America/New_York' },
  { label: 'America/Los_Angeles (UTC-8/-7)', value: 'America/Los_Angeles' }
]

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function onSubmit() {
  error.value = ''
  if (!form.companyName || !form.firstName || !form.lastName || !form.email || !form.businessPhone) {
    error.value = 'Merci de remplir tous les champs obligatoires.'
    return
  }
  if (!validateEmail(form.email)) {
    error.value = "L'email n'est pas valide."
    return
  }

  submitting.value = true
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        companyName: form.companyName,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        businessPhone: form.businessPhone,
        activityDescription: form.activityDescription || null,
        international: !!form.international,
        language: form.international ? (form.language || null) : null,
        timezone: form.international ? (form.timezone || null) : null,
        ein: form.international ? (form.ein || null) : null,
        source: 'uniappli-site'
      })
    })

    if (!res.ok) throw new Error('Échec de l’envoi. Merci de réessayer dans un instant.')

    submitted.value = true
    await nextTick()
    burstConfetti()
  } catch (e: any) {
    error.value = e?.message || 'Une erreur est survenue.'
  } finally {
    submitting.value = false
  }
}

function reset() {
  submitted.value = false
  error.value = ''
  Object.assign(form, { companyName: '', firstName: '', lastName: '', email: '', businessPhone: '', activityDescription: '', international: false, language: '', timezone: '', ein: '' })
}

// Lightweight confetti without extra deps
function burstConfetti() {
  const host = confettiHost.value
  if (!host) return
  const count = 120
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span')
    piece.className = 'confetti-piece'
    const hue = Math.floor(Math.random() * 360)
    const size = 6 + Math.random() * 6
    const dx = (Math.random() - 0.5) * 300 // horizontal spread
    const dy = (Math.random() - 0.5) * 220 // vertical spread
    const rot = Math.random() * 720
    piece.style.setProperty('--h', String(hue))
    piece.style.width = `${size}px`
    piece.style.height = `${size * 0.4}px`
    piece.style.setProperty('--dx', `${dx}px`)
    piece.style.setProperty('--dy', `${dy}px`)
    piece.style.setProperty('--rot', `${rot}deg`)
    piece.style.left = '50%'
    piece.style.top = '50%'
    host.appendChild(piece)

    // cleanup after animation
    piece.addEventListener('animationend', () => piece.remove())
  }
}

onMounted(() => {
  // no-op; reserved for future improvements
})
</script>

<style scoped>
.confetti-piece {
  position: absolute;
  transform: translate(-50%, -50%);
  background: hsl(var(--h) 90% 60%);
  border-radius: 1px;
  opacity: 0;
  animation: confetti 900ms ease-out forwards;
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
