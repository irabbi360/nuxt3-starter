<template>
  <div>
    <h1>Users</h1>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
      </tr>
      </tbody>
    </table>
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