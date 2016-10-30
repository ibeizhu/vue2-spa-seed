import Vue from 'vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
import App from './App'

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

app.$mount('#app')
