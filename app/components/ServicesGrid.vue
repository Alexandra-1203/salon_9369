<template>
  <section
    id="services"
    class="relative w-full py-16 lg:py-24 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
      <Reveal
        tag="h2"
        class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-gray-900 text-center"
      >
        Наши услуги
      </Reveal>
      <Reveal
        tag="p"
        :delay="150"
        class="text-gray-600 text-lg mb-8 leading-relaxed text-center max-w-3xl mx-auto"
      >
        Выберите идеальный уход для себя. Работаем с лучшими материалами и гарантируем результат.
      </Reveal>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-6 lg:px-12 pb-12">
      <Reveal
        v-for="(service, i) in services"
        :key="service.slug"
        :delay="i * 100"
        :class="{ 'md:col-span-2': service.wide }"
      >
        <NuxtLink
          :to="`/services/${service.slug}`"
          class="relative block w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img
            :src="service.image"
            :alt="service.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <h3 class="font-heading text-3xl md:text-4xl text-white mb-2">{{ service.title }}</h3>
            <p class="text-gray-200 mb-4">{{ service.description }}</p>
            <span
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur transition"
            >
              Подробнее
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </NuxtLink>
      </Reveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
</script>
