export const usePosts = () => {
    const uri = "https://jsonplaceholder.typicode.com";

    const posts = ref([]);

    const getPosts = async () => {
        posts.value = await $fetch(`/posts`, {
            method: 'get',
            baseURL: uri
        })

        return posts
    }

    return { posts, getPosts }
}