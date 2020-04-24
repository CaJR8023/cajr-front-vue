import Vue from "vue";
import Router from "vue-router";
import router from "./router.js";
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
import Serve from "../global/request";

Vue.use(Router);
const appRouter = new Router({
  mode: "history",
  routes: router
});

// eslint-disable-next-line
appRouter.beforeEach(async (to, _from, next) => {
  NProgress.start();
  window.document.title = to.meta.title;
  if (localStorage.getItem("isLogin") == "true") {
    let data = localStorage.getItem("userId");
    const userInfo = await Serve.getUserInfo(data);
    localStorage.setItem("userInfo", JSON.stringify(userInfo.data.userInfo));
    localStorage.setItem("user_name", userInfo.data.username);
  }
  next();
});

// eslint-disable-next-line
appRouter.afterEach((_to, _from) => {
  NProgress.done();
});

export default appRouter;
