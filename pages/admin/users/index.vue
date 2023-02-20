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

const {users, getUsers} = useUser();

onMounted(async () => {
  await getUsers()
})

/*const {
  data: users,
  pending: fetchUsers,
  error: fetchUsersError,
    refresh,
} = useAsyncData('get-users', async () => {
  let response
  try {
    response = await getUsers()
  } catch (error){}
  return response;
})*/

</script>