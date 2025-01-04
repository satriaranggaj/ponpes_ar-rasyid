<script setup>
 import Navbar from '@/Components/Landing/Navbar.vue';
 import { NConfigProvider } from 'naive-ui';

 const themeOverrides = {
    Button: {
      colorPrimary: '#02544d',
      colorHoverPrimary: '#037C72',
      colorPressedPrimary: '#037C72',
      colorFocusPrimary: '#037C72',
      borderPrimary: '1px solid #02544d',
      borderHoverPrimary: '1px solid #037C72',
      borderPressedPrimary: '1px solid #037C72',
      borderFocusPrimary: '1px solid #037C72',
    },
  }


</script>
<template>
    <NConfigProvider :theme-overrides="themeOverrides">
        <Navbar/>
        <slot />
    </NConfigProvider>
</template>
