import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Status from './Status'
import '@babel/polyfill'

// 전역 컴포넌트 등록 - Vue.component('컴포넌트명', 옵션)
Vue.component('Appstatus', Status)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
