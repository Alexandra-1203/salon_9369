<template>
  <section class="relative w-full py-16 lg:py-24 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

        <div class="flex flex-col lg:col-span-2 order-1 text-center lg:text-left items-center lg:items-start">
          <Reveal tag="h2" class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-gray-900">
            Наши работы
          </Reveal>
          <Reveal tag="p" :delay="150" class="text-gray-600 text-lg mb-8 leading-relaxed">
            Посмотрите, как проходят наши процессы. Мы уверены, что качество видно сразу.
            Наши мастера используют только премиальные материалы и современное оборудование.
          </Reveal>
        </div>

        <Reveal :delay="250" class="relative w-full lg:col-span-3 order-2 flex justify-center">
          <div class="camera-block">
            <div class="camera-wrap">
              <img src="/images/fotik.png" alt="Фотоаппарат" class="camera-body" />

              <div class="camera-screen" @click="openLightbox">
              <transition name="fade" mode="out-in">
                  <div :key="currentSlide" class="camera-slide">
                  <video
                      v-if="slides[currentSlide].type === 'video'"
                      :style="{ objectPosition: slides[currentSlide].position || 'center center' }"
                      class="camera-video"
                      autoplay muted loop playsinline
                  >
                      <source :src="slides[currentSlide].src" type="video/mp4">
                  </video>
                  <img
                      v-else
                      :style="{ objectPosition: slides[currentSlide].position || 'center center' }"
                      :src="slides[currentSlide].src"
                      :alt="slides[currentSlide].alt || 'Работа'"
                      class="camera-video"
                  />
                  </div>
              </transition>

              <div class="camera-osd camera-osd--top">
                  <span>{{ slides[currentSlide].frame || '169-6928' }}</span>
              </div>
              <div class="camera-osd camera-osd--bottom">
                  <span class="camera-osd__counter">{{ currentSlide + 1 }}/{{ slides.length }}</span>
                  <span>{{ slides[currentSlide].date || '21/05/30 19:22' }}</span>
              </div>
              <div class="camera-scanlines"></div>
              <div class="camera-dots">
                  <button
                  v-for="(s, i) in slides"
                  :key="i"
                  @click.stop="currentSlide = i"
                  class="camera-dot"
                  :class="{ 'camera-dot--active': i === currentSlide }"
                  :aria-label="`Слайд ${i + 1}`"
                  />
              </div>
              </div>
              <button @click="prevSlide" class="camera-nav camera-nav--prev" aria-label="Назад">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M15 18l-6-6 6-6"/>
                  </svg>
                  </button>

                  <button @click="nextSlide" class="camera-nav camera-nav--next" aria-label="Вперёд">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 6l6 6-6 6"/>
                  </svg>
                  </button>
            </div>
            <div class="camera-hint">
              <span class="camera-hint__text">Листай</span>
               <svg class="camera-hint__arrow" viewBox="0 0 120 90" fill="none"
                    stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 20 C 30 70, 90 70, 110 45" />
                  <path d="M28 30 L 10 20" />
                  <path d="M10 20 L 16 42" />
                </svg>
            </div>
          </div>
        </Reveal>

      </div>
    </div>

    <Teleport to="body">
    <transition name="lightbox">
        <div
        v-if="lightboxOpen"
        class="lightbox"
        @click.self="closeLightbox"
        >

        <button class="lightbox__close" @click="closeLightbox" aria-label="Закрыть">✕</button>

        <button class="lightbox__nav lightbox__nav--prev" @click.stop="prevSlide" aria-label="Назад">‹</button>
        <button class="lightbox__nav lightbox__nav--next" @click.stop="nextSlide" aria-label="Вперёд">›</button>

        <div class="lightbox__content" @click.stop>
            <video
            v-if="slides[currentSlide].type === 'video'"
            class="lightbox__media"
            autoplay muted loop playsinline
            controls
            >
            <source :src="slides[currentSlide].src" type="video/mp4">
            </video>
            <img
            v-else
            :src="slides[currentSlide].src"
            :alt="slides[currentSlide].alt || 'Работа'"
            class="lightbox__media"
            />
        </div>

        <div class="lightbox__counter">
            {{ currentSlide + 1 }} / {{ slides.length }}
        </div>
        </div>
    </transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const slides = ref([
  { type: 'video', src: '/video/brows.mp4', frame: '169-6928', date: '21/05/30 19:22', position: '60% 30%' },
  { type: 'image', src: '/images/manicure.webp', alt: 'Маникюр', frame: '169-6929', date: '21/05/30 19:25', position: 'center top' },
  { type: 'image', src: '/images/manic.jpg', alt: 'Педикюр', frame: '169-6930', date: '21/05/30 19:27', position: 'center center' },
  { type: 'image', src: '/images/manic2.jpg', alt: 'Брови', frame: '169-6931', date: '21/05/30 19:30', position: '50% 20%' },
  { type: 'image', src: '/images/manic3.jpg', alt: 'Ресницы', frame: '169-6932', date: '21/05/30 19:33', position: 'center bottom' },
  { type: 'image', src: '/images/parrot.jpg', alt: 'Ламинирование', frame: '169-6933', date: '21/05/30 19:36', position: 'top' },
])

