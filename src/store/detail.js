import { reqGoodsDetail } from "@/api";

const state = {
  goodsDetail: {},
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