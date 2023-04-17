import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
})

new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app')
