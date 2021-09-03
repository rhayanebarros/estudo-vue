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
    path: '/interacao',
    name: 'InteracaoDom',
    // route level code-splitting
    // this generates a separate chunk (interacao-dom.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "exercicio-01" */ '../views/InteracaoDom.vue')
  },
  {
    path: '/interacao/exercicio-01',
    name: 'exercicio-01',
    // route level code-splitting
    // this generates a separate chunk (exercicio-01.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "exercicio-01" */ '../views/Interacao/exercicio-01.vue')
  },
  {
    path: '/interacao/exercicio-02',
    name: 'exercicio-02',
    component: () => import(/* webpackChunkName: "exercicio-02" */ '../views/Interacao/exercicio-02.vue')
  },
  {
    path: '/interacao/exercicio-03',
    name: 'exercicio-03',
    component: () => import(/* webpackChunkName: "exercicio-03" */ '../views/Interacao/exercicio-03.vue')
  },
  {
    path: '/interacao/exercicio-evento-01',
    name: 'exercicio-evento-01',
    component: () => import(/* webpackChunkName: "exercicio-evento-01" */ '../views/Interacao/exercicio-evento-01.vue')
  },
  {
    path: '/interacao/exercicio-evento-02',
    name: 'exercicio-evento-02',
    component: () => import(/* webpackChunkName: "exercicio-evento-02" */ '../views/Interacao/exercicio-evento-02.vue')
  },
  {
    path: '/interacao/propriedades-reativas-01',
    name: 'propriedades-reativas-01',
    component: () => import(/* webpackChunkName: "propriedades-reativas-01" */ '../views/Interacao/propriedades-reativas-01.vue')
  },
  {
    path: '/interacao/propriedades-reativas-02',
    name: 'propriedades-reativas-02',
    component: () => import(/* webpackChunkName: "propriedades-reativas-02" */ '../views/Interacao/propriedades-reativas-02.vue')
  },
  {
    path: '/interacao/estilo-dinamico-01',
    name: 'estilo-dinamico-01',
    component: () => import(/* webpackChunkName: "estilo-dinamico-01" */ '../views/Interacao/estilo-dinamico-01.vue')
  },
  {
    path: '/condicionais',
    name: 'Condicionais',
    // route level code-splitting
    // this generates a separate chunk (condicionais.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "exercicio-01" */ '../views/Condicionais.vue')
  },
  {
    path: '/condicionais/exemplo-01',
    name: 'exemplo-01',
    component: () => import(/* webpackChunkName: "exemplo-01" */ '../views/Condicionais/exemplo-01.vue')
  },
  {
    path: '/condicionais/exemplo-02',
    name: 'exemplo-02',
    component: () => import(/* webpackChunkName: "exemplo-01" */ '../views/Condicionais/exemplo-02.vue')
  },
  {
    path: '/condicionais/exercicio-01',
    name: 'condicionais-exercicio-01',
    component: () => import(/* webpackChunkName: "exemplo-01" */ '../views/Condicionais/exercicio-01.vue')
  },
  {
    path: '/matador',
    name: 'matador',
    component: () => import(/* webpackChunkName: "exemplo-01" */ '../views/Matador.vue')
  },
  {
    path: '/matador/jogo-matador',
    name: 'jogo-matador',
    component: () => import(/* webpackChunkName: "exemplo-01" */ '../views/Matador/jogo-matador.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
