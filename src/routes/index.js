import Vue from "vue";
import Router from "vue-router";
import router from "./router.js";
import NProgress from "nprogress"; //加载条
import "nprogress/nprogress.css"; //加载条样式
Vue.use(Router);
const appRouter = new Router({
  mode: "history",
  routes: router
});

// eslint-disable-next-line
appRouter.beforeEach((to, _from, next) => {
  NProgress.start();
  window.document.title = to.meta.title;
  next();
});

// eslint-disable-next-line
appRouter.afterEach((_to, _from) => {
  NProgress.done();
});

export default appRouter;
