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
  
<script setup>

</script>