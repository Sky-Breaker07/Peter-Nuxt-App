// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})

