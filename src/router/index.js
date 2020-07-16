import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './home'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router404 = {
  path: '*',
  component: () => import('@/components/Page404')
}


const routes = [...constantRoutes, router404]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

// 设置页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || 'CRM'
  }
  next()
})

export default router
