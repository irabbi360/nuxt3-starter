export const useUser = () => {
    const uri = "https://jsonplaceholder.typicode.com";

    const users = ref([]);

    const getUsers = async () => {
        users.value = await $fetch('/users', {
            baseURL: uri,
            method: 'get'
        })

        return users;
    }

    return { users, getUsers }
}