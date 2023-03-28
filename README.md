# vue_store

## 项目简介

该项目为在线电商 WebApp（SPA），采用模块化、组件化的模式开发，采用 Vue 全家桶 + Webpack + Axios，包括首页、搜索列表、商品详情、购物车、订单、支付、用户登陆/注册等多个子模块。

技术栈：Vue + Vuex + VueRouter + Webpack + Axios + Element UI + Mock.js

## 主要亮点

- 使用 Vue 脚手架从零开始搭建了前端代码框架，并二次封装了 Axios 以优化网络请求。为便于开发和测试，引入了 Mock.js 并模拟了后端数据的返回结果。

- 为了提高代码的复用率，封装了多个组件，包括页面头部、页面底部、轮播图、分页器和三级联动等。这些组件可以在其他项目中复用，提高了开发效率。

- 为确保账户安全，使用了全局守卫控制登录用户和未登录用户能够访问的页面。

- 为了提高用户体验，使用Vue-Lazyload实现了图片懒加载，使页面加载更快。同时，为了优化项目性能，使用路由懒加载，并使用节流技术解决了三级联动组件的卡顿问题。

## 运行项目

### Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

## 该项目使用的一些插件

> 该项目为 Vue 2 项目

| 插件 | 安装版本(该项目目前使用的版本) | 安装命令 | 备注 |
| - | - | - | - |
| Axios | | `npm i axios`| 一个基于 promise 的 HTTP 库 |
| Vue Router | 3 | `npm i vue-router` | Vue.js 的官方路由 |
| Mock.js | | `npm i mockjs`| 一个模拟数据生成器 |
| Less 及 less-loader | 10 版本的 less-loader| `npm i --save-dev less less-loader@10` | less-loader 是 webpack 将 Less 编译为 CSS 的 loader。|
| Element UI 及 babel-plugin-component | | `npm i element-ui -S`<br/>`npm i babel-plugin-component -D` | 一个基于 Vue 的桌面端组件库。只有在按需引入 Element UI 时，才需要安装 babel-plugin-component。 |
| qrcode | | `npm i qrcode` |一个二维码生成器 |
| NProgress | | `npm i nprogress` | 一个轻量级的进度条组件 |
| Swiper | 5 | `npm i swiper@5` | 一个开源的触摸滑动插件，适用于移动/PC平台。|
| Vue-Lazyload | 1.3.3 | `npm i vue-lazyload@1.3.3 -S` | 一个用于图片懒加载的 Vue 模块 |