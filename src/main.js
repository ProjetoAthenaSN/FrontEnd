// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
//import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

import VueParticles from 'vue-particles'
import router from './router'

Vue.use(VueParticles);
Vue.use(BootstrapVue);
Vue.use(Vuetify, {
  iconfont: 'fa'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
