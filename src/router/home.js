import Layout from '@/layout'

function concatRouters(fileName) {
  // const reg = new RegExp(`${fileName}\.js$`)
  let routesApp = []
  let routerApp = []
  if (fileName === 'router') {
    routerApp = require.context('@/views/', true, /router\.js$/)
  } else if (fileName === 'routerFull') {
    routerApp = require.context('@/views/', true, /routerFull\.js$/)
  }
  routerApp.keys().forEach(r => {
    const route = routerApp(r).default
    if (Array.isArray(route)) {
      routesApp = routesApp.concat(route)
    } else {
      routesApp.push(route)
    }
  })
  return routesApp
}

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'home1',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: '首页', icon: 'home', haveCache: true },
        component: () => import('@/views/home')
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/menu'),
        meta: {
          title: '菜单',
          haveCache: true
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/mine'),
        meta: {
          title: '我的',
          haveCache: true
        }
      },
      ...concatRouters('router')
    ]
  },
  ...concatRouters('routerFull')
]
