import Vue from 'vue'
import VueRouter from 'vue-router'
import Games from '../views/Games.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Games
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue')
  },
  {
    path: '/software',
    name: 'Softwares',
    component: () => import('../views/Softwares.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/Research.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  
  // Gamedev Project Details pages.
  {
    path: '/dcgo',
    name: 'DCGO',
    component: () => import('../views/ProjectViews/DCGO.vue')
  },
  {
    path: '/deep',
    name: 'Deep',
    component: () => import('../views/ProjectViews/Deep.vue')
  },
  {
    path: '/ssd',
    name: 'SSD',
    component: () => import('../views/ProjectViews/SSD.vue')
  },
  {
    path: '/crowley',
    name: 'Crowley',
    component: () => import('../views/ProjectViews/Crowley.vue')
  },
  {
    path: '/spellcraft',
    name: 'Spellcraft',
    component: () => import('../views/ProjectViews/Spellcraft.vue')
  },

  // SE Project Details pages.
  {
    path: '/terrain',
    name: 'Terrain',
    component: () => import('../views/ProjectViews/Terrain.vue')
  },
  {
    path: '/voxel',
    name: 'Voxel',
    component: () => import('../views/ProjectViews/Voxel.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router