import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import "./plugins/element.js";
import "./assets/theme/index.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
