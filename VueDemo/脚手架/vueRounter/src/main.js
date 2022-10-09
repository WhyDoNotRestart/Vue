import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router 对象传入到Vue实例中
  router,
  render: h => h(App)
})
