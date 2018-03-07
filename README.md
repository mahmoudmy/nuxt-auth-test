# coridor-frontend-nuxt

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

### axios module:
Environment variable API_URL can be used to override baseURL.
Environment variable API_URL_BROWSER can be used to override browserBaseURL.
Put these varables in a `.env` file in local development and set in Jenkins config.