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
          
          <div class="mb-3">
            <label class="form-label" for="name">Your Name</label>
            <input type="text" class="form-control form-control-lg" name="name" id="name" placeholder="Jhon Deo" aria-label="Jhon Deo">
            <span class="invalid-feedback">Please enter a valid name.</span>
          </div>
          <div class="mb-3">
            <label class="form-label" for="signupSimpleSignupEmail">Your email</label>
            <input type="email" class="form-control form-control-lg" name="email" id="signupSimpleSignupEmail" placeholder="email@site.com" aria-label="email@site.com" required="">
            <span class="invalid-feedback">Please enter a valid email address.</span>
          </div>
          <!-- End Form -->

          <!-- Form -->
          <div class="mb-3">
            <label class="form-label" for="signupSimpleSignupPassword">Password</label>

            <div class="input-group input-group-merge">
              <input type="password" class="js-toggle-password form-control form-control-lg" name="password" id="signupSimpleSignupPassword" placeholder="8+ characters required" aria-label="8+ characters required">
              <a class="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                <i class="js-toggle-passowrd-show-icon-1 bi-eye-slash"></i>
              </a>
            </div>

            <span class="invalid-feedback">Your password is invalid. Please try again.</span>
          </div>
          <!-- End Form -->

          <!-- Form -->
          <div class="mb-3">
            <label class="form-label" for="signupSimpleSignupConfirmPassword">Confirm password</label>

            <div class="input-group input-group-merge">
              <input type="password" class="js-toggle-password form-control form-control-lg" name="confirmPassword" id="signupSimpleSignupConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required">
              <a class="js-toggle-password-target-2 input-group-append input-group-text" href="javascript:;">
                <i class="js-toggle-passowrd-show-icon-2 bi-eye-slash"></i>
              </a>
            </div>

            <span class="invalid-feedback">Password does not match the confirm password.</span>
          </div>
          <!-- End Form -->

          <!-- Check -->
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="signupHeroFormPrivacyCheck" name="signupFormPrivacyCheck">
            <label class="form-check-label small" for="signupHeroFormPrivacyCheck"> By submitting this form I have read and acknowledged the <a href="./page-privacy.html">Privacy Policy</a></label>
            <span class="invalid-feedback">Please accept our Privacy Policy.</span>
          </div>
          <!-- End Check -->

          <div class="d-grid mb-3">
            <button type="submit" class="btn btn-primary btn-lg" @click.prevent="authRegister">Register</button>
          </div>

          <div class="text-center">
            <p>Already have an account? <NuxtLink to="/auth/login" class="link">Log in here</NuxtLink></p>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const authRegister = () => {
  router.push('/admin');
}
</script>