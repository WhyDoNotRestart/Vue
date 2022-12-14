import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home =()=>import('../views/home/home.vue')
const category =()=>import('../views/category/category.vue')
const profile =()=>import('../views/profile/profile.vue')
const shopCar =()=>import('../views/shopCar/shopCar.vue')

export default new Router({
  mode:"history",
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/shopCar',
      component:shopCar
    },
  ]
})
// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
