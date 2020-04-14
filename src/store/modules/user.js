import { passwordLogin, smsLogin, getInfo } from "@/global/login";
import { Message } from "element-ui";

const state = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : " ",
  userName: "",
  userId: "",
  roles: [],
  introduce: ""
};
const mutations = {
  SET_TOKEN(state, val) {
    state.token = val;
    localStorage.setItem("token", val);
  },
  DEL_TOKEN(state) {
    state.token = "";
    state.userName = "";
    state.roles = "";
    state.userId = "";
    state.introduce = "";
    localStorage.removeItem("token");
  },
  SET_ROLES(state, payload) {
    state.roles = payload;
  },
  SET_USERNAME(state, payload) {
    state.userName = payload;
  },
  SET_INTRODUCE(state, payload) {
    state.introduce = payload;
  },
  SET_USERID(state, payload) {
    state.userId = payload;
  }
};

const actions = {
  //用户登录
  _passwordLogin({ commit }, formdatas) {
    return new Promise((resolve, reject) => {
      passwordLogin(formdatas)
        .then(res => {
          console.info("res.token=>" + res.access_token);
          if (res.access_token != "") {
            commit("SET_TOKEN", res.access_token);
          } else {
            Message.error("密码错误");
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  _smsLogin({ commit }, formdatas) {
    return new Promise((resolve, reject) => {
      smsLogin(formdatas)
        .then(res => {
          console.info("res=>" + res);
          if (res.access_token != "") {
            commit("SET_TOKEN", res.access_token);
            commit("SET_USERNAME", res.user_name);
            commit("SET_USERID", res.user_id);
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  loginOut({ commit }) {
    commit("DEL_TOKEN");
  },
  getInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      getInfo(data)
        .then(res => {
          if (res.data) {
            commit("SET_USERID", res.data.id);
            commit("SET_USERNAME", res.data.tel);
          }
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
