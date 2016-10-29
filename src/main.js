import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NProgress from 'nprogress'
Vue.use(Router)
Vue.use(Resource)
Vue.use(ElementUI)

import App from './App'

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})


const router = new Router({
  routes: [
    {
      path: '/cron',
      title:'定时任务列表',
      component(resolve){
        require (['./components/cronList/index.vue'], resolve);
      }
    },
    {
      path: '/host',
      title:'服务器列表',
      name: 'host',
      component(resolve){
        require (['./components/hostList/index.vue'], resolve);
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
