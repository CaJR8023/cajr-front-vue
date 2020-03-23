import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import "./plugins/element.js";
import "./assets/theme/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
