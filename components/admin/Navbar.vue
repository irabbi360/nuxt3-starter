<template>
  <header class="admin navbar bg-body-tertiary sticky-top flex-md-nowrap p-0 shadow-sm admin">
    <NuxtLink to="/admin" class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
      <!-- SVG icon here -->
      Nuxt3 Starter
    </NuxtLink>
    <button class="navbar-toggler d-md-none collapsed me-4" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <NuxtLink to="/" class="nav-link px-3">Home</NuxtLink>
      </div>
    </div>
    <div class="dropdown me-3">
      <a href="javascript:void(0)" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Mr Admin
      </a>
      <ul class="dropdown-menu dropdown-menu-md-end border-0 shadow-lg rounded-0">
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Change Password</a></li>
        <li><hr class="dropdown-divider"></li>
        <li>
          <a href="javascript:void(0)" class="dropdown-item" @click="logout">Logout</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';

const router = useRouter();
const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());
const selectedTheme = ref('dark');

const logout = () => {
  logUserOut();
  router.push('/auth/login');
};

// Safely access localStorage in client-only code
const getPreferredTheme = () => {
  if (process.client) {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  return 'dark';
};

const setTheme = (theme) => {
  if (process.client) {
    document.documentElement.setAttribute('data-bs-theme', theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : theme);
    selectedTheme.value = theme;
    localStorage.setItem('theme', theme);
  }
};

// Theme setup and cleanup in client-only mounted lifecycle
onMounted(() => {
  setTheme(getPreferredTheme());

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const themeListener = () => {
    if (!['light', 'dark'].includes(selectedTheme.value)) {
      setTheme(getPreferredTheme());
    }
  };
  mediaQuery.addEventListener('change', themeListener);

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', themeListener);
  });
});

</script>

<style scoped>

</style>
