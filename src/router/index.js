import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'

// 重写push和replace方法
// 解决以下问题：
//    编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误。
let originPush = VueRouter.prototype.push;
// location用来指定往哪跳，resolve是成功回调，reject是失败回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call()和apply()的区别
    // 相同点：都可以调用函数一次，都可以修改函数的上下文一次。
    // 不同点：call()传递参数用逗号隔开，apply()用数组传递参数。
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => { }, () => { });
  }
}
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => { }, () => { });
  }
}

// 创建 VueRouter 类的实例
let router = new VueRouter({
  routes,
  // 对于所有路由导航，简单地让页面滚动到顶部
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;

  if (token) {
    // 用户已登录
    if (to.path == "/login" || to.path == "/register") {
      // 路由跳转到登录页
      next("/");
    } else {
      // 路由跳转到其他
      if (name) {
        next();
      } else {
        // 发送请求获取用户信息
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          // token 失效了，需要重新登录
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    // 用户未登录：不能去交易相关、不能去支付相关、不能去个人中心
    let toPath = to.path;
    if (toPath.indexOf("/trade") != -1 || toPath.indexOf("/pay") != -1 || toPath.indexOf("/center") != -1) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
})

// 对外暴露 VueRouter 类的实例
export default router;