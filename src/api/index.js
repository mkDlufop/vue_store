// 对API进行统一管理

import requests from "./request";

export const reqCategoryList = () => {
    // axios发请求返回结果是个Promise对象
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get',
    });
}
