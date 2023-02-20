<template>
  <div>
  <h1>Posts</h1>
  <pre>{{ posts }}</pre>
  </div>
</template>

<script setup>
import {usePosts} from "../../../composables/posts";

definePageMeta({
  layout: 'admin',
})

const {posts, getPosts } = usePosts();

onMounted(async () => {
  await getPosts()
})

</script>