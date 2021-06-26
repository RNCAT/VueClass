import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.prototype.$apiUrl = 'http://127.0.0.1:3000/api/v1/'
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
