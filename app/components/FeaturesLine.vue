<template>
  <section class="relative w-full pb-24 lg:pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6">

        <Reveal class="flex flex-col items-center text-center flex-1" :delay="0">
          <img
            src="/images/star.png"
            alt="Маникюр без боли"
            class="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain"
          />
          <p class="text-gray-700 text-base md:text-lg leading-snug">
            Маникюр без пропилов и боли
          </p>
        </Reveal>

        <Reveal class="flex flex-col items-center text-center flex-1" :delay="150">
          <img
            src="/images/heart.png"
            alt="Гарантия"
            class="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain"
          />
          <p class="text-gray-700 text-base md:text-lg leading-snug">
            Гарантия на покрытие 10 дней
          </p>
        </Reveal>

        <Reveal class="flex flex-col items-center text-center flex-1" :delay="300">
          <img
            src="/images/geo.png"
            alt="Адрес"
            class="w-16 h-16 md:w-20 md:h-20 mb-4 object-contain"
          />
          <p class="text-gray-700 text-base md:text-lg leading-snug">
            г. Санкт-Петербург ул. Наличная 11
          </p>
        </Reveal>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes icon-pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.1); }
}
.flex > div img {
  transition: transform 0.4s ease;
}

.flex > div:hover img {
  transform: scale(1.15);
}
</style>