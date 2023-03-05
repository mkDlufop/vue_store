import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api"
import { setTOKEN, getTOKEN, removeTOKEN } from "@/utils/token"

const state = {
  code: "",
  token: getTOKEN(),
  userInfo: {},
}
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEARUSERINFO(state) {
    state.userInfo = {};
    state.token = "";
    removeTOKEN();
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
      setTOKEN(result.data.token);
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
  async getUserInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
  async userLogout({ commit }) {
    let result = await reqLogout();
    if (result.code == 200) {
      commit("CLEARUSERINFO");
      return "OK";
    } else {
      return Promise.reject("failed");
    }
  },
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters,
}