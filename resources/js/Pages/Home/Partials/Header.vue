<script setup>
    import { NCarousel } from 'naive-ui';
</script>

<template>
    <header>
        <n-carousel autoplay>
            <img
            class="carousel-img"
            src="/img/Dummy/Slider/ilustrasi1.jpeg"
            >
            <img
            class="carousel-img"
            src="/img/Dummy/Slider/ilustrasi2.jpeg"
            >
            <img
            class="carousel-img"
            src="/img/Dummy/Slider/ilustrasi3.jpeg"
            >
            <img
            class="carousel-img"
            src="/img/Dummy/Slider/ilustrasi4.jpeg"
            >
        </n-carousel>
    </header>
</template>

<style scoped lang="scss">
    .n-carousel{
        max-width: 1024px;
        max-height: 375px;
        margin: auto;
        margin-top: 90px;
        aspect-ratio: 8 / 3;
        .carousel-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
</style>
