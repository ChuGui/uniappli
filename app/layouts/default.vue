<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Contenu principal -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
// Les composants Navbar et Footer seront automatiquement importés
// grâce à l'auto-import de Nuxt
</script>
