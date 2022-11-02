process.env.TEST = "Hellow"

import vuetify from 'vite-plugin-vuetify';
import * as dotenv  from "dotenv";

dotenv.config({path: "./xenv"})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
runtimeConfig : {
  public: {
    testy: process.env.TEST,
    blahy: process.env.BLAH,
  }
}
})
