import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'
import MainPage from '@/pages/MainPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/pages/HelpPage.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/messages',
    name: 'Messages',
    component:() => import('@/pages/MessagesPage.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component:() => import('@/pages/SignUpPage.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component:() => import('@/pages/AuthPage.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to,from,next)=> {
  const requireAuth = to.meta.auth

  if(requireAuth && store.getters.isAuthentificated ){
    next()
  } else if (requireAuth && !store.getters.isAuthentificated) {
    next('/auth?message=auth')
  } else {
    next()
  }
})
export default router