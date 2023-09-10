<script setup lang="ts">
import {Ref, ref} from "vue";
import Carousel from "@/views/main/Carousel.vue";
import AboutUS from "@/views/main/AboutUS.vue";
import ServerNotice from "@/views/main/ServerNotice.vue";
import Footer from "@/views/main/Footer.vue";

const props = defineProps(['height']);
const height: Ref<() => number> = ref(props.height);
</script>

<template>
  <el-scrollbar :height="height()">
    <Carousel/>
    <AboutUS/>
    <ServerNotice/>
    <el-divider/>
    <Footer/>
  </el-scrollbar>
</template>

<style scoped lang="scss">
</style>