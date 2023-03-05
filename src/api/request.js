// 对axios进行二次封装

import axios from "axios";
import store from "@/store";

// 引入nprogress及相关样式
import nprogress from "nprogress";
import "nprogress/nprogress.css"

// 利用create方法创建一个axios实例
const requests = axios.create({
  baseURL: '/api', // 基础路径
  timeout: 5000, // 代表请求的超时时间5s
})

// 请求拦截器
// 发送请求前可以做一些事情，如：检查权限、增加页面Loading、网络状态判断等
requests.interceptors.request.use((config) => {
  if (store.state.detail.uuid_token) {
    // 给请求头添加一个字段（userTempId）：该字段需要和后端协商好
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
  nprogress.start();
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截器
requests.interceptors.response.use((res) => {
  // 成功的回调函数
  nprogress.done();
  return res.data;
}, (error) => {
  // 失败的回调函数
  console.log("网络请求错误：" + error)
  // return Promise.reject(new Error('fail'));
  // return Promise.reject(error);
  return new Promise(() => { });
})

export default requests;