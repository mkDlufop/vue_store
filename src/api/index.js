// 对API进行统一管理

import requests from "./request";
import requestsMock from "./requestMock";

export const reqCategoryList = () => {
    // axios发请求返回结果是个Promise对象
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    });
}

// 获取广告轮播列表
export const reqBannerList = () => requestsMock.get('/banners')

// 获取首页楼层列表
export const reqFloorList = () => requestsMock.get('/floors')

// 获取搜索模块数据
export const reqSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params,
})