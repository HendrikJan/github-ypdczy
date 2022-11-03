process.env.TEST = 'Hellow';

import vuetify from 'vite-plugin-vuetify';
import * as dotenv from 'dotenv';

dotenv.config({ path: './xenv' });

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    // @ts-ignore
    ssr: false,
  },
  modules: [
    // @ts-ignore
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify());
      });
    },
  ],
  runtimeConfig: {
    public: {
      testy: process.env.TEST,
      blahy: process.env.BLAH,
    },
  },
});
