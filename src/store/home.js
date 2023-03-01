import { reqCategoryList, reqBannerList, reqFloorList } from "@/api";

const state = {
  categoryList: [],// 所有分类的数组
  bannerList: [], // 广告位轮播数据的数组
  floorList: [], // 所有楼层数据的数组
};
const mutations = {
  GET_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  // 接收广告轮播列表
  GET_BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  // 接收楼层列表
  GET_FLOOR_LIST(state, floorList) {
    state.floorList = floorList;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("GET_CATEGORY_LIST", result.data);
    }
  },
  //异步获取广告位轮播数据
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit("GET_BANNER_LIST", result.data);
    }
  },
  //异步获取所有楼层数据
  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit("GET_FLOOR_LIST", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
}