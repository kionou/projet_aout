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
    path: '/carnet/:id',
    name: 'carnet',
    component: () => import( '../views/CarnetView.vue'),
    props:true
  },
  {
    path: '/compte',
    name: 'compte',
    component: () => import( '../views/CompteView.vue')
  },
  {
    path: '/maladie',
    name: 'maladie',
    component: () => import( '../views/MaladieView.vue')
  },
  {
    path: '/listeVaccin/:id',
    name: 'listeVaccin',
    component: () => import( '../views/ListeVaccin.vue'),
    props:true
  },
  {
    path: '/ajouterVaccin/:id',
    name: 'ajouterVaccin',
    component: () => import( '../views/AjouterVaccin.vue'),
    props:true
  },
  {
    path: '/detailMaladie',
    name: 'detailMaladie',
    component: () => import( '../views/DetailMaladie.vue')
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: () => import( '../views/AjouterView.vue')
  }
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
