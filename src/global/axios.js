import axios from "axios";
import Qs from "qs";
import store from "@/store";
import Message from "element-ui";
import Vue from "vue";
import router from "@/routes/router";

Vue.prototype.$http = axios; // 并发请求

axios.interceptors.request.use(
  config => {
    // config.headers["Content-Type"] = "application/json; charset=utf-8";
    const token = store.getters.token;
    if (localStorage.getItem("token")) {
      config.headers.Authorization = "bearer " + token;
    } else {
      config.headers.Authorization =
        "Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ=";
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    const code = res.status;
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res);
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit("DEL_TOKEN");
          Message.warning("登录已过期，请重新登录");
          router.replace({
            path: "/"
          });
          break;
        case 500:
          Message.error("服务器错误");
          break;
        default:
          console.info(error.response);
      }
      return Promise.reject(error.response);
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes("timeout")) {
        Message.error("请求超时！请检查网络是否正常");
      } else {
        Message.error("请求失败，请检查网络是否已连接");
      }
      return Promise.reject(error);
    }
  }
);

export default {
  post: function(url = "", data = {}, config) {
    console.info(url);

    return axios.post(url, data, config);
  },

  login(url, data) {
    return axios({
      method: "post",
      url,
      data: Qs.stringify(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: "Basic Zm9vQ2xpZW50SWRQYXNzd29yZDpzZWNyZXQ="
      }
    });
  },

  put: function(url = "", data = {}, config) {
    return axios.put(url, data, config);
  },

  get: function(url, params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS);
  },

  delete: function(url = "", params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS);
  }
};
