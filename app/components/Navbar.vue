<template>
  <nav :class="navClasses">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <img src="/UniAppli.png" alt="UniAppli" class="h-8 w-auto" />
          </NuxtLink>
        </div>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <NuxtLink 
              to="/" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-600 bg-blue-50"
            >
              Accueil
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              active-class="text-blue-600 bg-blue-50"
            >
              Contact
            </NuxtLink>
            <NuxtLink
              to="/rendez-vous"
              class="inline-flex items-center justify-center rounded-full bg-primary-gradient text-white px-4 py-2 text-sm font-semibold shadow-lg hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-start)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Prendre un rendez-vous
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span class="sr-only">Ouvrir le menu principal</span>
            <!-- Hamburger icon -->
            <svg 
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close icon -->
            <svg 
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
        <NuxtLink 
          to="/" 
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          active-class="text-blue-600 bg-blue-50"
        >
          Accueil
        </NuxtLink>
        <NuxtLink 
          to="/about" 
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          active-class="text-blue-600 bg-blue-50"
        >
          À propos
        </NuxtLink>
        <NuxtLink 
          to="/services" 
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          active-class="text-blue-600 bg-blue-50"
        >
          Services
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          active-class="text-blue-600 bg-blue-50"
        >
          Contact
        </NuxtLink>
        <NuxtLink 
          to="/rendez-vous" 
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          active-class="text-blue-600 bg-blue-50"
        >
          Prendre un rendez-vous
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 0
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navClasses = computed(() => {
  const base = 'sticky top-0 z-50 transition-all duration-300'
  return isScrolled.value
    ? `${base} bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm`
    : `${base} bg-transparent`
})
</script>
