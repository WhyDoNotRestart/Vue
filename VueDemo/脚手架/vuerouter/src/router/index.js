import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const about =()=>import('../components/about.vue')
const message =()=>import('../components/message.vue')
const news =()=>import('../components/news.vue')
const HelloWorld =()=>import('../components/HelloWorld.vue')
const User =()=>import('../components/User.vue')
const home=()=>import('../components/home.vue')


//导出之后来到main.js 中挂载
 const router=new Router({
  linkActiveClass:'active',
  routes: [
    {
      path:'/HelloWorld',
      component:HelloWorld,
      meta:{
        title:'HelloWorld'
      },
      children:[
        {
          path:'',
          redirect:'news',
          meta:{
            title:'message'
          },
        },
        {
          path:'news',
          component:news,
          meta:{
            title:'news'
          }
        },
        {
          path:'message',
          component:message,
          meta:{
            title:'message'
          },
        },
      ]
    },
    {
      path:'',
      redirect:'/HelloWorld',
      
    },
    {
      path:'/User/:myCreate',
      component:User,
      meta:{
        title:'User'
      },
    },
    {
      path:'/about',
      component:about,
      meta:{
        title:'about'
      },
    },
    {
      path:'/home',
      component:home,
      meta:{
        title:'home'
      },
    }
     /*  ,{
       path:'/news',
       component:news
     },
     {
       path:'/message',
       component:message
     }*/
  ],

})
router.beforeEach((to, from, next) => {
  console.log('before');
  //console.log(to);
  document.title=to.matched[0].meta.title
  next()
})
router.afterEach( (to, from, next) => {
  console.log('after');
  //console.log(to);
})

export default router

