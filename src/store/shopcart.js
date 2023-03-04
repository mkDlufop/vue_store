import { reqCartList, reqDeleteCartById, reqUpdataCheckedById } from '@/api';

const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};
const actions = {
  // 获取购物车列表
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code === 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  // 删除购物车某个商品
  async deleteCartById({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
  // 修改购物车某个商品的选中状态
  async updataCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdataCheckedById(skuId, isChecked);
    if (result.code === 200) {
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
  // 删除全部勾选的商品
  async deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(e => {
      let promise = e.isChecked == 1 ? dispatch("deleteCartById", e.skuId) : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
  // 修改购物车中全部商品的选中状态
  updateAllCartIsChecked({ dispatch, getters }, isChecked) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach(e => {
      let promise = dispatch("updataCheckedById", { skuId: e.skuId, isChecked });
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  }
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
}