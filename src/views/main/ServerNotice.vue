<script setup lang="ts">
import ServerCard from "@/views/main/servers/ServerCard.vue";

class Server {
  public readonly name: string;
  public readonly version: string;
  public readonly main: string;
  public readonly ip: string;
  public readonly type: 'mua' | 'online' | 'offline';

  public constructor(name: string, version: string, main: string, ip: string, type: 'mua' | 'online' | 'offline') {
    this.name = name;
    this.version = version;
    this.main = main;
    this.ip = ip;
    this.type = type;
  }
}

const alertTitle = "申请开通个人邮箱业务的，只需将开通用户的个人身份证正面、校园卡正面及手机号码一并发送到xsmaster@xatu.edu.cn邮箱，系统管理员审核通过后，再经邮件反馈开通信息";
const servers: Server[] = [
  new Server("生存服", "1.20.1", "原版生电", "vanilla.xatumc.top", "mua"),
  new Server("建筑服", "1.20.1", "机械动力", "server.xatumc.top", "mua"),
  new Server("模组服", "1.19.3", "复原学校", "build.xatumc.top", "mua"),
];
</script>

<template>
  <el-card class="card">
    <template #header>
      <div class="card-header">
        <el-text class="card-header-text">服务器公告</el-text>
      </div>
    </template>
    <el-alert :title="alertTitle" type="warning" :closable="false"/>
    <el-row justify="space-between">
      <el-col :span="Math.floor(24/servers.length)" v-for="server in servers">
        <ServerCard :title="server.name" :version="server.version" :main="server.main" :ip="server.ip"
                    :type="server.type"/>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped lang="scss">
.card {
  margin: 15px;
}

.card-header {
  text-align: center;
}

.card-header-text {
  font-size: 30px;
}
</style>