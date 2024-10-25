<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/admin">Admin</NuxtLink>
        </li>
        <li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb-item active text-capitalize" aria-current="page">{{ crumb.name }}</li>
      </ol>
    </nav>
  </div>
</template>

<script setup>
  const route = useRoute();
  const router = useRouter();
  const i18n = useI18n();

  const crumbs = computed(() => {
    const crumbs = []
    route.matched.forEach((item, i, { length }) => {
      const crumb = {}
      crumb.path = item.path
      crumb.name = item.name.substr(6)
      crumbs.push(crumb)
    })

    return crumbs
  })
</script>

<style scoped>

</style>