// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
    public: "/<rootDir>/public"
  },

  modules: [
    '@vesp/nuxt-fontawesome',
    'nuxt-anchorscroll',
    '@nuxt/content',
    "@nuxt/image",
    '@pinia/nuxt'
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,
  compatibilityDate: '2024-07-05'
})