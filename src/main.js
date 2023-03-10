import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@/mock/mockServer'

import * as API from '@/api'

import { MessageBox } from 'element-ui';
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import loadimage from "@/assets/loading.gif";
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  loading: loadimage,
})

Vue.config.productionTip = false

new Vue({
  router, // 注册路由
  store,
  // 安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  render: h => h(App),
}).$mount('#app')
