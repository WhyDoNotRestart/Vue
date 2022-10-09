
import Vue from 'vue'
import Router from 'vue-router'
// --------------------------------------------
const about =()=>import('../components/about.vue')
const HelloWorld =()=>import('../components/HelloWorld.vue')
 const news=()=>import('../components/news.vue')
 const message=()=>import('../components/message.vue')

//通过Vue.use(插件) 安装插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // redirect:()=>import('../components/about.vue') 直接
      redirect:'/about'
    },
    {
      path:'/about/:userName',
      // path:'/about',
      // component:()=>import ('../components/about.vue')
      component:about,
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          path:'news',
          component:news
        },
        {
          path:'message',
          component:message
        }
      ]
    },
    {
      path:'/HelloWorld',
      component:HelloWorld
    }
   
  ]
})

/*
{
  // 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'

//通过Vue.use(插件) 安装插件
Vue.use(Router)
// const routes=[

// ]

// // 创建路由对象
// const router =new Router({
//   //配置路由和组件关系
//   routes
// })

//在main.js中 router 对象传入到Vue实例中

export default new Router({
  // mode:'history',
  // linkActiveClass:'active',
  routes: [
      {
        path: '',
        redirect: 'about'
      },
      {
        path:'/about/:userName',
        component:about
      },
      {
        path:'/HelloWorld',
        component:HelloWorld
      }
   
   
  ]
})

}
*/