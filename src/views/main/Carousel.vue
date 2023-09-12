<script setup lang="ts">
import {ref} from "vue";

const pictures = ref(['p0000', 'p0001.png', 'p0002', 'p0003', 'p0004', 'p0005', 'p0006', 'p0007', 'p0008', 'p0009', 'p0010']);
</script>

<template>
  <el-carousel class="carousel" :interval="4000" type="card" height="400px" arrow="never" indicator-position="none">
    <el-carousel-item v-for="picture in pictures" :key="picture">
      <el-image :src="`https://gitee.com/xatumc/.gitee/raw/main/src/assets/carousel/${picture}.png`"
                style="height: 400px;"/>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
.carousel {
  margin: 15px;
}
</style>