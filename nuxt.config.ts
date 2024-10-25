// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_URL,
            APP_BASE_URL: process.env.APP_URL,
        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Nuxt 3 Starter Template',
            // titleTemplate: '%s %separator %siteName',
            meta: [
                // <meta name="description" content="My amazing site">
                {name: 'description', content: 'Nuxt 3 Starter'},
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Nuxt 3 Starter' },
                { property: 'twitter:card', content: 'summary' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
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
        '@nuxt/image',
        '@nuxtjs/robots',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
    ],
    i18n: {
        vueI18n: './lib/i18n.config.ts',
        strategy: 'no_prefix',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en-US.json'
            },
            {
                code: 'bn',
                name: 'Bangla',
                file: 'bn-BD.json'
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
        langDir: 'lang',
        defaultLocale: 'en'
    }
})
