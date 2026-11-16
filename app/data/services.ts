import type { StringLiteral } from 'typescript'

export interface ServiceItem {
  name: string
  durations?: Record<string, string>
  prices?: Record<string, string>
  price?: string
  duration?: string
  savings?: string
}

export interface Tier {
  id: string
  label: string
  hint?: string
}

export interface Service {
  slug: string
  title: string
  description: string
  image: string
  wide?: boolean
  bookingUrl?: StringLiteral
  tiers?: Tier[]
  items: ServiceItem[]
}

const TIER_MASTER: Tier = { id: 'master', label: 'Мастер' }
const TIER_TOP: Tier = { id: 'top', label: 'Топ-мастер', hint: 'опыт 3+' }
const TIER_PREMIUM: Tier = { id: 'premium', label: 'Премиум мастер', hint: 'опыт 5+' }

export const services: Service[] = [
  {
    slug: 'manicure',
    title: 'Маникюр',
    description: 'Идеальные ногти и уход за кутикулой',
    image: '/images/manicure.webp',
    tiers: [TIER_MASTER, TIER_TOP, TIER_PREMIUM],
    items: [
      { name: 'Снятие + комбинированный маникюр + гель лак', duration: '1 ч 40 мин', prices: { master: '2 600 ₽', top: '3 100 ₽', premium: '3 700 ₽' } },
      { name: 'Детский маникюр (до 12-ти лет)', duration: '1 ч', prices: { master: '990 ₽', top: '1 100 ₽', premium: '1 300 ₽' } },
      { name: 'Детский маникюр + обычный лак (до 12-ти лет)', duration: '1 ч', prices: { master: '1 200 ₽', top: '1 500 ₽', premium: '1 800 ₽' } },
      { name: 'Комбинированный маникюр без покрытия', duration: '1 ч', prices: { master: '1 300 ₽', top: '1 600 ₽', premium: '1 900 ₽' } },
      { name: 'Мужской маникюр', duration: '1 час', prices: { master: '1 500 ₽', top: '1 800 ₽', premium: '2 100 ₽' } },
      { name: 'Снятие + комбинированный маникюр + обычный лак', duration: '1 ч 30 мин', prices: { master: '2 300 ₽', top: '2 600 ₽', premium: '3 100 ₽' } },
      { name: 'Японский маникюр', duration: '1 ч', prices: { master: '1 950 ₽', top: '2 400 ₽', premium: '2 800 ₽' } },
      { name: 'Пилочный маникюр без покрытия', duration: '1 ч 30 мин', prices: { master: '1 800 ₽', top: '2 100 ₽', premium: '2 520 ₽' } },
      { name: 'Пилочный маникюр + японская полировка', duration: '1 ч 30 мин', prices: { master: '2 300 ₽', top: '2 700 ₽' } },
      { name: 'Пилочный маникюр + покрытие обычный лак', duration: '2 ч 30', prices: { master: '2 600 ₽' } },
      { name: 'Снятие наращенных ногтей', duration: '40 мин', prices: { master: '600 ₽', top: '700 ₽', premium: '800 ₽' } },
      { name: 'Укрепление ногтей (гелем/полигелем)', duration: '30 мин', prices: { master: '600 ₽', top: '700 ₽', premium: '800 ₽' } },
      { name: 'Френч/втирка/омбре', duration: '30 мин', prices: { master: '500 ₽', top: '600 ₽', premium: '700 ₽' } },
      { name: 'Снятие + комбинированный маникюр + гель', duration: '1ч 30 мин', prices: { master: '2 800 ₽', top: '3 300 ₽', premium: '3 900 ₽' } }
    ]
  },
  {
    slug: 'lashes-extension',
    title: 'Наращивание ресниц',
    description: 'Выразительный взгляд каждый день',
    image: '/images/lashes_extension.jpg',
    tiers: [TIER_MASTER, TIER_TOP],
    items: [
      { name: 'Классика', duration: '2 ч 10 мин', prices: { master: '2 600 ₽', top: '3 100 ₽' } },
      { name: 'Голливуд', duration: '3 ч', prices: { master: '3 700 ₽', top: '4 400 ₽' } },
      { name: 'Наращивание ресниц 4D', duration: '3 ч', prices: { master: '3 900 ₽', top: '4 600 ₽' } },
      { name: 'Наращивание ресниц 3D', duration: '2 ч 15 мин', prices: { master: '3 400 ₽', top: '4 000 ₽' } },
      { name: 'Наращивание ресниц 2D', duration: '2 ч', prices: { master: '3 000 ₽', top: '3 600 ₽' } },
      { name: 'Наращивание ресниц 2,5D', duration: '2 ч 30 мин', prices: { master: '3 200 ₽', top: '3 800 ₽' } },
      { name: 'Наращивание ресниц 1,5D', duration: '2 ч  10 мин', prices: { master: '2 800 ₽', top: '3 300 ₽' } },
      { name: 'Наращивание нижних ресниц', duration: '40 мин', prices: { master: '1 000 ₽', top: '1200 ₽' } },
      { name: 'Наращивание ресниц 3,5D', duration: '3 ч', prices: { master: '3 600 ₽', top: '4 300 ₽' } },
      { name: 'Наращивание ресниц 5D', duration: '3 ч', prices: { master: '4 100 ₽', top: '4 800 ₽' } },
      { name: 'Коррекция наращивание ресниц', duration: '2 ч', prices: { master: '2 500 ₽', top: '3 000 ₽' } },
      { name: 'Лучи, различные эффекты', duration: '15 мин', prices: { master: '300 ₽', top: '400 ₽' } },
      { name: 'Цветные ресницы', duration: '5 мин', prices: { master: '300 ₽', top: '400 ₽' } },
      { name: 'Снятие нарощенных ресниц', duration: '1 ч 30 мин', prices: { master: '600 ₽', top: '700 ₽' } },
      { name: 'Экспресс наращивание', duration: '1 ч 30 мин', prices: { master: '2 400 ₽', top: '2 900 ₽' } },
      { name: 'Стрелки', duration: '1 ч', prices: { master: '2 200 ₽', top: '2 700 ₽' } },
      { name: 'Мокрый эффект', duration: '30 мин', prices: { master: '500 ₽', top: '3 100 ₽' } }
    ]
  },
  {
    slug: 'brows',
    title: 'Долговременная укладка бровей',
    description: 'Идеальная форма и цвет под ваш типаж',
    image: '/images/brows.webp',
    tiers: [TIER_MASTER, TIER_TOP],
    items: [
      { name: 'Архитектура бровей', duration: '30 мин', prices: { master: '900 ₽', top: '1 100 ₽' } },
      { name: 'Архитектура + ламинирование бровей', duration: '1 ч', prices: { master: '2 200 ₽', top: '2 800 ₽' } },
      { name: 'Архитектура + окрашивание бровей краской', duration: '1 ч', prices: { master: '1 750 ₽', top: '2 100 ₽' } },
      { name: 'Долговременная укладка бровей', duration: '1 ч 15 мин', prices: { master: '2 600 ₽', top: '3 100 ₽' } },
      { name: 'Ламинирование бровей', duration: '30 мин', prices: { master: '1 800 ₽', top: '2 200 ₽' } },
      { name: 'Мужская архитектура', duration: '30 мин', prices: { master: '1 100 ₽', top: '1 300 ₽' } },
      { name: 'Мужская архитектура + окрашивание бровей краской', duration: '1 ч', prices: { master: '1 800 ₽', top: '2 200 ₽' } },
      { name: 'Окрашивание бровей краской', duration: '30 мин', prices: { master: '1 100 ₽', top: '1 300 ₽' } },
      { name: 'Окрашивание бровей краской + ламинирование брорвей', duration: '1 ч', prices: { master: '2 200 ₽', top: '2 800 ₽' } },
      { name: 'Пррореживание бровей', duration: '15 мин', prices: { master: '450 ₽', top: '560 ₽' } },
      { name: 'Осветление бровей', duration: '30 мин', prices: { master: '1 100 ₽', top: '1 300 ₽' } },
      { name: 'Осветление + архитектура + окрашивание бровей краской', duration: '1 ч 15 мин', prices: { master: '2 600 ₽', top: '3 100 ₽' } }
    ]
  },
  {
    slug: 'pedicure',
    title: 'Педикюр',
    description: 'Комфорт и здоровье для ваших ног',
    image: '/images/pedicure.webp',
    tiers: [TIER_MASTER, TIER_TOP, TIER_PREMIUM],
    items: [
      { name: 'Снятие + Smart педикюр (обычный лак)', duration: '1 ч 40 мин', prices: { master: '2 500 ₽', top: '3 100 ₽', premium: '3 700 ₽' } },
      { name: 'Снятие + Smart педикюр (гель лак)', duration: '2 ч', prices: { master: '3 000 ₽', top: '3 600 ₽', premium: '4 300 ₽' } },
      { name: 'Снятие + экспресс педикюр (обычный лак)', duration: '1 ч 30 мин', prices: { master: '2 100 ₽', top: '2 600 ₽', premium: '3 100 ₽' } },
      { name: 'Снятие + экспресс педикюр (гель лак)', duration: '1 ч 20 мин', prices: { master: '2 450 ₽', top: '3 100 ₽', premium: '3700 ₽' } },
      { name: 'Smart педикюр (обработка стоп, пальчиков)', duration: '1 ч', prices: { master: '2 000 ₽', top: '2 500 ₽', premium: '3 000 ₽' } },
      { name: 'Экспресс педикюр (обработка пальчиков)', duration: '1 ч', prices: { master: '1 800 ₽', top: '2 100 ₽', premium: '2 500 ₽' } },
      { name: 'Мужской педикюр', duration: '1 ч', prices: { master: '2 200 ₽', top: '2 600 ₽', premium: '3 100 ₽' } },
      { name: 'Фруктово-ферментативный педикюр без покрытия', duration: '1 ч', prices: { top: '4 300 ₽', premium: '5 000 ₽' } },
      { name: 'Фруктово-ферментативный педикюр + гель лак', duration: '2 ч', prices: { top: '5 300 ₽', premium: '6 000 ₽' } },
      { name: 'Фруктово-ферментативный педикюр + обычный лак', duration: '2 ч', prices: { top: '4 800 ₽', premium: '5 500 ₽' } },
      { name: 'Обработка только пяточек', duration: '30 мин', prices: { premium: '2 500 ₽' } }
    ]
  },
  {
    slug: 'organic-brow',
    title: 'Organic Brows',
    description: 'Естественные и послушные брови без ламинирования и агрессии',
    image: '/images/organic_brows.jpg',
    wide: true,
    tiers: [TIER_MASTER, TIER_TOP],
    items: [
      { name: 'Комплекс Organic Brow', duration: '1 ч 30 мин', prices: { master: '2 900 ₽' } },
      { name: 'Organic Brows (без архитектуры и окрашивания)', duration: '30 мин', prices: { master: '2 100 ₽' } },
      { name: 'Архитектура/окрашивание + Organic Brows', duration: '1 ч', prices: { master: '2 500 ₽' } },
      { name: 'Комплекс Organic Brow (без окрашивания)', duration: '1 ч', prices: { master: '2 000 ₽' } },
      { name: 'Organic Brow + окрашивание ресниц', duration: '1 ч 30 мин', prices: { master: '2 900 ₽' } }
    ]
  },
  {
    slug: 'lashes-lamin',
    title: 'Ламинирование ресниц',
    description: 'Красивый изгиб без наращивания',
    image: '/images/lashes_lamin.jpg',
    tiers: [TIER_MASTER, TIER_TOP],
    items: [
      { name: 'Окрашивание ресниц', duration: '30 мин', prices: { master: '1 100 ₽', top: '1 300 ₽' } },
      { name: 'Ламинирование + окрашивание ресниц', duration: '1 ч', prices: { master: '2 600 ₽', top: '3 100 ₽' } },
      { name: 'Ламинирование ресниц', duration: '1 ч', prices: { master: '1 700 ₽', top: '2 200 ₽' } },
      { name: 'Ламинирование нижних ресниц', duration: '10 мин', prices: { master: '400 ₽', top: '500 ₽' } },
      { name: 'Снятие нарощенных ресниц', duration: '30 мин', prices: { master: '500 ₽', top: '600 ₽' } }
    ]
  },
  {
    slug: 'depil',
    title: 'Депиляция лица',
    description: 'Естественные и послушные брови без ламинирования и агрессии',
    image: '/images/depil.jpg',
    tiers: [TIER_MASTER, TIER_TOP],
    items: [
      { name: 'Депиляция "Сладкий арбузик" (зона над губой, щек/бакендбарды/подбородок, внутри носа)', duration: '30 мин', prices: { master: '1 050 ₽', top: '1 300 ₽' } },
      { name: 'Комплекс "Все включено (зона над губой, щек, бакендбарды, подбородок, внутри носа)"', duration: '1 ч', prices: { master: '1 700 ₽', top: '2 100 ₽' } },
      { name: 'Комплекс "Сладккая вишня" (зона над губой, щек, бакендбарды/подбородок, внутри носа)', duration: '1 ч', prices: { master: '1 350 ₽', top: '1700 ₽' } },
      { name: 'Депиляция "Внутри носа"', duration: '20 мин', prices: { master: '350 ₽', top: '450  ₽' } },
      { name: 'Зона бакенбард', duration: '30 мин', prices: { master: '500 ₽', top: '600 ₽' } },
      { name: 'Зона губы', duration: '20 мин', prices: { master: '350 ₽', top: '450 ₽' } },
      { name: 'Зона подборотка', duration: '30 мин', prices: { master: '500 ₽', top: '600 ₽' } },
      { name: 'Зона щек', duration: '30 мин', prices: { master: '500 ₽', top: '600 ₽' } }
    ]
  },
  {
    slug: 'combo',
    title: 'Комбо услуги еще вкуснее',
    description: 'Выберите комплекс и получите скидку',
    image: '/images/combo.jpg',
    wide: true,
    tiers: [TIER_MASTER, TIER_TOP, TIER_PREMIUM],
    items: [
      { name: 'КОМБО: Ламинирование ресниц и бровей', duration: '2 ч 15 мин', prices: { master: '4 420 ₽' }, savings: 'Экономия 15%' },
      { name: 'КОМБО: Снятие + маникюр + педикю + гель лак', duration: '4 ч', prices: { premium: '7 520 ₽' }, savings: 'Экономия 6%' },
      { name: 'КОМБО: Снятие + маникюр + гель лак + наращивание ресниц 2D', duration: '4 ч', prices: { top: '6 570 ₽', premium: '6 570 ₽' }, savings: 'Экономия 10%' },
      { name: 'КОМБО: Архитектура + окрашивание бровей + депиляция губы', duration: '1 ч 20 мин', prices: { master: '1 848 ₽' }, savings: 'Экономия 12%' }
    ]
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
