// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引用的APP是已经被解析的template 对象 转为render 函数  
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components:{App},
  // template:'<App></App>'
  render:(parameter)=>h(App)
})

//h 代指 createElement('标签',{标签属性},['内容'])     用创建的标签代替el
// 1.普通用法
// render:(p)=>{
//   return createElement('div',
//      {class:'box'},["hello world",createElement('button',
//           {class:'btu'},),['点击']])
// }

// 2正常用法  传送组件（原本）
// const cpn={
//   template:`  <div>
//                   <button>按钮</button>
//                   <h2>{{message}}</h2>
//               </div> `,
//   data() {
//     return {
//       message:'goodbybe'
//     }
//   },
// }

// render:(parameter)=> {return createElement(cpn)}







//最后  实例中的template会替换掉el
// runtime-compiler:
//template -->ast抽象语法树 --(编译)->render函数--->virtuual dom(虚拟dom) ---->真实dom
  


//runtime-only(性能更好):

// new Vue({
//   el: '#app',
//  render:(h)=>h(App)
// })

// render --->vdom  --->ui