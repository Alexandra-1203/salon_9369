<template>
  <section
    id="reviews"
    class="relative w-full py-16 lg:py-24 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="text-center mb-12">
        <Reveal
          tag="h2"
          class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900"
        >
          Отзывы наших клиентов
        </Reveal>
        <Reveal
          tag="p"
          :delay="150"
          class="text-gray-600 text-lg"
        >
          Реальные сообщения от довольных гостей
        </Reveal>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
        <Reveal
          :delay="250"
          class="relative flex justify-center"
        >
          <img
            src="/images/phoneee.png"
            alt="Смартфон"
            loading="lazy"
            decoding="async"
            class="relative z-10 w-[280px] md:w-[400px] h-auto drop-shadow-2xl"
          >

          <div class="absolute inset-0 z-0 flex items-center justify-center pb-20 md:pb-24 pr-2">
            <transition
              name="fade"
              mode="out-in"
            >
              <img
                :key="currentReview.photo"
                :src="currentReview.photo"
                :alt="currentReview.name"
                loading="lazy"
                decoding="async"
                class="w-[170px] h-[340px] md:w-[226px] md:h-[482px] object-cover rounded-[2rem] border-4 border-white/50 shadow-xl translate-x-[4px] translate-y-[40px] md:translate-x-[4px] md:translate-y-[47px]"
              >
            </transition>
          </div>
        </Reveal>

        <Reveal
          :delay="350"
          class="relative flex justify-center lg:justify-start"
        >
          <div
            class="relative z-10 w-full max-w-[600px] min-h-[320px] md:min-h-[380px] px-8 py-10 md:px-12 pt-20 md:pt-24"
            style="background-image: url('/images/smssss.png'); background-size: 100% 100%; background-repeat: no-repeat; background-position: center;"
          >
            <transition
              name="fade"
              mode="out-in"
            >
              <div :key="currentReview.id">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm md:text-lg">
                    {{ currentReview.name.charAt(0) }}
                  </div>
                  <div>
                    <p class="font-bold text-gray-900 text-sm md:text-base">
                      {{ currentReview.name }}
                    </p>
                    <p class="text-xs text-gray-500">
                      {{ currentReview.date }}
                    </p>
                  </div>
                </div>

                <p class="text-sm md:text-lg text-gray-800 leading-relaxed mb-2 italic">
                  «{{ currentReview.text }}»
                </p>

                <div class="flex text-yellow-400 mb-2">
                  <span
                    v-for="star in 5"
                    :key="star"
                  >★</span>
                </div>
              </div>
            </transition>
          </div>
        </Reveal>
      </div>

      <Reveal :delay="450">
        <div class="flex justify-center lg:justify-start lg:pl-[50%] mt-8 gap-4">
          <button
            class="w-12 h-12 rounded-full bg-white shadow-md hover:bg-green-700 hover:text-white transition-colors flex items-center justify-center border border-gray-200"
            @click="prevReview"
          >
            ←
          </button>
          <button
            class="w-12 h-12 rounded-full bg-white shadow-md hover:bg-green-700 hover:text-white transition-colors flex items-center justify-center border border-gray-200"
            @click="nextReview"
          >
            →
          </button>
        </div>
      </Reveal>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const reviews = ref([
  { id: 1, name: 'Анна Смирнова', date: '12 мая 2024', photo: '/images/manicure.webp',
    text: 'Делала маникюр и ресницы. Мастера просто волшебницы! Атмосфера уютная, всё стерильно. Результат превзошёл все ожидания, обязательно вернусь!' },
  { id: 2, name: 'Елена Иванова', date: '28 апреля 2024', photo: '/images/pedicure.webp',
    text: 'Записалась на педикюр. Очень понравился подход: сначала обсудили, что я хочу, подобрали цвет. Сделали аккуратно и быстро. Рекомендую салон!' },
  { id: 3, name: 'Мария Петрова', date: '15 апреля 2024', photo: '/images/brows.webp',
    text: 'Хожу на брови уже полгода. Форма держится идеально, мастер всегда подскажет, как лучше ухаживать. Цены приятные, сервис на высоте!' }
])

const currentIndex = ref(0)
const currentReview = computed(() => reviews.value[currentIndex.value])

const nextReview = () => { currentIndex.value = (currentIndex.value + 1) % reviews.value.length }
const prevReview = () => { currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>
