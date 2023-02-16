// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Nuxt 3 Starter Template',
            meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'Nuxt 3 Starter' }
            ],
        }
    },
    ssr: process.env.NODE_ENV !== "development",
    css: ['~/assets/scss/style.scss'],
    plugins: [
        {
          src: 'plugins/bootstrap.js',
          mode: 'client'
        }
    ],
    components: { global: true, dirs: ['~/components'] },
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '-mode',
        storageKey: 'nuxt-color-mode'
      }
})
