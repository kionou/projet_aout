import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import( '../views/SignView.vue')
  },
  {
    path: '/carnet',
    name: 'carnet',
    component: () => import( '../views/CarnetView.vue')
  },
  {
    path: '/compte',
    name: 'compte',
    component: () => import( '../views/CompteView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
