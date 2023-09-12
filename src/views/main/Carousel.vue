<script setup lang="ts">
import {ref} from "vue";

const pictures = ref([
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054553vhzfmzeya34mc8fq.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054555wjspd7du6efpfm56.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054558q6f3fntnnxltzdti.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054601jiktnlk4akoqkqol.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054604ws8f3430833ezk7u.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054606pt6hreb4au14saft.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054608karkeve1i7z0v271.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054611d8wiqibqpq3snbng.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054613onmptpkx5nnlxunp.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054616zesl337bcyicspt8.png',
  'https://attachment.mcbbs.net/data/myattachment/forum/202309/13/054618esf00bttzzqatcto.png'
]);
</script>

<template>
  <el-carousel class="carousel" :interval="4000" height="27vw" type="card" arrow="never" indicator-position="none">
    <el-carousel-item v-for="picture in pictures" :key="picture">
      <el-image :src="picture" fit="contain"/>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
.carousel {
  margin: 15px;
}
</style>