import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  lang: {
    locales: { pt },
    current: 'pt'
  }
})
