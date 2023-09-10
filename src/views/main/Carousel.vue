<script setup lang="ts">
import {ref} from "vue";
const pictures = ref(['p0000', 'p0001', 'p0002']);
</script>

<template>
  <el-carousel class="carousel" :interval="4000" type="card" height="400px" arrow="never" indicator-position="none">
    <el-carousel-item v-for="picture in pictures" :key="picture">
      <el-image :src="`https://raw.githubusercontent.com/XATU-MC/.github/main/src/assets/carousel/${picture}.png`"/>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
.carousel{
  margin: 15px;
}
</style>