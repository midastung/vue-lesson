import Vue from 'vue'
import Vuex from 'vuex'
import InfiniteScrollApp from './InfiniteScrollApp.vue'

Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(InfiniteScrollApp)
})
