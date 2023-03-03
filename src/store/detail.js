import { reqGoodsDetail, reqAddToCart } from "@/api";
import { getUUID } from "@/utils/uuid_token";

const state = {
  goodsDetail: {},
  // 用来代表游客的临时身份
  uuid_token: getUUID(),
};
const mutations = {
  GETGOODSDETAIL(state, goodsDetail) {
    state.goodsDetail = goodsDetail;
  }
};
const actions = {
  // 获取商品详细信息
  async getGoodsDetail({ commit }, skuid = "") {
    let result = await reqGoodsDetail(skuid);
    if (result.code === 200) {
      commit("GETGOODSDETAIL", result.data);
    }
  },
  // 将商品添加到购物车中
  async addToCart({ commit }, { skuID, skuNum }) {
    let result = await reqAddToCart(skuID, skuNum);
    if (result.code === 200) return "OK"
    else return Promise.reject(new Error("Failed"));
  }
};
const getters = {
  // 详情页面路径导航所需要的数据
  categoryView(state) {
    return state.goodsDetail.categoryView || {};
  },
  // 详情页面产品信息的数据
  skuInfo(state) {
    return state.goodsDetail.skuInfo || {};
  },
  // 详情页面售卖属性的数据
  spuSaleAttrList(state) {
    return state.goodsDetail.spuSaleAttrList || [];
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}