import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                HomeFooterShow: true,
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                HomeFooterShow: false,
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                HomeFooterShow: false,
            }
        },
        {
            path: '/search/:keyword?', // 添加?，可指定params参数可传可不传
            name: 'search',
            component: Search,
            meta: {
                HomeFooterShow: true,
            }
        },
        {
            path: '/detail/:skuid',
            component: Detail,
            meta: {
                HomeFooterShow: true,
            }
        },
        {
            path: '/addcartsuccess',
            name: 'addcartsuccess',
            component: AddCartSuccess,
            meta: {
                HomeFooterShow: true,
            }
        },
        {
            // 重定向，访问/时，重定向到首页
            path: '*',
            redirect: '/home',
        }
    ],
    // 对于所有路由导航，简单地让页面滚动到顶部
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})