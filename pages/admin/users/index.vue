<template>
  <div>
    <h1>Users</h1>
    <pre>{{ users }}</pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
})

const users = await $fetch('https://jsonplaceholder.typicode.com/users');
</script>