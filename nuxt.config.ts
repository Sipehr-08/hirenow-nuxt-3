// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.css', '@/assets/css/style.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  ssr: true,
  imports: {
    dirs: ['stores'],
  },
  runtimeConfig: {},
})
