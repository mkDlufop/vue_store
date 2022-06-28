import axios from 'axios'

import nprogress from "nprogress";
import "nprogress/nprogress.css"

const requestsMock = axios.create({
    baseURL: '/mock',
    timeout: 5000,
});

requestsMock.interceptors.request.use((config) => {
    nprogress.start();
    return config;
}, (error) => {
    return Promise.reject(error);
});

requestsMock.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    console.log("网络请求错误：" + error)
    return new Promise(()=>{});
});

export default requestsMock;