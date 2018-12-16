'use strict'

import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import VueSweetAlert from 'vue-sweetalert2'

Vue.use(VueMaterial)
Vue.use(VueSweetAlert)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})