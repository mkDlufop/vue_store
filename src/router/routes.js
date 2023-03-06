import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'

export default [
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
    path: '/shopcart',
    component: ShopCart,
    meta: {
      HomeFooterShow: true,
    }
  },
  {
    path: '/trade',
    component: Trade,
    meta: {
      HomeFooterShow: true,
    }
  },
  {
    path: '/pay',
    component: Pay,
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
