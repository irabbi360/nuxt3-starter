import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      this.loading = true;
      try {
        const data: any = await $fetch('https://dummyjson.com/auth/login', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: {
            username,
            password,
          },
        });

        if (data) {
          const token = useCookie('token'); // useCookie new hook in nuxt 3
          token.value = data.accessToken; // set token to cookie
          this.authenticated = true; // set authenticated state to true
        }
      } finally {
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated state to false
      token.value = null; // clear the token cookie
    },
  },
});
