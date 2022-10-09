import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

//axios 本身返回一个promise   调用内部的resolve
axios({
  url:'http://123.207.32.32:8000/home/multidata',
  //传入参数
  params:{
    type:'sell',
    page:4
  }
}).then(res=>{
  console.log(res);
})

//并发请求 
// axios.all([axios(),axios()]).then(res=>{})

// 全局配置
  //写完之后不写的默认为全局配置
//axios.defaults.属性=''
axios.defaults.baseURL=''  //baseURL 根路径
