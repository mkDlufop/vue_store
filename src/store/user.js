import { reqGetCode, reqUserRegister, reqUserLogin } from "@/api"

const state = {
  code: "",
  token: "",
}
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  }
}
const actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
  async userLogin({ commit }, user) {
    let result = await reqUserLogin(user);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters,
}