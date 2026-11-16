<template>
  <footer class="footer" id="contacts">
    <Reveal :delay="0" :y="40">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">

        <div class="footer__grid">

            <div class="footer__map">
            <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.236861%2C59.931972&z=17&pt=30.236861,59.931972"
                width="100%"
                height="100%"
                frameborder="0"
                allowfullscreen
                loading="lazy"
                title="Карта — Красота на Крыльях 9369"
                ></iframe>
            </div>

            <div class="footer__info">

            <div class="footer__col">
                <NuxtLink to="/" class="footer__logo">
                Красота на Крыльях 9369
                </NuxtLink>
                <div class="footer__rating">
                    <iframe
                        src="https://yandex.ru/sprav/widget/rating-badge/215654187346?type=alt"
                        width="300"
                        height="100"
                        frameborder="0"
                        loading="lazy"
                        title="Рейтинг на Яндекс.Картах"
                    ></iframe>
                    </div>

                <div class="footer__socials">
                <a href="https://t.me/krasotanakrylix9369" target="_blank" class="footer__social" aria-label="Telegram">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
                    </svg>
                </a>
                <a href="https://vk.ru/krasotanakrylix9369" target="_blank" class="footer__social" aria-label="ВКонтакте">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974H.879c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.284 2.708z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/9369krasotanakruliyx?stkn=MXpudWtnZW50M3Rn" target="_blank" class="footer__social" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.18 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.5.01-4.74.07-2.42.11-3.55 1.26-3.66 3.66-.06 1.24-.07 1.59-.07 4.74 0 3.15.01 3.5.07 4.74.11 2.4 1.24 3.55 3.66 3.66 1.24.06 1.59.07 4.74.07 3.15 0 3.5-.01 4.74-.07 2.42-.11 3.55-1.26 3.66-3.66.06-1.24.07-1.59.07-4.74 0-3.15-.01-3.5-.07-4.74-.11-2.4-1.24-3.55-3.66-3.66-1.24-.06-1.59-.07-4.74-.07zm0 3.06a5.13 5.13 0 110 10.26 5.13 5.13 0 010-10.26zm0 1.8a3.33 3.33 0 100 6.66 3.33 3.33 0 000-6.66zm5.4-2.88a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                    </svg>
                </a>
                </div>

                <p class="footer__disclaimer">
                * Instagram — признан продуктом экстремистской организации Meta на территории РФ.
                </p>
            </div>

            <div class="footer__col">
                <h3 class="footer__heading">Меню</h3>
                <ul class="footer__list">
                <li><NuxtLink to="/#services" class="footer__link">Услуги</NuxtLink></li>
                <li><NuxtLink to="/#about" class="footer__link">О нас</NuxtLink></li>
                <li><NuxtLink to="/#reviews" class="footer__link">Отзывы</NuxtLink></li>
                <li><NuxtLink to="/#promo" class="footer__link">Промокод</NuxtLink></li>
                </ul>
            </div>

            <div class="footer__col">
                <h3 class="footer__heading">Контакты</h3>
                <ul class="footer__list">
                <li class="footer__contact">
                    <span>г. Санкт-Петербург, ул. Наличная 11</span>
                </li>
                <li class="footer__contact">
                    <a href="tel:+79814940815" class="footer__link">+7 (981) 494-08-15</a>
                </li>
                <li class="footer__contact">
                    <a href="mailto:info@krasota9369.ru" class="footer__link">homebeauty9369@yandex.ru</a>
                </li>
                <li class="footer__contact">
                    <span>Ежедневно 10:00 — 22:00</span>
                </li>
                </ul>
            </div>

            </div>

        </div>

        <div class="footer__cta">
            <UButton
            to="https://n1163753.yclients.com/"
            target="_blank"
            size="lg"
            trailing-icon="i-lucide-arrow-right"
            class="bg-amber-900 hover:bg-amber-950 text-white border-none rounded-full"
            >
            Записаться онлайн
            </UButton>
        </div>

        <div class="footer__bottom">
            <p class="footer__copy">
            © {{ new Date().getFullYear() }} Студия красоты «Красота на Крыльях 9369»
            </p>
            <NuxtLink to="/privacy" class="footer__link footer__link--small">
            Политика конфиденциальности
            </NuxtLink>
        </div>

        </div>
    </Reveal>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 64px 0 32px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(201, 154, 168, 0.5) 50%,
    transparent 100%
  );
}

.footer__rating {
  display: flex;
  align-items: center;
  padding: 4px 0;
  min-width: 150px;
}

.footer__rating iframe {
  display: block;
  border: 0;
  width: 180px;
  height: 60px;
}

.footer__tagline {
  font-size: 0.9rem;
  line-height: 1.55;
  color: #92400e;
}

/* ─── Соцсети ─── */
.footer__socials {
  display: flex;
  gap: 12px;
  padding-top: 6px;
}

.footer__social {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.6);
  color: #78350f;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.footer__social:hover {
  background: #78350f;
  color: #fce7f3;
  transform: translateY(-3px);
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 48px;
  margin-bottom: 32px;
}

.footer__map {
  width: 100%;
  height: 100%;
  min-height: 280px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 30px -10px rgba(201, 154, 168, 0.4);
}

.footer__map iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.footer__info {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.4fr;
  gap: 32px;
  align-content: start;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__heading {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #78350f;
  margin-bottom: 4px;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__link {
  font-size: 0.95rem;
  color: #92400e;
  text-decoration: none;
  transition: color 0.2s ease;
  display: inline-block;
}

.footer__link:hover {
  color: #5b2c0d;
  text-decoration: underline;
}

.footer__link--small {
  font-size: 0.85rem;
}

.footer__contact {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  color: #92400e;
  line-height: 1.5;
}

.footer__disclaimer {
  font-size: 0.75rem;
  line-height: 1.5;
  color: #92400e;
  opacity: 0.7;
  margin-bottom: 24px;
  max-width: 480px;
}

.footer__cta {
  display: flex;
  justify-content: center;
  padding: 32px 0;
  border-top: 1px dashed rgba(201, 154, 168, 0.5);
  border-bottom: 1px dashed rgba(201, 154, 168, 0.5);
  margin-bottom: 24px;
}

.footer__bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.footer__copy {
  font-size: 0.85rem;
  color: #92400e;
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer__map {
    height: 320px;
    min-height: 0;
  }
  .footer__info {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 48px 0 24px;
  }
  .footer__top {
    flex-direction: column;
    gap: 16px;
  }
  .footer__info {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .footer__map {
    height: 260px;
  }
  .footer__cta {
    padding: 24px 0;
  }
  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>