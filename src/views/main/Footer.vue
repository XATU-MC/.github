<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {Paperclip, UserFilled, Comment} from "@element-plus/icons-vue";
</script>

<template>
  <div class="footer">
    <el-row>
      <el-col :span="5">
        <el-form>
          <el-form-item>
            <el-icon :size="20">
              <Paperclip/>
            </el-icon>
            <el-text class="title">链接</el-text>
          </el-form-item>
          <el-form-item>
            <el-link href="https://github.com/XATU-MC" target="_blank">GitHub</el-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="5">
        <el-form>
          <el-form-item>
            <el-icon :size="20">
              <Comment/>
            </el-icon>
            <el-text class="title">讨论</el-text>
          </el-form-item>
          <el-form-item>
            <el-link href="https://jq.qq.com/?_wv=1027&k=V4k8KV1d" target="_blank">QQ</el-link>
          </el-form-item>
          <el-form-item>
            <el-link href="https://kook.top/fZ8i52" target="_blank">KOOK</el-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <el-form>
          <el-form-item>
            <el-icon :size="20">
              <UserFilled/>
            </el-icon>
            <el-text class="title">友情链接</el-text>
          </el-form-item>
          <el-form-item>
            <el-link href="https://www.mualliance.cn/" target="_blank">中国Minecraft高校联盟</el-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8">
        <div class="info">
          <el-text>XATUCraft 保留所有权利</el-text>
          <br/>
          <el-divider/>
          <el-text>NOT AN OFFICIAL MINECRAFT ORGANIZATION.</el-text>
          <br/>
          <el-text>NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT</el-text>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.footer {
  margin: 15px;
}

.title {
  font-size: 20px;
}

.info {
  text-align: center;
}
</style>