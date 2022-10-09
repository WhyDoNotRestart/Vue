import Vue from 'vue'
import Router from 'vue-router'

const helloVue = () => import('../components/helloVue.vue')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/helloVue',
    component: helloVue
  }, ]
})
