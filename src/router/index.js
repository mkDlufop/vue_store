import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

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
            // 重定向，访问/时，重定向到首页
            path: '*',
            redirect: '/home',
        }
    ]
})