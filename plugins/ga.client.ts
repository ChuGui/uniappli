import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'

// use of onMounted is not needed inside a client plugin if we guard DOM usage with window check

// Key used to store the analytics consent choice
const CONSENT_KEY = 'cookie:analytics-consent'

type ConsentValue = 'granted' | 'denied'

function loadGAScript(gaId: string) {
  // Avoid double injection
  if (document.getElementById('ga-gtag-script')) return

  const script = document.createElement('script')
  script.id = 'ga-gtag-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
  document.head.appendChild(script)

  const inline = document.createElement('script')
  inline.id = 'ga-gtag-inline'
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `
  document.head.appendChild(inline)
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const gaId = (config.public as any).gaId as string | undefined

  if (!gaId) return

  if (typeof window === 'undefined' || typeof document === 'undefined') return

  // Load immediately if consent was already granted previously
  const stored = (localStorage.getItem(CONSENT_KEY) as ConsentValue | null)
  if (stored === 'granted') {
    loadGAScript(gaId)
  }

  // Listen for consent events from the CookieConsent component
  window.addEventListener('analytics-consent', (e: Event) => {
    const detail = (e as CustomEvent<ConsentValue>).detail
    if (detail === 'granted') {
      loadGAScript(gaId)
    }
  })
})
