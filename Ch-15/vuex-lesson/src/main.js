import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  //當成vue實例屬性
  store,
  el: '#app',
  render: h => h(App)
})
