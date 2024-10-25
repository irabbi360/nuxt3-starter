export const useSeo = () => {
    const config = useRuntimeConfig().public;
    const route = useRoute();
    const appUrl = config.APP_BASE_URL;

    const updateMeta = (metadata: {
        title?: string
        description?: string
        image?: string
        url?: string
        type?: string
    }) => {
        useHead({
            title: metadata.title,
            link: [
                {rel: 'canonical', href: `${appUrl + route.path}`}
            ],
            meta: [
                {name: 'description', content: metadata.description},
                // Open Graph
                {property: 'og:title', content: metadata.title},
                {property: 'og:description', content: metadata.description},
                {property: 'og:image', content: metadata.image ?? `${appUrl}/nuxt-logo.svg`},
                {property: 'og:url', content: appUrl + route.path},
                {property: 'og:type', content: metadata.type || 'website'},
                // Twitter
                {name: 'twitter:card', content: 'summary'},
                {name: 'twitter:title', content: metadata.title},
                {name: 'twitter:description', content: metadata.description},
                {name: 'twitter:image', content: metadata.image ?? `${appUrl}/nuxt-logo.svg`},
                {name: 'twitter:url', content: appUrl + route.path}
            ].filter(meta => meta.content) // Only include meta tags with content
        })
    }

    return {
        updateMeta
    }
}