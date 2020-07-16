// "version": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"

import router from './router'
import store from './store'
import NProgress from 'nprogress'

const _import = require('./router/_import_' + process.env.NODE_ENV)
import Layout from '@/layout'
import { allRoutes } from '@/router/all_routes'
import { login2 } from '@/api/user'
import * as dd from 'dingtalk-jsapi'
// import { constantRoutes } from '@/router/index'

NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  document.title = to.meta.title

  const hasRoles = store.state.user.routes && store.state.user.routes.length > 0
  const isLogin = /login/.test(to.path)
  next()

  // if (hasRoles || isLogin) {
  //   next()
  // } else {
  //   if (dd.env.platform !== 'notInDingTalk') {
  //       dd.ready(() => {
  //         try {
  //           dd.runtime.permission.requestAuthCode({
  //             corpId: 'dingcd74ee3c46ed5130',
  //             onSuccess: (result) => {
  //               login2({
  //                 from: 'ddh5',
  //                 code: result.code
  //               }).then(() => {
  //                 try {
  //                   store.dispatch('user/getInfo').then(res => {
  //                     store.dispatch('permission/generateRoutes', idToRouter(res.routes)).then(rts => {
  //                       routerGo(rts, to, next)
  //                     })
  //                   })
  //                 } catch (errr) {
  //                   NProgress.done()
  //                 }
  //               }).catch((error) => {
  //                 NProgress.done()
  //                 window.location.href = `/newcrmsite/login/login2.html?topage=${to.path}`
  //               })
  //               // window.location.href = `/newcrmsite/login/login2.html?from=ddh5&code=${result.code}&topage=${to.path}`
  //             },
  //             onFail: (err) => {
  //               NProgress.done()
  //               window.location.href = `/newcrmsite/login/login2.html?topage=${to.path}`
  //             }
  //           })
  //         } catch (e) {
  //           NProgress.done()
  //           window.location.href = `/newcrmsite/login/login2.html?topage=${to.path}`
  //         }
  //       })
  //   } else {
  //     next()
  //     // try {
  //     //   let { routes } = await store.dispatch('user/getInfo')
  //     //   if (process.env.NODE_ENV === 'development') { // 本地调试用
  //     //     routes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  //     //   }
  //     //   const accessRoutes = await store.dispatch('permission/generateRoutes', idToRouter(routes))
  //     //   routerGo(accessRoutes, to, next)
  //     // } catch (error) {
  //     //   window.location.href = `/newcrmsite/login/login2.html?topage=${to.path}`
  //     //   // next(`/newcrmsite/login/login2.html?topage=${to.path}`)
  //     //   // routerGo([], to, next)
  //     //   // next()
  //     //   NProgress.done()
  //     // }
  //   }
  // }
})

// ids匹配本地路由
function idToRouter(ids) {
  const allRoute = _.cloneDeep(allRoutes)
  const arr = []
  function flatRoute(rts) {
    rts.forEach(route => {
      const id = ids.find(i => i === route.id)
      if (ids.find(i => i === route.id)) {
        if (/-/.test(id)) {
          const spt = id.split('-')[0]
          const item = arr.find(item => item.id === spt)
          if (item) {
            item.children.push(route)
          } else {
            const rt = allRoute.find(it => it.id === spt)
            const child = rt.children.find(chi => chi.id === id)
            rt.children = []
            rt.children.push(child)
            arr.push(allRoute.find(it => it.id === spt))
          }
        } else {
          const copyRoute = _.cloneDeep(route)
          const hasSelf = ids.every(it => {
            if (/-/.test(it)) {
              const copyIdSpt = it.split('-')[0]
              if (copyIdSpt === id) {
                return false
              }
              return true
            }
            return true
          })
          if (copyRoute.children && !hasSelf) {
            copyRoute.children = []
          }
          arr.push(copyRoute)
        }
      }
      if (route.children && route.children.length) {
        flatRoute(route.children)
      }
    })
  }
  flatRoute(allRoute)
  return arr
}

// 配置component的路径指向、addRoutes
function routerGo(accessRoutes, to, next) {
  if (accessRoutes && accessRoutes.length) {
    const getRouter = filterAsyncRouter(accessRoutes)
    router.addRoutes(getRouter)
    next({ ...to, replace: true })
  } else {
    next()
  }
  NProgress.done()
  // next({ ...to, replace: true })
}

function filterAsyncRouter(asyncRouterMap) {
  asyncRouterMap.forEach(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = _import(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
  })
  return asyncRouterMap
}

router.afterEach(() => {
  NProgress.done()
})
