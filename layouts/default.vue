<template>
    <div>
        <Navbar/>
        <slot />
    </div>
  </template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
  import { useAuthStore } from '~/store/auth'; // import the auth store we just created
  
  const router = useRouter();
  
  
  const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
  
  const logout = () => {
    logUserOut();
    router.push('/login');
  };
</script>