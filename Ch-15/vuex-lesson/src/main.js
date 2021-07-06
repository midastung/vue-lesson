import Vue from 'vue'
import App from './App.vue'
//在上層引入store，每一個下層組件都會收到
import store from './store'

new Vue({
  //當成vue實例屬性
  store,
  el: '#app',
  render: h => h(App)
})
