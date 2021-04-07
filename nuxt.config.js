export default {
  ssr: false,

  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'Mlabs agendamento',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ],
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [],

  components: [{ path: '@/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],

  styleResources: {
    scss: './assets/scss/*.scss',
  },

  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          profile: {
            name: 'Alselmo Carlos',
          },
          page404: {
            text: 'Error 404 - Not found',
            buttonBack: 'Back home',
          },
        },
      },
    },
  },
  build: {},
}
