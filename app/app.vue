<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

const title = '9369Krasotanakryliach'
const description = 'lalalalalala'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://avatars.mds.yandex.net/get-altay/13604236/2a00000191b7c4a3a6a0649f0863da650c72/XXXL',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="bg-green-50 text-amber-900">
    <UApp>
      <UHeader
        :toggle="false"
        class="bg-gradient-to-r from-green-800/50 via-green-300/30 to-transparent border-b-0 shadow-none p-0"
      >
        <template #left>
          <NuxtLink
            to="/"
            class="text-2xl font-light text-amber-900 hover:text-amber-700 font-heading tracking-wide"
          >
            Красота на Крыльях
          </NuxtLink>
        </template>

        <template #right>
          <TemplateMenu />
        </template>
      </UHeader>

      <UMain>
        <NuxtPage />
      </UMain>
    </UApp>
  </div>
</template>
