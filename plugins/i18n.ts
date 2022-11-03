import { createI18n } from 'vue-i18n';
import en from '../lang/en.json';
import nl from '../lang/nl.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      nl,
    },
  });

  vueApp.use(i18n);
});
