export default defineNuxtPlugin(() => {
    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Nuxt 3 Starter` : 'Nuxt 3 Starter'
        }
    })
})