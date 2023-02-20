<template>
  <div>
  <h1>Posts</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Post</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <th scope="row">{{ post.id }}</th>
        <td>{{ post.title }}</td>
        <td>{{ post.body.slice(0, 50) }}</td>
      </tr>
      </tbody>
    </table>
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