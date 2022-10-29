process.env.TEST = "Hellow"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
runtimeConfig : {
  public: {
    testy: process.env.TEST 
  }
}
})
