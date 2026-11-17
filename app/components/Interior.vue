<template>
  <section class="film-section">
    <div class="text-center mb-12">
      <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900">
        Наш интерьер
      </h2>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">
        Уютная студия, в которой хочется остаться подольше
      </p>
    </div>
    <div
      ref="viewportRef"
      class="film"
      @mousedown="onPointerDown"
      @mousemove="onPointerMove"
      @mouseup="onPointerUp"
      @mouseleave="onPointerUp"
      @touchstart.passive="onPointerDown"
      @touchmove.passive="onPointerMove"
      @touchend="onPointerUp"
    >
      <div
        ref="trackRef"
        class="film__track"
        :style="{
          transform: `translateX(-${isDragging ? dragOffset : offset}px)`,
          transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }"
      >
        <div
          v-for="(img, i) in slides"
          :key="i"
          class="film__frame"
          :class="{ 'film__frame--active': i === currentSlide }"
        >
          <img
            :src="img"
            alt="Кадр"
            loading="lazy"
            decoding="async"
            class="film__photo"
            draggable="false"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const slides = ref([
  '/images/interior4.jpg',
  '/images/interior3.jpg',
  '/images/interior.jpg',
  '/images/interior2.jpg',
  '/images/interior5.jpg',
  '/images/interior6.jpg'
])

const currentSlide = ref(0)
const frameWidth = ref(300)
const gap = 16
const step = computed(() => frameWidth.value + gap)

const viewportRef = ref(null)
const trackRef = ref(null)
const trackWidth = ref(0)
const viewportWidth = ref(0)

const maxOffset = computed(() => Math.max(0, trackWidth.value - viewportWidth.value))
const offset = computed(() => {
  const raw = currentSlide.value * step.value
  return Math.min(raw, maxOffset.value)
})

const isDragging = ref(false)
const dragOffset = ref(0)
const startX = ref(0)
const startOffset = ref(0)

const onPointerDown = (e) => {
  isDragging.value = true
  startX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  startOffset.value = offset.value
  dragOffset.value = offset.value
}

const onPointerMove = (e) => {
  if (!isDragging.value) return
  const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const diff = x - startX.value
  let newOffset = startOffset.value - diff
  newOffset = Math.max(0, Math.min(newOffset, maxOffset.value))
  dragOffset.value = newOffset
}

const onPointerUp = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const nearest = Math.round(dragOffset.value / step.value)
  currentSlide.value = Math.max(0, Math.min(nearest, slides.value.length - 1))
}

const recalc = () => {
  if (typeof window === 'undefined') return
  frameWidth.value = window.innerWidth < 640 ? 220 : 300

  nextTick(() => {
    if (trackRef.value) trackWidth.value = trackRef.value.scrollWidth
    if (viewportRef.value) viewportWidth.value = viewportRef.value.clientWidth
  })
}

onMounted(() => {
  recalc()
  window.addEventListener('resize', recalc)
})
onUnmounted(() => window.removeEventListener('resize', recalc))
</script>

<style scoped>
.film-section {
  position: relative;
  width: 100%;
  padding: 80px 0;
  overflow: hidden;
}

.film {
  position: relative;
  width: 100%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 25%),
    linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.08) 100%),
    linear-gradient(135deg, #ffc2cf 0%, #ff9fb4 50%, #f78da7 100%);
  padding: 40px 0;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.6),
    inset 0 -3px 6px rgba(0, 0, 0, 0.08);
}
.film:active { cursor: grabbing; }

.film::before,
.film::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 20px;
  background-image: radial-gradient(
    circle at 12px 10px,
    #fff 0,
    #fff 6px,
    transparent 7px
  );
  background-size: 24px 20px;
  background-repeat: repeat-x;
  z-index: 2;
}
.film::before { top: 8px; }
.film::after  { bottom: 8px; }

.film__track {
  display: flex;
  gap: 16px;
  padding: 0 24px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.film__frame {
  flex-shrink: 0;
  width: 300px;
  aspect-ratio: 3 / 4;
  background: #f4f4f4;
  overflow: hidden;
  box-shadow:
    0 8px 20px -6px rgba(0, 0, 0, 0.25),
    0 3px 8px -2px rgba(0, 0, 0, 0.12);
  transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.film__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.film-nav {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}
.film-nav__btn {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background: #fff;
  color: #111;
  font-size: 22px;
  border: 1px solid #e8a0bd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.15s ease;
}
.film-nav__btn:hover {
  background: #fdeef4;
  transform: scale(1.05);
}
.film-nav__btn:active {
  transform: scale(0.95);
}

.film-section::before {
  content: '';
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 40px;
  height: 40px;
  background: radial-gradient(
    ellipse at center,
    rgba(247, 141, 167, 0.45) 0%,
    rgba(247, 141, 167, 0.15) 40%,
    transparent 75%
  );
  filter: blur(14px);
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 640px) {
  .film { padding: 32px 0; }
  .film::before,
  .film::after {
    height: 16px;
    background-size: 20px 16px;
  }
  .film__frame {
    width: 240px;
    height: 165px;
  }
}
</style>
