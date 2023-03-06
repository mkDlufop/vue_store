// 对API进行统一管理

import requests from "./request";
import requestsMock from "./requestMock";

export const reqCategoryList = () => {
  // axios发请求返回结果是个Promise对象
  return requests({ url: "/product/getBaseCategoryList", method: "get" });
};

// 获取广告轮播列表
export const reqBannerList = () => requestsMock.get("/banners");

// 获取首页楼层列表
export const reqFloorList = () => requestsMock.get("/floors");

// 获取搜索模块数据
export const reqSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

// 获取商品详情信息
export const reqGoodsDetail = (skuId) => requests({ url: `/item/${skuId}`, method: "get" });

// 将商品添加到购物车中（对已有物品进行数量改动）
export const reqAddToCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

// 获取购物车列表
export const reqCartList = () => requests({ url: "/cart/cartList", method: "get" });

// 删除购物车商品
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

// 修改某个商品的选中状态
export const reqUpdataCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

// 获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });

// 用户注册
export const reqUserRegister = (data) => requests({ url: "/user/passport/register", data, method: "post" });

// 用户登陆
export const reqUserLogin = (data) => requests({ url: "/user/passport/login", data, method: "post" });

// 获取用户信息（需要带着用户的 token 向服务器发送请求）
export const reqUserInfo = () => requests({ url: "/user/passport/auth/getUserInfo", method: "get" });

// 退出登录
export const reqLogout = () => requests({ url: "/user/passport/logout", method: "get", });

// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: "/user/userAddress/auth/findUserAddressList", method: "get" });

// 获取商品清单
export const reqOrderInfo = () => requests({ url: "/order/auth/trade", method: "get" });

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post" });

// 获取支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: "get" });