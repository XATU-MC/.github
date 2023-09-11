<template>
  <el-header>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo dark"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        style="height: 60px"
    >
      <el-image :src="icon" fit="cover" style="height: 60px;width: 60px"/>
      <div class="flex-grow"/>
      <el-menu-item index="1">主页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>卫星地图</template>
        <el-menu-item index="2-1">原版服</el-menu-item>
        <el-menu-item index="2-2">建筑服</el-menu-item>
        <el-menu-item index="2-3">模组服</el-menu-item>
      </el-sub-menu>
      <el-link href="https://skin.mualliance.ltd/">
        <el-menu-item index="3">皮肤站</el-menu-item>
      </el-link>
    </el-menu>
  </el-header>
  <div>
    <MainPage v-if="activeIndex=='1'" :height="height"/>
    <iframe v-else-if="activeIndex=='2-1'" src="https://server.cjsah.net:8321" width="100%" :height="height"
            style="position: fixed"/>
    <iframe v-else-if="activeIndex=='3'" src="https://skin.mualliance.ltd" width="100%" :height="height"
            style="position: fixed"/>
    <NonePage v-else/>
  </div>
</template>

<script setup lang="ts">
import icon from "@/assets/icon.png";
import MainPage from "@/views/MainPage.vue";
import NonePage from "@/views/NonePage.vue";
import {ref} from "vue";

const height = ref(window.innerHeight - 60+"px");
const activeIndex = ref("1");

function handleSelect(key: string) {
  activeIndex.value = key;
}



</script>


<style scoped lang="scss">
</style>
