import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css";
import "vuesax/dist/vuesax.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VCalendar from "v-calendar";
import VueGoogleCharts from 'vue-google-charts'
 
Vue.use(VueGoogleCharts)
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});
Vue.use(VueAxios, axios);
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
