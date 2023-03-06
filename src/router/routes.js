// 引入一级路由组件
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'

// 引入一级路由组件
import MyOrder from '@/views/Center/MyOrder'
import GroupOrder from '@/views/Center/GroupOrder'

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
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 去交易页面，必须是从购物车页面来
      if (from.path == "/shopcart") {
        next();
      } else {
        // 如果是从其他的路由组件而来，则停留在当前路由
        next(false);
      }
    },
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      HomeFooterShow: true,
    },
    beforeEnter: (to, from, next) => {
      // 去支付页面，必须是从交易页面来
      if (from.path == "/trade") {
        next();
      } else {
        // 如果是从其他的路由组件而来，则停留在当前路由
        next(false);
      }
    },
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      HomeFooterShow: true,
    }
  },
  {
    path: '/center',
    component: Center,
    meta: {
      HomeFooterShow: true,
    },
    // 二级路由组件
    children: [
      {
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'grouporder',
        component: GroupOrder,
      },
      {
        path: '/center',
        redirect: '/center/myorder',
      },
    ]
  },
  {
    // 重定向，访问/时，重定向到首页
    path: '*',
    redirect: '/home',
  }
]
