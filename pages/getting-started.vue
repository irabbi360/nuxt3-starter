
<script setup>
</script>
<template>
    <div class="my-3">
        <h1>Getting Started</h1>
        <div>
            <div>
                <h5 id="create-a-new-project"><a href="#create-a-new-project">Create a new project</a></h5>
            </div>
            <div class="card">
                <div class="card-header">
                    <span class="badge bg-secondary">Git</span>
                </div>
                <div class="card-body">
                    <p><span class="dollar">$</span> <span class="cmnd"> git clone https://github.com/irabbi360/nuxt3-starter</span></p>
                </div>
            </div>
            <h4 class="my-3">Development</h4>
            <div class="card">
                <div class="card-header">
                    <span class="badge bg-secondary">yarn</span>
                </div>
                <div class="card-body">
                    <p>
                        <pre># install dependencies <br><span class="dollar">$</span><span class="cmnd"> yarn install</span></pre>
                        <pre># serve <br/><span class="dollar">$</span><span class="cmnd"> yarn dev</span></pre>
                    </p>
                </div>
            </div>
            <h4 class="my-3">Build as Static Site</h4>
            <div class="card">
                <div class="card-header">
                    <span class="badge bg-secondary">yarn</span>
                </div>
                <div class="card-body">
                    <p>
                        <pre># generate static files <br><span class="dollar">$</span><span class="cmnd"> yarn generate</span></pre>
                        <pre># serve <br/><span class="dollar">$</span><span class="cmnd"> yarn preview</span></pre>
                        <pre># or serve with "serve" <br/><span class="dollar">$</span><span class="cmnd"> npx serve ./dist/</span></pre>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dollar{
        color: #FFA657;
    }
    .cmnd{
        color: #A5D6FF;
    }
</style>