const currentSlide = ref(0)
const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.value.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length }

const lightboxOpen = ref(false)

const openLightbox = () => {
  lightboxOpen.value = true
  if (process.client) document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  if (process.client) document.body.style.overflow = ''
}

const handleKey = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

if (process.client) {
  window.addEventListener('keydown', handleKey)
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.camera-wrap {
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 600 / 430;
  filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.28));
}

.camera-wrap::after {
  content: '';
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: -22px;
  height: 30px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.15) 40%,
    transparent 75%
  );
  filter: blur(8px);
  z-index: -1;
  pointer-events: none;
}

.camera-body {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
}

.camera-screen {
  position: absolute;
  z-index: 1;
  left: 10.5%;
  top: 27%;
  width: 44.5%;
  height: 55%;
  overflow: hidden;
  background: #0a1a0f;
  border-radius: 2px;
}

.camera-slide {
  position: absolute;
  inset: 0;
}

.camera-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 30%;
  display: block;
  filter: saturate(0.9) contrast(1.05) hue-rotate(-5deg);
}

.camera-osd {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 3% 4%;
  font-family: 'Courier New', monospace;
  font-size: clamp(6px, 1.1vw, 12px);
  color: #eafbe7;
  letter-spacing: 0.05em;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  z-index: 3;
  pointer-events: none;
}
.camera-osd__counter { margin-left: 8%; }
.camera-osd--top { top: 12%; justify-content: flex-end; }
.camera-osd--bottom { bottom: 6%; }

.camera-scanlines {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.06) 0px,
    rgba(0, 0, 0, 0.06) 1px,
    transparent 1px,
    transparent 3px
  );
  mix-blend-mode: multiply;
}

.camera-nav {
  position: absolute;
  z-index: 5;
  width: 24px;              
  height: 24px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.35);  
  color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  opacity: 0.85;
  backdrop-filter: blur(2px);        
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease, background 0.2s ease, transform 0.15s ease;
}

.camera-nav svg {
  width: 14px;      
  height: 14px;
}

.camera-nav:hover {
  background: rgba(255, 255, 255, 0.75);
  opacity: 1;
}

.camera-nav:active {
  transform: scale(0.9);
}

.camera-nav--prev {
  right: 31%;   
  top: 54%;
}

.camera-nav--next {
  right: 18%;  
  top: 54%;
}

.camera-dots {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  z-index: 4;
}
.camera-dot {
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  border: none;
  background: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease, transform 0.2s ease;
}
.camera-dot--active {
  background: #fff;
  transform: scale(1.3);
}

.fade-enter-active,
.fade-leave-active { transition: opacity 0.35s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.camera-screen {
  cursor: pointer;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox__content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox__media {
  max-width: 90vw;
  max-height: 85vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  background: #000;
}

.lightbox__close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.15s ease;
}
.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 32px;
  line-height: 1;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}
.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.3);
}
.lightbox__nav--prev { left: 24px; }
.lightbox__nav--next { right: 24px; }

.lightbox__counter {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.1em;
  opacity: 0.7;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-active .lightbox__media,
.lightbox-leave-active .lightbox__media {
  transition: transform 0.25s ease;
}
.lightbox-enter-from .lightbox__media,
.lightbox-leave-to .lightbox__media {
  transform: scale(0.95);
}

.camera-block {
  position: relative;
  width: 100%;
  max-width: 900px;
}

.camera-hint {
  position: absolute;
  top: 60%;              
  left: 100%;               
  margin-left: 12px;        
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  z-index: 6;
  pointer-events: none;
}

.camera-hint__text {
  font-family: 'Georgia', serif;
  font-style: italic;
  font-size: 18px;
  color: #4b5563;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.7);
}

.camera-hint__arrow {
  width: 70px;
  height: 46px;
  color: #4b5563;
  margin-left: -50px;
  margin-top: -20px;
}

@media (max-width: 768px) {
  .camera-hint {
    position: static;         
    margin: 20px auto 0;        
    flex-direction: row;         
    align-items: center;
    justify-content: center;
    gap: 10px;
    animation: none;             
  }

  .camera-hint__text {
    font-size: 14px;            
  }

  .camera-hint__arrow {
    width: 50px;
    height: 36px;
    transform: scaleX(-1); 
    margin: 0;                  
  }
}

@media (max-width: 640px) {
  .camera-nav {
    width: 20px;
    height: 20px;
  }
  .camera-nav svg {
    width: 12px;
    height: 12px;
  }
  .camera-nav--prev {
    right: 30%;
    top: 53%;
  }
  .camera-nav--next {
    right: 17%;
    top: 53%;
  }
}
</style>