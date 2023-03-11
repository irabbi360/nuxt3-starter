<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <h1 class="display-1 fw-bold" v-html="`${error?.statusCode}`"></h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
              The page you’re looking for doesn’t exist.
            </p>
            <button class="btn btn-primary" @click="handleError">Go Home</button>
        </div>
    </div>
</template>

<script setup>
// default props available on error.vue
const props = defineProps({
  error: Object,
});

const storedTheme = localStorage.getItem('theme');
const selectedTheme = ref(storedTheme);

onMounted(() => {
  if(selectedTheme.value === 'auto') {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', selectedTheme.value);
  }
})

// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || '404') {
  error.value.message = '[script]: Oops! Page not found 😔';
}



// clear error and redirect to home page
const handleError = () => clearError({ redirect: '/' });
</script>
