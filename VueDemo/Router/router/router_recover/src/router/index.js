import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
const HomeView = () => import('../views/HomeView.vue');
const about = () => import('../views/AboutView.vue')
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about/:id',
    name: 'about',
    component: about
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router