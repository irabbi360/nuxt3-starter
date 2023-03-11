<template>
  <header class="admin navbar bg-body-tertiary sticky-top flex-md-nowrap p-0 shadow-sm">
    <NuxtLink to="/admin" class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
      <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="inline-block mr-2 text-lg text-primary-500"><path fill="currentColor" d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513l-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"></path></svg>
      Nuxt3 Stater
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
            <NuxtLink to="/" class="dropdown-item">
                Logout
            </NuxtLink>
          </li>
      </ul>
    </div>
</header>
</template>

<script setup>
const storedTheme = localStorage.getItem('theme');
const selectedTheme = ref(storedTheme ?? 'dark');

onMounted(() => {
  setTheme(getPreferredTheme())
})

const getPreferredTheme = () => {
  if (storedTheme) {
    return storedTheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const changeAppTheme = (theme) => {
  setTheme(theme)
  selectedTheme.value = theme

  localStorage.setItem('theme', theme)
  setTheme(theme)
  showActiveTheme(theme)
}

const setTheme = (theme) => {
  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
}

const showActiveTheme = theme => {
  const activeThemeIcon = document.querySelector('.theme-icon-active use')
  const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
  const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.classList.remove('active')
  })

  btnToActive.classList.add('active')
  activeThemeIcon.setAttribute('href', svgOfActiveBtn)
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (storedTheme !== 'light' || storedTheme !== 'dark') {
    setTheme(getPreferredTheme())
  }
})

</script>

<style scoped>
.bi {
  width: 1em;
  height: 1em;
  vertical-align: -.125em;
  fill: currentcolor;
}
.navbar-brand svg {
  color: rgba(59,166,118);
}
</style>