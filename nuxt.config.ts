// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ["@/assets/css/tailwind.css"],
  app: {
    head: {
      title: 'Game List',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://fe-test-api.midassoft.dev',
    },
  },
})
