<template>
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="~/assets/images/nuxt-logo.svg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">{{  $t('welcome') }}</h1>
          <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://nuxt.com" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Nuxt</a>
            <a href="https://github.com/irabbi360/nuxt3-starter" target="_blank" class="btn btn-outline-secondary btn-lg px-4">Github</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
</script>

<style>

</style>