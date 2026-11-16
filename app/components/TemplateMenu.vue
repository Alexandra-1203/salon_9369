<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'Услуги',
      to: '#services'
    }, {
      type: 'separator'
    }, {
      label: 'О нас',
      to: '#about'
    }, {
      type: 'separator'
    }, {
      label: 'Отзывы',
      to: '#reviews'
    }, {
      type: 'separator'
    }, {
      label: 'Контакты',
      to: '#contacts'
    }, {
      type: 'separator'
    }, {
      label: 'Промокод',
      to: '#promo'
    }, {
      type: 'separator'
    }, {
      label: 'Записаться',
      to: 'https://n1163753.yclients.com/',
      target: '_blank'
    }]"
    :content="{ align: 'start' }"
    :ui="{
      content: 'min-w-[320px] p-2 bg-gradient-to-r from-green-900/70 via-green-700/60 to-green-600/50 shadow-xl',
      item: 'py-4 px-6 rounded-xl transition-colors',
      label: 'text-2xl font-semibold',
      separator: 'my-2 border-amber-900/15 border-t'
    }"
    size="xs"
  >
    <UButton
      icon="i-lucide-menu"
      variant="ghost"
      size="xl"
      class="text-amber-900 hover:text-amber-700 hover:bg-transparent border-none"
    />
  </UDropdownMenu>
</template>

<style>
[role="menuitem"] {
  color: #ffffff !important;
  transition: color 0.2s ease, background-color 0.2s ease;
}

[role="menuitem"]:hover {
  color: #78350f !important;
  background-color: rgba(220, 252, 231, 0.6) !important;
}

[role="menuitem"] span,
[role="menuitem"] * {
  color: inherit !important;
}
</style>
