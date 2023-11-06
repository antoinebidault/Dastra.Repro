// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/**": { isr: true },
    "/api/**": { isr: true }
  }
})
