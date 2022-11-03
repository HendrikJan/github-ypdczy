process.env.TEST = 'Hellow';

import vuetify from 'vite-plugin-vuetify';
import * as dotenv from 'dotenv';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite';

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
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './lang/*.json'),
        ],
      }),
    ],
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
