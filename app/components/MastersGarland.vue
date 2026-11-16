<template>
  <section class="relative w-full py-16 lg:py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <div class="text-center mb-16">
        <Reveal tag="h2" class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900">
          Наши мастера
        </Reveal>
        <Reveal tag="p" :delay="150" class="text-gray-600 text-lg max-w-2xl mx-auto">
          Люди, которые создают вашу красоту каждый день
        </Reveal>
      </div>

      <Reveal :delay="250" y="40">
        <div class="polaroid-strip">

          <button
            @click="prevSlide"
            class="polaroid-nav polaroid-nav--prev"
            aria-label="Предыдущий мастер"
          >‹</button>

          <div class="polaroid-track">
            <div
              v-for="(master, i) in masters"
              :key="master.id"
              class="polaroid"
              :class="{
                'polaroid--active': i === currentSlide,
                'polaroid--prev': i === prevIndex,
                'polaroid--next': i === nextIndex,
              }"
              @click="currentSlide = i"
            >
              <img
                src="/images/clothespin.png"
                alt=""
                class="polaroid__clip"
              />
              <img :src="master.photo" :alt="master.name" class="polaroid__photo" />
              <div class="polaroid__caption">
                <h3 class="polaroid__name">{{ master.name }}</h3>
                <p class="polaroid__role">{{ master.role }}</p>
                <UButton
                  :to="master.bookingUrl || 'https://n1163753.yclients.com/'"
                  target="_blank"
                  size="sm"
                  trailing-icon="i-lucide-arrow-right"
                  class="polaroid__btn bg-amber-900 hover:bg-amber-950 text-white border-none rounded-full mt-3"
                  @click.stop
                >
                  Записаться
                </UButton>
              </div>
            </div>
          </div>

          <button
            @click="nextSlide"
            class="polaroid-nav polaroid-nav--next"
            aria-label="Следующий мастер"
          >›</button>

        </div>
      </Reveal>

      <Reveal :delay="400">
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(m, i) in masters"
            :key="i"
            @click="currentSlide = i"
            class="w-2.5 h-2.5 rounded-full transition"
            :class="currentSlide === i ? 'bg-green-600 scale-125' : 'bg-gray-300'"
            :aria-label="`Мастер ${i + 1}`"
          />
        </div>
      </Reveal>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const masters = ref([
  { id: 1, name: 'Наталья', role: 'Руководитель студии, мастер маникюра', photo: '/images/natasha.png', bookingUrl: 'https://n1163753.yclients.com/', },
  { id: 2, name: 'Анна', role: 'Мастер по ресницам', photo: '/images/natasha.png', bookingUrl: 'https://n1163753.yclients.com/', },
  { id: 3, name: 'Мария', role: 'Бровист', photo: '/images/natasha.png', bookingUrl: 'https://n1163753.yclients.com/', },
])

const currentSlide = ref(0)
const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % masters.value.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + masters.value.length) % masters.value.length }

const prevIndex = computed(() => (currentSlide.value - 1 + masters.value.length) % masters.value.length)
const nextIndex = computed(() => (currentSlide.value + 1) % masters.value.length)
</script>

<style scoped>
.polaroid-strip {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
}

.polaroid-track {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.polaroid {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  max-width: 70vw;
  background: #fff;
  padding: 14px 14px 0 14px;
  border-radius: 3px;
  box-shadow:
    0 12px 30px -10px rgba(0, 0, 0, 0.25),
    0 6px 12px -4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform-origin: center center;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.4s ease,
              box-shadow 0.4s ease;
  transform: translate(-50%, -50%) scale(0.6);
  opacity: 0;
  pointer-events: none;
  z-index: 0;
}

.polaroid__photo {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 2px;
  background: #f3f4f6;
}

.polaroid__caption {
  padding: 16px 8px 22px;
  text-align: center;
}

.polaroid__name {
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
}

.polaroid__role {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
}

.polaroid--active {
  transform: translate(-50%, -50%) scale(1) rotate(-2deg);
  opacity: 1;
  pointer-events: auto;
  z-index: 3;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.3),
    0 10px 20px -6px rgba(0, 0, 0, 0.15);
}

.polaroid--prev {
  transform: translate(-130%, -50%) scale(0.75) rotate(-8deg);
  opacity: 0.75;
  pointer-events: auto;
  z-index: 2;
}

.polaroid--next {
  transform: translate(30%, -50%) scale(0.75) rotate(8deg);
  opacity: 0.75;
  pointer-events: auto;
  z-index: 2;
}

.polaroid-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background: #fff;
  color: #111;
  font-size: 22px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: background 0.2s ease, transform 0.15s ease;
}

.polaroid-nav:hover {
  background: #f3f4f6;
  transform: translateY(-50%) scale(1.05);
}
.polaroid-nav:active {
  transform: translateY(-50%) scale(0.95);
}
.polaroid-nav--prev { left: 0; }
.polaroid-nav--next { right: 0; }

.polaroid__clip {
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
  width: 72px;
  height: auto;
  z-index: 4;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
  pointer-events: none;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.polaroid--active .polaroid__clip {
  transform: translateX(-50%) rotate(-4deg);
}

.polaroid__btn {
  font-size: 0.85rem;
}

.polaroid__btn {
  position: relative;
  z-index: 5;
}

@media (max-width: 768px) {
  .polaroid-track { height: 460px; }
  .polaroid { width: 260px; }
  .polaroid-nav { width: 40px; height: 40px; font-size: 18px; }
  .polaroid--prev { transform: translate(-115%, -50%) scale(0.7) rotate(-8deg); }
  .polaroid--next { transform: translate(15%, -50%) scale(0.7) rotate(8deg); }
}
</style>