import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import '@/mock/mockServer'

Vue.config.productionTip = false

new Vue({
  router, // 注册路由
  store,
  render: h => h(App),
}).$mount('#app')
