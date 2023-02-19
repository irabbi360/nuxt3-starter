<template>
  <div>
  <h1>Posts</h1>
  <pre>{{ posts }}</pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
})

const config = useRuntimeConfig();

const posts = await $fetch('/posts', {baseURL: config.public.API_URL});

</script>