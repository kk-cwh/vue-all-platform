// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

// const isDebugMode = process.env.NODE_ENV !== 'production'
const isDebugMode = false
Vue.config.debug = isDebugMode
Vue.config.devtools = isDebugMode
Vue.config.productionTip = isDebugMode

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
