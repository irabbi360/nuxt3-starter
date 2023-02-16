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
    modules: ['@nuxtjs/color-mode']
})
