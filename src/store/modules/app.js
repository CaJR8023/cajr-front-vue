/*
设置侧边栏打开或关闭，以及一些应用程序设置
 */
const state = {
  opened: sessionStorage.getItem("open")
    ? sessionStorage.getItem("open")
    : "false",
  msgIsShow: false,
  showDriver: localStorage.getItem("driver")
    ? localStorage.getItem("driver")
    : "yes"
};
const mutations = {
  SET_OPENED(state, payload) {
    state.opened = String(payload);
    sessionStorage.setItem("open", payload);
  },
  SET_MSGISOPEN(state) {
    state.msgIsShow = !state.msgIsShow;
  },
  SET_DRIVER(state, payload) {
    state.showDriver = payload;
    localStorage.setItem("driver", payload);
  }
};
export default {
  namespaced: true,
  state,
  mutations
};
