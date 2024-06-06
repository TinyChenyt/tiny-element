import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import './mock/mock.js';

import Particles from 'vue3-particles';

import router from './router';

const app = createApp(App);

app.use(router);

app.use(ElementPlus, {
  locale: zhCn
});

app.use(Particles);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount('#app');
