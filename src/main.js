import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import filters from './filters'

Vue.config.productionTip = false

filters.forEach(f => {
  Vue.filter(f.name, f.execute)
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
