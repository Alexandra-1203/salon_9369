<template>
  <section class="relative w-full pt-0 overflow-hidden" id="about">
    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <Reveal class="flex items-center justify-start">
        <img
          src="/images/natasha.png"
          alt="Наш салон"
          class="max-w-full h-auto max-h-[800px] object-contain drop-shadow-2xl w-full lg:w-auto"
        />
      </Reveal>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div class="flex flex-col">
          <div class="relative">
            <Reveal :delay="100">
              <div class="absolute -left-6 -top-6 text-7xl text-green-500/20 font-serif select-none pointer-events-none">
                &laquo;
              </div>
            </Reveal>

            <div class="border-l-4 border-green-500 pl-6">
              <Reveal tag="h2" :delay="200" class="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-gray-900">
                Привет, мои дорогие!
              </Reveal>

              <Reveal tag="p" :delay="350" class="text-gray-600 text-lg mb-8 leading-relaxed italic">
                Я Наталья — руководитель студии маникюра «Красота на Крыльях 9369».
                Хочу сказать вам пару слов от себя лично.
                Моя главная цель — это безопасность и здоровье каждого, кто приходит к нам.
                Для меня это не просто слова: я сама начинала как мастер и до сих пор
                прекрасно понимаю все тонкости работы. И знаю, что ошибаться нельзя.
                Поэтому к выбору мастеров я подхожу максимально ответственно: для меня важно,
                чтобы вы получали только качественные услуги и были в полной безопасности.
                Мы строго соблюдаем все санитарные нормы, работаем только с проверенными материалами
                и следим за стерильностью на каждом этапе.
                Но для меня не менее важно и то, что происходит с вами эмоционально.
                Я хочу, чтобы, приходя к нам, вы на время забывали про все дела и проблемы.
                Чтобы каждая услуга становилась для вас маленькой перезагрузкой, и вы выходили
                из студии наполненными любовью и радостью.
                Ведь ты красива сегодня, завтра и всегда — и мы рады быть частью этого ощущения!
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>