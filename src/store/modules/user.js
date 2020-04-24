import { passwordLogin, smsLogin, getInfo } from "@/global/login";
import { Message } from "element-ui";

const state = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
  userName: localStorage.getItem("userName")
    ? localStorage.getItem("userName")
    : "",
  userId: localStorage.getItem("userId") ? localStorage.getItem("userId") : "",
  isLogin: localStorage.getItem("isLogin")
    ? localStorage.getItem("isLogin")
    : false,
  roles: [],
  introduce: "",
  ossImgUrl: "https://cajr-news-img.oss-cn-shenzhen.aliyuncs.com",
  userInfo: localStorage.getItem("userInfo")
    ? localStorage.getItem("userInfo")
    : ""
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
    state.userInfo = {};
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userInfo");
    localStorage.setItem("isLogin", false);
  },
  SET_ROLES(state, payload) {
    state.roles = payload;
  },
  SET_USERNAME(state, payload) {
    state.userName = payload;
    localStorage.setItem("userName", payload);
  },
  SET_INTRODUCE(state, payload) {
    state.introduce = payload;
  },
  SET_USERID(state, payload) {
    state.userId = payload;
    localStorage.setItem("userId", payload);
  },
  SET_ISLOGIN(state, payload) {
    state.isLogin = payload;
    localStorage.setItem("isLogin", payload);
  },
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
    localStorage.setItem("userInfo", payload);
  }
};

const actions = {
  //用户登录
  _passwordLogin({ commit }, formdatas) {
    return new Promise((resolve, reject) => {
      passwordLogin(formdatas)
        .then(res => {
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
          if (res.access_token != "") {
            commit("SET_TOKEN", res.access_token);
            commit("SET_USERNAME", res.user_name);
            commit("SET_USERID", res.user_id);
            commit("SET_ISLOGIN", true);
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
  _getInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      getInfo(data)
        .then(res => {
          console.log("res =>" + res.data.userInfo.avatar);
          commit("SET_USER_INFO", res.data);
          return true;
        })
        .catch(error => {
          reject(error);
          return false;
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
