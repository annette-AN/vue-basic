import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/header.scss'
import '@/assets/css/subpage-list.scss'
import '@/assets/css/subpage-list-reactive.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
