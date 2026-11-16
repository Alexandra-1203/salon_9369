<template>
  <section id="promo" class="relative w-full py-16 lg:py-24 overflow-hidden">
    <div class="text-center mb-18">
      <Reveal tag="h2" class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-gray-900">
        Подарок для новых гостей
      </Reveal>
      <Reveal tag="p" :delay="150" class="text-gray-600 text-lg max-w-2xl mx-auto">
        Дарим 2000 ₽ на первое посещение — и заботимся о вашем комфорте на каждом этапе
      </Reveal>
    </div>

    <div class="max-w-4xl mx-auto px-6 lg:px-12">
      <Reveal :delay="300" :y="40">
        <div class="ticket">

          <div class="ticket__main">
            <p class="ticket__label">Промокод на</p>
            <p class="ticket__amount">2000 ₽</p>
            <p class="ticket__hint">на первое посещение студии</p>

            <div class="ticket__code">
              <span class="ticket__code-label">Ваш код</span>
              <span class="ticket__code-value">Попугай</span>
            </div>
          </div>

          <div class="ticket__perforation">
            <span v-for="n in 12" :key="n" class="ticket__hole"></span>
          </div>

          <div class="ticket__stub">
            <p class="ticket__stub-text">Запишись сейчас</p>
            <UButton
              to="https://n1163753.yclients.com/"
              target="_blank"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
              class="bg-amber-900 hover:bg-amber-950 text-white border-none rounded-xl"
            >
              Онлайн-запись
            </UButton>
            <p class="ticket__stub-small">Срок действия — 30 дней</p>
          </div>

        </div>
      </Reveal>
    </div>
  </section>
</template>

<style scoped>
.ticket {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto auto;
  border-radius: 20px;
  box-shadow:
    0 20px 45px -15px rgba(0, 0, 0, 0.2),
    0 8px 20px -8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  transform-origin: center center;
}

.ticket:hover {
  transform: rotate(-2deg) scale(1.02);
  box-shadow:
    0 30px 60px -20px rgba(0, 0, 0, 0.3),
    0 12px 25px -8px rgba(0, 0, 0, 0.15);
}

.ticket__main {
  padding: 32px 32px 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ticket__label {
  font-size: 0.9rem;
  color: #92400e;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 4px;
}

.ticket__amount {
  font-family: 'Georgia', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #78350f;
  line-height: 1;
  margin-bottom: 8px;
}

.ticket__hint {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 24px;
}

.ticket__code {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border: 2px dashed #c99aa8;
  border-radius: 10px;
  background: #fffaf3;
  align-self: flex-start;
}

.ticket__code-label {
  font-size: 0.75rem;
  color: #92400e;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.ticket__code-value {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: #78350f;
  letter-spacing: 0.1em;
}

.ticket__perforation {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  width: 20px;
}

.ticket__perforation::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: calc(100% - 24px);
  border-left: 2px dashed #c99aa8;
}

.ticket__hole {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  position: relative;
  z-index: 1;
}

.ticket::before,
.ticket::after {
  content: '';
  position: absolute;
  left: 100%;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  z-index: 2;
  pointer-events: none;
}
.ticket::before {
  top: -12px;
  left: calc(100% - 220px);
}
.ticket::after {
  bottom: -12px;
  left: calc(100% - 220px);
}

.ticket__stub {
  padding: 32px 40px 32px 32px;
  background: linear-gradient(135deg, #e8d0d6 0%, #d9b3be 50%, #c99aa8 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 12px;
  min-width: 240px;
}

.ticket__stub-text {
  font-family: 'Georgia', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #5b2c0d;   
}

.ticket__stub-small {
  font-size: 0.75rem;
  color: #78350f;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .ticket {
    grid-template-columns: 1fr;
  }

  .ticket__perforation {
    flex-direction: row;
    width: 100%;
    height: 20px;
    padding: 0 12px;
  }

  .ticket__perforation::before {
    width: calc(100% - 24px);
    height: 2px;
    border-left: none;
    border-top: 2px dashed #c99aa8;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ticket::before,
  .ticket::after {
    display: none;
  }

  .ticket__main {
    padding: 32px 24px 24px;
    text-align: center;
    align-items: center;
  }
  .ticket__code {
    align-self: center;
  }
  .ticket__stub {
    padding: 24px 24px 32px;
    min-width: 0;
  }
}
</style>