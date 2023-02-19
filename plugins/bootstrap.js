import * as bootsrtap from "bootstrap";

export default defineNuxtPlugin(nuxtApp => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide('bootstrap', () => bootstrap)
  // You can alternatively use this format, which comes with automatic type support
  // return {
  //   provide: {
  //     injected: () => bootsrtap
  //   }
  // }
  // onBeforeLanguageSwitch called right before setting a new locale
  nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, nuxtApp) => {
    console.log('onBeforeLanguageSwitch', oldLocale, newLocale, isInitialSetup)
  }
  // onLanguageSwitched called right after a new locale has been set
  nuxtApp.$i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log('onLanguageSwitched', oldLocale, newLocale)
  }
})