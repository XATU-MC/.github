<script setup lang="ts">

</script>

<template>
  <el-row class="el-row-custom" justify="center">
    <el-card class="el-card-custom">
      <el-text class="el-text-custom" type="danger">此页面不存在！</el-text>
    </el-card>
  </el-row>
</template>

<style scoped lang="scss">
.el-row-custom {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-card-custom {
  width: 320px;
  height: 180px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-text-custom {
  width: 100%;
  font-size: 40px;
}
</style>