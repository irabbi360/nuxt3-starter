<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="inline-block mr-2 text-lg text-primary-500"><path fill="currentColor" d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513l-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"></path></svg>
        Nuxt 3 Starter
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
              aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <NuxtLink to="/getting-started" class="nav-link">Getting Started</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/blank" class="nav-link">Blank</NuxtLink>
          </li>
          <ThemeChanger />
          <LangSwitcher />
          <li class="nav-item">
            <NuxtLink to="/auth/login" class="nav-link">Login</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/auth/register" class="nav-link">Register</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { localePath } from 'vue-i18n-routing';

</script>

<style scoped>
.navbar-brand svg {
  color: rgba(59,166,118);
}
</style>