require('dotenv').config()

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      dir: 'rtl'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },

  /*
   ** Global CSS
   */
  css: ['uikit/dist/css/uikit-rtl.css'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
  },

}