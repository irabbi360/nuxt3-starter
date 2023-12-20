<template>
    <div>
        <slot name="header">
            <AdminNavbar/>
        </slot>
        <div class="container-fluid">
            <div class="row">
                <AdminSidebarMenu/>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <Breadcrumbs/>
                    </div>
                    <slot />
                </main>
            </div>
        </div>
    </div>
  </template>
  
<script lang="ts" setup>
  import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
  import { useAuthStore } from '~/store/auth'; // import the auth store we just created
  
  const router = useRouter();
  
  
  const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
  
  const logout = () => {
    logUserOut();
    router.push('/login');
  };
</script>