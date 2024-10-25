<script setup lang="ts">
import {useAuthStore} from "~/store/auth";

const authStore = useAuthStore();
authStore.hydrate();

// export default defineNuxtPlugin((nuxtApp) => {
//   const authStore = useAuthStore();
//   authStore.hydrate();
// });
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <div class="container">
      <NuxtPage/>
    </div>
  </NuxtLayout>
</template>
