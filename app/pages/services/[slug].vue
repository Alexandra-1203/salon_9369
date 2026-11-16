<template>
  <section class="relative w-full py-16 lg:py-24 overflow-hidden">
    <div class="max-w-5xl mx-auto px-6 lg:px-12">
      <nav class="mb-8 text-sm text-gray-500">
        <NuxtLink
          to="/"
          class="hover:text-green-600"
        >Главная</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink
          to="/#services"
          class="hover:text-green-600"
        >Услуги</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-900">{{ service.title }}</span>
      </nav>

      <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900">
        {{ service.title }}
      </h1>
      <p class="text-gray-600 text-lg mb-10 max-w-2xl">
        {{ service.description }}
      </p>

      <div class="rounded-3xl overflow-hidden shadow-2xl mb-12 h-[300px] md:h-[420px]">
        <img
          :src="service.image"
          :alt="service.title"
          class="w-full h-full object-cover"
        >
      </div>

      <div
        v-if="service.tiers && service.tiers.length"
        class="flex justify-center mb-8"
      >
        <div class="inline-flex bg-gray-100 rounded-full p-1 flex-wrap">
          <button
            v-for="tier in service.tiers"
            :key="tier.id"
            class="px-5 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition flex items-center gap-2"
            :class="activeTier === tier.id
              ? 'bg-white text-amber-900 shadow'
              : 'text-gray-500 hover:text-gray-800'"
            @click="activeTier = tier.id"
          >
            {{ tier.label }}
            <span
              v-if="tier.hint"
              class="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full"
            >
              {{ tier.hint }}
            </span>
          </button>
        </div>
      </div>

      <h2 class="font-heading text-2xl md:text-3xl mb-6 text-gray-900">
        Услуги и цены
        <span
          v-if="activeTierData"
          class="text-base font-normal text-gray-500 ml-2"
        >
          — {{ activeTierData.label }}
        </span>
      </h2>

      <transition
        name="fade"
        mode="out-in"
      >
        <ul
          :key="activeTier"
          class="flex flex-col gap-3 mb-12"
        >
          <template
            v-for="item in service.items"
            :key="item.name"
          >
            <li
              v-if="getPrice(item) !== null"
              class="flex items-center justify-between gap-4 p-4 md:p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <div class="flex flex-col">
                <span class="text-gray-900 font-medium">{{ item.name }}</span>
                <span
                  v-if="item.savings"
                  class="inline-flex px-3 py-1 my-3 rounded-full text-xs font-semibold
                     bg-green-50 text-green-800 border border-green-200 w-fit"
                >
                  {{ item.savings }}
                </span>
                <span
                  v-if="getDuration(item)"
                  class="text-sm text-gray-500"
                >
                  {{ getDuration(item) }}
                </span>
              </div>
              <span class="font-bold text-lg text-green-700 whitespace-nowrap">
                {{ getPrice(item) }}
              </span>
            </li>
          </template>
        </ul>
      </transition>

      <!-- CTA -->
      <div class="flex flex-wrap gap-4">
        <UButton
          to="https://n1163753.yclients.com/"
          target="_blank"
          size="xl"
          trailing-icon="i-lucide-arrow-right"
          class="bg-green-700 hover:bg-green-800 text-white border-none rounded-xl"
        >
          Записаться онлайн
        </UButton>
        <UButton
          to="/#services"
          size="xl"
          color="neutral"
          variant="outline"
          class="border-green-700 text-green-700 hover:bg-green-50 rounded-xl"
        >
          Все услуги
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getServiceBySlug } from '~/data/services'

const route = useRoute()
const service = getServiceBySlug(route.params.slug as string)

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Услуга не найдена' })
}

const activeTier = ref<string>(service.tiers?.[0]?.id || '')

const activeTierData = computed(() =>
  service.tiers?.find(t => t.id === activeTier.value) || null
)

function getPrice(item: any) {
  if (item.prices && activeTier.value) {
    return item.prices[activeTier.value] ?? null
  }
  return item.price ?? null
}

function getDuration(item: any) {
  if (item.durations && activeTier.value) {
    return item.durations[activeTier.value] ?? null
  }
  return item.duration ?? null
}

useHead({
  title: `${service.title} — Красота на Крыльях 9369`,
  meta: [{ name: 'description', content: service.description }]
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
