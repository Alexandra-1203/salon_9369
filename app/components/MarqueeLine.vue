<template>
  <section class="relative w-full py-6 overflow-hidden select-none">
    <div class="marquee">
      <div class="marquee__track">
        <span class="marquee__text text-green-500">Ты красотка ✦ Ты красотка ✦ Ты красотка ✦ Ты красотка ✦ Ты красотка ✦&nbsp;</span>
        <span class="marquee__text text-green-500" aria-hidden="true">Ты красотка ✦ Ты красотка ✦ Ты красотка ✦ Ты красотка ✦ Ты красотка ✦&nbsp;</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  display: flex;
  overflow: hidden;
  width: 100%;
}
.marquee__track {
  display: flex;
  flex-shrink: 0;
  white-space: nowrap;
  animation: marquee-scroll 20s linear infinite;
  will-change: transform;
}
.marquee__text {
  font-family: inherit;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  padding-right: 1rem;
  text-transform: uppercase;
}
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>