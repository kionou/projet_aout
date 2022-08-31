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
    path: '/login/:id',
    name: 'loginid',
    component: () => import( '../views/LoginView.vue'),
    props:true
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import( '../views/SignView.vue')
  },
  {
    path: '/carnet',
    name: 'carnet',
    component: () => import( '../views/CarnetView.vue'),
    props:true
  },
  {
    path: '/compte',
    name: 'compte',
    component: () => import( '../views/CompteView.vue'),
    props:true
  },
  {
    path: '/maladie',
    name: 'maladie',
    component: () => import( '../views/MaladieView.vue'),
    props:true
  },
  {
    path: '/listeVaccin',
    name: 'listeVaccin',
    component: () => import( '../views/ListeVaccin.vue'),
    props:true
  },
  {
    path: '/ajouterVaccin',
    name: 'ajouterVaccin',
    component: () => import( '../views/AjouterVaccin.vue'),
    props:true
  },
  {
    path: '/detailMaladie/:id',
    name: 'detailMaladie',
    component: () => import( '../views/DetailMaladie.vue'),
    props:true
  },
  {
    path: '/ajouter',
    name: 'ajouter',
    component: () => import( '../views/AjouterView.vue')
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: () => import( '../views/DoctorLogin.vue')
  },
  {
    path: '/doctorinfo',
    name: 'doctorinfo',
    component: () => import( '../views/DoctorInfo.vue'),
    props:true
  },
  {
    path: '/updatepatient',
    name: 'updatepatient',
    component: () => import( '../views/UpdatePatient.vue'),
    props:true
  },

 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
