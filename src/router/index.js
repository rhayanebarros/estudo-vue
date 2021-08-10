import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercicio-01',
    name: 'exercicio-01',
    // route level code-splitting
    // this generates a separate chunk (exercicio-01.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "exercicio-01" */ '../views/exercicio-01.vue')
  },
  {
    path: '/exercicio-02',
    name: 'exercicio-02',
    component: () => import(/* webpackChunkName: "exercicio-02" */ '../views/exercicio-02.vue')
  },
  {
    path: '/exercicio-03',
    name: 'exercicio-03',
    component: () => import(/* webpackChunkName: "exercicio-03" */ '../views/exercicio-03.vue')
  },
  {
    path: '/exercicio-evento-01',
    name: 'exercicio-evento-01',
    component: () => import(/* webpackChunkName: "exercicio-evento-01" */ '../views/exercicio-evento-01.vue')
  },
  {
    path: '/exercicio-evento-02',
    name: 'exercicio-evento-02',
    component: () => import(/* webpackChunkName: "exercicio-evento-02" */ '../views/exercicio-evento-02.vue')
  },
  {
    path: '/propriedades-reativas-01',
    name: 'propriedades-reativas-01',
    component: () => import(/* webpackChunkName: "propriedades-reativas-01" */ '../views/propriedades-reativas-01.vue')
  },
  {
    path: '/propriedades-reativas-02',
    name: 'propriedades-reativas-02',
    component: () => import(/* webpackChunkName: "propriedades-reativas-02" */ '../views/propriedades-reativas-02.vue')
  },
  {
    path: '/estilo-dinamico-01',
    name: 'estilo-dinamico-01',
    component: () => import(/* webpackChunkName: "estilo-dinamico-01" */ '../views/estilo-dinamico-01.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
