import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VeeValidate from '@/vee-validate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
