// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  devtools: { enabled: true },
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css'
    
  ],
  modules: ['@nuxtjs/tailwindcss']
})
