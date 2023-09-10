import { createApp, provide } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import 'reflect-metadata';
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import * as echarts from "echarts";
import 'element-plus/theme-chalk/dark/css-vars.css'

// localStorage.setItem("dept", "1")
// localStorage.setItem("empType", "1")
// localStorage.setItem("permission", "1023")

createApp(App).use(ElementPlus, {locale:zhCn}).mount("#app");
provide("echarts", echarts);
