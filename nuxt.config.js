export default {
  ssr: false,

  server: {
    host: '0.0.0.0',
  },

  head: {
    title: 'Vough Leads',
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
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap',
      },
    ],
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module'],

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
          home: {
            button: 'See Leads',
          },
          leads: {
            noResults: 'No results...',
            searchText: 'Search',
          },
          page404: {
            text: 'Error 404 - Not found',
            buttonBack: 'Back home',
          },
          modal: {
            profile: 'Profile',
            name: 'Name',
            userName: 'Username',
            email: 'E-mail',
            address: 'Address',
            phone: 'Phone',
            website: 'Website',
            company: 'Company',
            catchPhrase: 'Catch Phrase',
            category: 'Category',
          },
        },
      },
    },
  },
  build: {},
}
