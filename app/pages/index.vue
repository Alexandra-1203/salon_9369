<template>
  <div>
    <HomeHero />
    <LineOfBlocks />
    <AboutOwner />
    <MarqueeLine />
    <WorksCamera />
    <FilmStrip
      title="Наш интерьер"
      subtitle="Уютная студия, в которой хочется остаться подольше"
      theme="pink"
      :duration="50"
      :slides="interiorSlides"
    />
    <ServicesGrid />
    <PromoBanner />
    <FeaturesLine />
    <MastersGarland />
    <FilmStrip
      title="Наша косметика"
      subtitle="Премиальные кремы, скрабы и баттеры собственного производства. В составе 15% масел, натуральный сахар и взбитое масло ши — для глубокого увлажнения, бархатистости и здоровья вашей кожи. Теперь вы можете забрать любимый аромат домой прямо из студии."
      theme="green"
      :duration="50"
      :slides="cosmeticsSlides"
    />
     <FilmStrip
      title="Украшения"
      subtitle="Авторские изделия ручной работы — можно приобрести в студии"
      theme="pink"
      :duration="50"
      :slides="jewelrySlides"
    />
    <ReviewsPhone />
    <LineOfBlocks />
    <ContactForm />
    <FooterSection />
  </div>
</template>

<script setup>
import HomeHero from '~/components/HomeHero.vue'
import LineOfBlocks from '~/components/LineOfBlocks.vue'
import AboutOwner from '~/components/AboutOwner.vue'
import MarqueeLine from '~/components/MarqueeLine.vue'
import WorksCamera from '~/components/WorksCamera.vue'
import FeaturesLine from '~/components/FeaturesLine.vue'
import ServicesGrid from '~/components/ServicesGrid.vue'
import MastersGarland from '~/components/MastersGarland.vue'
import ReviewsPhone from '~/components/ReviewsPhone.vue'
import PromoBanner from '~/components/PromoBanner.vue'
import FilmStrip from '~/components/FilmStrip.vue'
import ContactForm from '~/components/ContactForm.vue'
import FooterSection from '~/components/FooterSection.vue'

const interiorSlides = [
  { type: 'image', src: '/images/interior4.jpg' },
  { type: 'image', src: '/images/interior3.jpg' },
  { type: 'image', src: '/images/interior.jpg' },
  { type: 'image', src: '/images/interior2.jpg' },
  { type: 'image', src: '/images/interior5.jpg' },
  { type: 'image', src: '/images/interior6.jpg' },
]

const cosmeticsSlides = [
  { type: 'image', src: '/images/cosmetics1.jpg' },
  { type: 'image', src: '/images/cosmetics2.jpg' },
  { type: 'image', src: '/images/cosmetics3.jpg' },
  { type: 'image', src: '/images/cosmetics4.jpg' },
  { type: 'video', src: '/video/cosmetics4.mp4' },
]

const jewelrySlides = [
  { type: 'image', src: '/images/necklace.jpg' },
  { type: 'image', src: '/images/necklace4.jpg' },
  { type: 'image', src: '/images/necklace3.jpg' },
  { type: 'image', src: '/images/necklace5.jpg' },
  { type: 'image', src: '/images/necklace2.jpg' },
  { type: 'image', src: '/images/necklace6.jpg' },
  { type: 'image', src: '/images/necklace7.jpg' },
]
</script>