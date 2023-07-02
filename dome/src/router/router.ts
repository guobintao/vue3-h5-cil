import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    children: [
      {
        path: '/home/index',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/IndexView.vue')
      },
      {
        path: '/home/fen',
        name: 'fen',
        component: () => import(/* webpackChunkName: "fen" */ '../views/home/FenView.vue')
      },
      {
        path: '/home/car',
        name: 'car',
        component: () => import(/* webpackChunkName: "car" */ '../views/home/CarView.vue')
      },
      {
        path: '/home/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "my" */ '../views/home/MyView.vue')
      }
    ]
  },
  {
    path: '/user/login',
    name: 'userLogin',
    component: () => import(/* webpackChunkName: "userLogin" */ '../views/user/LoginView.vue')
  },
  {
    path: '/user/registry',
    name: 'userregistry',
    component: () => import(/* webpackChunkName: "userLogin" */ '../views/user/RegisTry.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/common/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

export default routes
