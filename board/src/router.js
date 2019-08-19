import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board-list',
      name: 'Board list',
      component: () => import('./pages/BoardList.vue')
    },
    {
      path: '/',
      redirect: '/board-list'
    },
    {
      path: '/board-view/:id',
      name: 'Board view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./pages/BoardView.vue')
    },
    {
      path: '/board-write',
      name: 'Board write',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./pages/BoardWrite.vue')
    },
    {
      path: '/board-write/:id',
      name: 'Board write',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./pages/BoardWrite.vue')
    }
  ]
})
