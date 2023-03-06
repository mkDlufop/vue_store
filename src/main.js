import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@/mock/mockServer'

import * as API from '@/api'

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
