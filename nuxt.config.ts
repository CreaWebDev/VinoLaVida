// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets", // lillekunstner med??
    public: "/<rootDir>/public"
  },

  modules: [
    '@vesp/nuxt-fontawesome',
    'nuxt-anchorscroll',
    '@nuxt/content'
  ],

  fontawesome: {
    // icons: {
    //   brands: ['github']
    // }
  },
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