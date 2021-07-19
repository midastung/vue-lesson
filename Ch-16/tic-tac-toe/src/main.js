import Vue from 'vue'
import Vuex from 'vuex'
import JumpNumber from './JumpNumber.vue'

Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(JumpNumber)
})
