import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import VConsole from 'vconsole'
import FastClick from 'fastclick'
import './permission'
import './icons'
import '@/styles/index.scss' // global css
import Bus from './utils/eventBus'
import { Dialog, Toast, Skeleton } from 'vant'

const _ = require('lodash')

Bus(Vue)
Vue.use(_)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

FastClick.attach(document.body)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Skeleton)
Vue.config.productionTip = false

if (process.env.VUE_APP_CURRENTMODE === 'development') {
  require('./mock') // 引入mock数据
}

if (process.env.VUE_APP_CURRENTMODE === 'test') {
  const vConsole = new VConsole()
  console.log(vConsole.version)
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
