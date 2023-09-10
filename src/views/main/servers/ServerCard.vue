<script setup lang="ts">
import {ref, Ref} from "vue";

const props = defineProps(['title', 'version', 'main', 'ip', 'type']);
const title: Ref<string> = ref(props.title);
const version: Ref<string> = ref(props.version);
const main: Ref<string> = ref(props.main);
const ip: Ref<string> = ref(props.ip);
const type: Ref<"mua" | "online" | "offline"> = ref(props.type);
</script>

<template>
  <el-card class="card">
    <template #header>
      <div class="card-header">
        <el-text class="card-header-text">{{ title }}</el-text>
      </div>
    </template>
    <el-form>
      <el-form-item label="游戏版本">
        <el-text>{{ version }}</el-text>
      </el-form-item>
      <el-form-item label="主要内容">
        <el-text>{{ main }}</el-text>
      </el-form-item>
      <el-form-item label="登录地址">
        <el-text>{{ ip }}</el-text>
      </el-form-item>
      <div v-if="type==='online'">
        <el-form-item label="登录方式">
          <el-text>正版登录</el-text>
        </el-form-item>
        <el-form-item label="购买地址">
          <el-link href="https://www.minecraft.net/zh-hans/store/minecraft-java-bedrock-edition-pc" target="_blank">点击跳转</el-link>
        </el-form-item>
      </div>
      <div v-else-if="type==='offline'">
        <el-form-item label="登录方式">
          <el-text>离线登录</el-text>
        </el-form-item>
      </div>
      <div v-else>
        <el-form-item label="登录方式">
          <el-text>第三方登录（MUA User Center）</el-text>
        </el-form-item>
        <el-form-item label="注册地址">
          <el-link href="https://skin.mualliance.ltd/auth/register-notice" target="_blank">点击跳转</el-link>
        </el-form-item>
        <el-form-item label="注册需求">
          <el-text>有效的edu邮箱或有效的学信网在线认证码</el-text>
        </el-form-item>
        <el-form-item label="登录教程">
          <el-link href="https://blessing.netlify.app/yggdrasil-api/authlib-injector.html" target="_blank">点击跳转</el-link>
        </el-form-item>
      </div>
    </el-form>
  </el-card>
</template>

<style scoped lang="scss">
.card {
  margin: 1px;
}

.card-header {
  text-align: center;
}

.card-header-text {
  font-size: 20px;
}
</style>