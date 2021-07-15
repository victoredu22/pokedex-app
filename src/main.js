import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/js/all.js';


Vue.config.productionTip = false
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)
import "animate.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
