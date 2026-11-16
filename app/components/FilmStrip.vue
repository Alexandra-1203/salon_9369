<template>
  <section class="film-section" :class="themeClass">
    <div class="text-center mb-12 px-6 lg:px-12">
      <Reveal tag="h2" class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900">
        {{ title }}
      </Reveal>
      <Reveal tag="p" :delay="150" class="text-gray-600 text-lg max-w-2xl mx-auto">
        {{ subtitle }}
      </Reveal>
    </div>

    <Reveal :delay="250" y="40">
      <div
        ref="viewportRef"
        class="film"
        @mousedown="onPointerDown"
        @mousemove="onPointerMove"
        @mouseup="onPointerUp"
        @touchstart.passive="onPointerDown"
        @touchmove.passive="onPointerMove"
        @touchend="onPointerUp"
        @touchcancel="onPointerUp"
      >
        <div
          ref="trackRef"
          class="film__track"
          :style="{ transform: `translateX(${position}px)` }"
        >
          <div
            v-for="(item, i) in loopSlides"
            :key="i"
            class="film__frame"
          >
            <video
              v-if="item.type === 'video'"
              :src="item.src"
              class="film__photo"
              autoplay muted loop playsinline preload="metadata"
            ></video>
            <img
              v-else
              :src="item.src || item"
              :alt="title"
              class="film__photo"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </Reveal>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  slides: { type: Array, required: true },
  theme: { type: String, default: 'pink' },
  duration: { type: Number, default: 40 },
})

const themeClass = computed(() => `film-section--${props.theme}`)
const loopSlides = computed(() => [...props.slides, ...props.slides])

const trackRef = ref(null)
const trackWidth = ref(0)    
const position = ref(0)   
const dragging = ref(false)

let animationId = null
let lastTime = 0
let velocity = 0        

const getAutoSpeed = () => {
  if (!props.duration || !trackWidth.value) return 0
  return trackWidth.value / props.duration 
}

const tick = (time) => {
  if (!lastTime) lastTime = time
  const dt = (time - lastTime) / 1000
  lastTime = time

  if (!dragging.value) {
    const auto = getAutoSpeed()
    velocity += (auto - velocity) * 0.05
    position.value -= velocity * dt
    wrapPosition()
  }

  animationId = requestAnimationFrame(tick)
}

const wrapPosition = () => {
  const half = trackWidth.value
  if (!half) return
  while (position.value <= -half) position.value += half
  while (position.value > 0) position.value -= half
}

const startX = ref(0)
const startPosition = ref(0)
const lastX = ref(0)
const lastMoveTime = ref(0)

const onPointerDown = (e) => {
  dragging.value = true
  velocity = 0
  startX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  startPosition.value = position.value
  lastX.value = startX.value
  lastMoveTime.value = performance.now()
}

const onPointerMove = (e) => {
  if (!dragging.value) return
  const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const diff = x - startX.value
  position.value = startPosition.value + diff
  wrapPosition()

  const now = performance.now()
  const dt = now - lastMoveTime.value
  if (dt > 0) {
    velocity = ((lastX.value - x) / dt) * 1000
  }
  lastX.value = x
  lastMoveTime.value = now
}

const onPointerUp = () => {
  dragging.value = false
  velocity = Math.max(-2000, Math.min(2000, velocity))
}


const measure = () => {
  if (trackRef.value) {
    trackWidth.value = trackRef.value.scrollWidth / 2
  }
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure)
  animationId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  window.removeEventListener('resize', measure)
  if (animationId) cancelAnimationFrame(animationId)
})
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
  padding: 40px 0;
  overflow: hidden;
  user-select: none;
  touch-action: pan-y;
  cursor: grab;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.5),
    inset 0 -3px 6px rgba(0, 0, 0, 0.06);
}
.film:active { cursor: grabbing; }

.film-section--pink .film {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 25%),
    linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.06) 100%),
    linear-gradient(135deg, #e8d0d6 0%, #d9b3be 50%, #c99aa8 100%);
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.5),
    inset 0 -3px 6px rgba(0, 0, 0, 0.06),
    0 20px 40px -15px rgba(201, 154, 168, 0.35);
}

.film-section--pink::before {
  content: '';
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 40px;
  height: 40px;
  background: radial-gradient(
    ellipse at center,
    rgba(201, 154, 168, 0.35) 0%,
    rgba(201, 154, 168, 0.12) 40%,
    transparent 75%
  );
  filter: blur(14px);
  z-index: 0;
  pointer-events: none;
}

.film-section--green .film {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, transparent 25%),
    linear-gradient(180deg, transparent 70%, rgba(0, 0, 0, 0.06) 100%),
    linear-gradient(135deg, #d3e0cb 0%, #aec5a3 50%, #8baa80 100%);
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.5),
    inset 0 -3px 6px rgba(0, 0, 0, 0.06),
    0 20px 40px -15px rgba(139, 170, 128, 0.35);
}

.film-section--green::before {
  content: '';
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 40px;
  height: 40px;
  background: radial-gradient(
    ellipse at center,
    rgba(139, 170, 128, 0.35) 0%,
    rgba(139, 170, 128, 0.12) 40%,
    transparent 75%
  );
  filter: blur(14px);
  z-index: 0;
  pointer-events: none;
}

.film::before,
.film::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 20px;
  background-image: radial-gradient(
    circle at 12px 10px,
    rgba(255, 255, 255, 0.9) 0,
    rgba(255, 255, 255, 0.9) 6px,
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
  width: max-content;
  will-change: transform;
}

.film__frame {
  position: relative;
  flex-shrink: 0;
  width: 300px;
  aspect-ratio: 3 / 4;
  background: #f4f4f4;
  overflow: hidden;
  box-shadow:
    0 8px 20px -6px rgba(0, 0, 0, 0.25),
    0 3px 8px -2px rgba(0, 0, 0, 0.12);
}

.film__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 640px) {
  .film { padding: 32px 0; }
  .film::before,
  .film::after {
    height: 16px;
    background-size: 20px 16px;
  }
  .film__frame { width: 240px; }
}
</style>