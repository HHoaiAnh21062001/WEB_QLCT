import { createRouter, createWebHistory } from 'vue-router'


import chitieu from '../components/chitieu.vue'
import home from '../components/home.vue'
import thunhap from '../components/thunhap.vue'
import login from '../components/login.vue'


const routes = [
  

  {
    path: '/chitieu/:id',
    name: 'chitieu',
    component: chitieu
  },

  {
    path: '/home/:id',
    name: 'home',
    component: home
  }
  ,{
    path: '/thunhap/:id',
    name: 'thunhap',
    component: thunhap
  },
  
  {
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router