<template>
  <div>
    <h1 class="font-bold underline text-5xl text-shadow-amber-400">
    Hello world!
  </h1>
  <section class="min-h-[40vh] grid place-items-center bg-zinc-950 p-6">
  <div class="w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-lg overflow-hidden">
    <div class="h-2 bg-gradient-to-r from-[#B16CEA] via-[#FF5E69] to-[#FFA84B]"></div>

    <div class="p-6 space-y-4">
      <h1 class="text-2xl font-semibold text-zinc-50">Test Tailwind</h1>

      <p class="text-zinc-300">
        Si tu vois des <span class="text-white font-medium">couleurs</span>, des coins
        <span class="italic">arrondis</span> et une ombre, Tailwind fonctionne ✅
      </p>

      <div class="flex items-center gap-3">
        <span class="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-200 ring-1 ring-zinc-700">
          ● Badge
        </span>

        <button class="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 active:scale-[.98]">
          Bouton (hover moi)
        </button>
      </div>

      <div class="grid grid-cols-3 gap-2 pt-2">
        <div class="h-12 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500"></div>
        <div class="h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400"></div>
        <div class="h-12 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-300"></div>
      </div>

      <p class="text-xs text-zinc-500">
        <span class="hidden sm:inline">Breakpoint : visible en ≥ 640px</span>
        <span class="inline sm:hidden">Breakpoint : visible en &lt; 640px</span>
      </p>
    </div>
  </div>
</section>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>