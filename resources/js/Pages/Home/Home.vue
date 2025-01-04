<script setup>
    import LandingLayout from '@/Layouts/LandingLayout.vue';
    import {Head} from '@inertiajs/vue3';

    import Header from '@/Pages/Home/Partials/Header.vue';
    import Statement from '@/Pages/Home/Partials/Statment.vue';
    import About from '@/Pages/Home/Partials/About.vue';
</script>
<template>
    <Head title="Home" />
    <LandingLayout>
        <Header/>
        <main>
            <Statement/>
            <About/>
        </main>
    </LandingLayout>
</template>
<style scoped lang="scss">
    h1{
        color: black;
    }
</style>
