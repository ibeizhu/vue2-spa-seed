/**
 * Created by Moment on 2016/10/30.
 */

import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Resource)

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})

const router =  new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      title:'定时任务列表',
      component(resolve){
        require (['../components/cronList/index.vue'], resolve);
      }
    },
    {
      path: '/cron',
      title:'定时任务列表',
      component(resolve){
        require (['../components/cronList/index.vue'], resolve);
      }
    },
    {
      path: '/host',
      title:'服务器列表',
      name: 'host',
      component(resolve){
        require (['../components/hostList/index.vue'], resolve);
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((transition) => {
  NProgress.done()
})

export default router
