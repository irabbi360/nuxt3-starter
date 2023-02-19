<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

</script>

<template>
  <li class="nav-item dropdown">
    <a class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center text-capitalize"
            id="lang-change"
            aria-expanded="false"
            data-bs-toggle="dropdown"
            data-bs-display="static">
            <svg viewBox="0 0 32 32" width="1.2em" height="1.2em"><path fill="currentColor" d="M4 4v18h6v6h18V10h-6V4zm2 2h14v4.563L10.562 20H6zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.544 4.544 0 0 1-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.267 8.267 0 0 1 8 15v2c1.773 0 3.25-.406 4.375-1.156c.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8zm10.438 4H26v14H12v-4.563zM20 13.844l-.938 2.844l-2 6l-.062.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.063-.157l-2-6zm0 6.281l.281.875h-.562z"></path></svg>
            {{ locale }}
    </a>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="lang-change"
            style="--bs-dropdown-min-width: 8rem;">
      <li class="nav-item">
        <button type="button" v-for="locale in availableLocales" :key="locale.code" class="dropdown-item d-flex align-items-center" @click.preventg="setLocale(locale.code)">
          {{ locale.name }}
        </button>
      </li>
    </ul>
  </li>
</template>

<style scoped>
  .bi {
    width: 1em;
    height: 1em;
    vertical-align: -.125em;
    fill: currentcolor;
  }
</style>