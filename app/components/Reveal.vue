<template>
  <component
    :is="tag"
    ref="el"
    :style="style"
  >
    <slot />
  </component>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 }, // задержка в мс
  y: { type: Number, default: 24 }, // сдвиг по вертикали в px
  tag: { type: String, default: 'div' } // какой тег рендерить
})

const el = ref(null)
const visible = ref(false)

const style = computed(() => ({
  opacity: visible.value ? 1 : 0,
  transform: visible.value ? 'translateY(0)' : `translateY(${props.y}px)`,
  transition: `opacity 0.7s ease ${props.delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${props.delay}ms`,
  willChange: visible.value ? 'auto' : 'opacity, transform'
}))

onMounted(() => {
  if (!el.value) return

  // Если элемент уже виден при загрузке — показываем сразу
  const rect = el.value.getBoundingClientRect()
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    requestAnimationFrame(() => { visible.value = true })
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )
  observer.observe(el.value)
})
</script>
