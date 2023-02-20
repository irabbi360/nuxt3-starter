// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_URL
        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Nuxt 3 Starter Template',
            meta: [
                // <meta name="description" content="My amazing site">
                {name: 'description', content: 'Nuxt 3 Starter'}
            ],
        }
    },
    ssr: process.env.NODE_ENV !== "development",

    css: ['~/assets/scss/style.scss', '~/assets/css/dashboard.css'],

    plugins: [
        {
            src: 'plugins/bootstrap.js',
            mode: 'client'
        }
    ],
    components: {global: true, dirs: ['~/components']},
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        strategy: 'no_prefix',
        vueI18n: {
            legacy: false,
            locale: 'en',
        },
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en-US.json'
            },
            {
                code: 'es',
                name: 'Español',
                file: 'es-ES.json'
            },
            {
                code: 'fr',
                name: 'Français',
                file: 'fr-FR.json'
            },
            {
                code: 'Ja',
                name: '日本人',
                file: 'ja-JA.json'
            }
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en'
    }
})
