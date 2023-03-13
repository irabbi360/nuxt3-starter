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
      <tr v-for="post in postItems" :key="post.id">
        <th scope="row">{{ post.id }}</th>
        <td>{{ post.title }}</td>
        <td>{{ post.body.slice(0, 50) }}</td>
      </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="[currentPage === 1 ? 'disabled' : '']">
          <a class="page-link" href="javascript:void (0)" @click.prevent="previousPage">Previous</a>
        </li>
        <li v-if="currentPage - 2 > 0" class="page-item">
          <a class="page-link" href="javascript:void (0)" @click.prevent="onPageChange(currentPage - 2)">{{ currentPage - 2 }}</a>
        </li>
        <li v-if="currentPage - 1 > 0" class="page-item">
          <a class="page-link" href="javascript:void (0)" @click.prevent="onPageChange(currentPage - 1)">{{ currentPage - 1 }}</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="javascript:void(0)">{{ currentPage }}</a>
        </li>
        <li v-if="currentPage + 1 <= Math.ceil(totalItem / parPage)" class="page-item">
          <a class="page-link" href="javascript:void (0)" @click.prevent="onPageChange(currentPage + 1)">{{ currentPage + 1 }}</a>
        </li>
        <li v-if="currentPage + 2 <= Math.ceil(totalItem / parPage)" class="page-item">
          <a class="page-link" href="javascript:void (0)" @click.prevent="onPageChange(currentPage + 2)">{{ currentPage + 2 }}</a>
        </li>
        <li v-if="currentPage + 3 <= Math.ceil(totalItem / parPage)" class="page-item">
          <a class="page-link" href="javascript:void (0)" @click.prevent="onPageChange(currentPage + 3)">{{ currentPage + 3 }}</a>
        </li>
        <li class="page-item" :class="[currentPage === Math.ceil(totalItem / parPage) ? 'disabled' : '']">
          <a class="page-link" href="javascript:void (0)" @click.prevent="nextPage">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin',
})
import {usePosts} from "~/composables/posts";

const {posts, getPosts } = usePosts();
const currentPage = ref(1);
const parPage = ref(15);

onMounted(async () => {
  await getPosts()
})

const indexStart = computed(() => (currentPage.value - 1) * parPage.value);
const indexEnd = computed(() => indexStart.value + parPage.value);
const postItems = computed(() => posts.value.slice(indexStart.value, indexEnd.value));
const totalItem = computed(() => (posts.value.length));

const onPageChange = (page) => {
    currentPage.value = page;
}

const nextPage = () => {
  if (postItems.value >= currentPage.value) {
    currentPage.value++;
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

</script>