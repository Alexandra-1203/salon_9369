<template>
  <section class="relative w-full flex items-center justify-start overflow-hidden min-h-[calc(100vh-100px)] py-12 lg:py-0">
    <div class="absolute inset-0 z-0">
      <img
        src="/images/women.png"
        alt="Салон красоты"
        class="w-full h-full object-contain object-right-bottom"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-green-800/50 via-green-300/30 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-4xl px-6 lg:px-12 self-start lg:self-center">
      <Reveal tag="h1" class="leading-tight flex flex-wrap items-center gap-2 lg:gap-4">
        <span class="text-5xl md:text-7xl lg:text-8xl">Красота</span>
        <span class="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-green-500">
          на Крыльях
        </span>
        <span class="text-5xl md:text-7xl lg:text-8xl ml-auto">9369</span>
      </Reveal>

      <Reveal tag="p" :delay="150" class="mt-6 text-base md:text-lg max-w-xl">
        Маникюр без пропилов и боли. Гарантия на покрытие 10 дней.
      </Reveal>

      <Reveal :delay="300" class="mt-8 flex flex-wrap gap-4">
        <UButton
          to="https://n1163753.yclients.com/"
          target="_blank"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
          color="neutral"
          class="bg-green-700/70 hover:bg-green-600/70 text-white border-none"
        >
          Записаться онлайн
        </UButton>
        <UButton
          to="#services"
          size="xl"
          icon="i-lucide-list"
          color="neutral"
          class="bg-transparent text-amber-900 hover:bg-white/10"
        >
          Посмотреть услуги
        </UButton>
      </Reveal>
    </div>
  </section>
</template>