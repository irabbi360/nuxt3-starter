<template>
    <div class="container content-space-3 content-space-t-lg-4 content-space-b-lg-3">
      <div class="card card-body flex-grow-1 mx-auto border-0 shadow-sm" style="max-width: 28rem;">
        <!-- Heading -->
        <div class="text-center mb-5 mb-md-7">
          <h1 class="h2">Welcome back</h1>
          <p>Login to manage your account.</p>
        </div>
        <!-- End Heading -->

        <!-- Form -->
        <form class="js-validate needs-validation">
          <!-- Form -->
          <div class="mb-4">
            <label class="form-label" for="signupSimpleLoginEmail">Your email</label>
            <input type="email" class="form-control form-control-lg" name="email" id="signupSimpleLoginEmail" placeholder="email@site.com" aria-label="email@site.com">
            <span class="invalid-feedback">Please enter a valid email address.</span>
          </div>
          <!-- End Form -->

          <!-- Form -->
          <div class="mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <label class="form-label" for="signupSimpleLoginPassword">Password</label>

              <a class="form-label-link" href="#">Forgot Password?</a>
            </div>

            <div class="input-group input-group-merge" data-hs-validation-validate-class="">
              <input type="password" class="js-toggle-password form-control form-control-lg" name="password" id="signupSimpleLoginPassword" placeholder="8+ characters required" aria-label="8+ characters required" minlength="8">
              <a id="changePassTarget" class="input-group-append input-group-text" href="javascript:;">
                <i id="changePassIcon" class="bi-eye-slash"></i>
              </a>
            </div>

            <span class="invalid-feedback">Please enter a valid password.</span>
          </div>
          <!-- End Form -->

          <div class="d-grid mb-3">
            <button type="submit" class="btn btn-primary btn-lg" @click.prevent="authLogin">Log in</button>
          </div>

          <div class="text-center">
            <p>Don't have an account yet? <a class="link" href="./page-signup-simple.html">Sign up here</a></p>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const authLogin = () => {
  router.push('/admin')
}
</script>