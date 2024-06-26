// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    ssr: process.env.NODE_ENV !== "development",
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
        '@pinia/nuxt',
    ],
    i18n: {
        vueI18n: './lib/i18n.config.ts',
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
