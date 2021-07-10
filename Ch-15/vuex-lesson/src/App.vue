<template>
  <div>
    <h1>{{totalCount}}</h1>
    <!-- <button @click="addCount">Add</button> -->
    <!-- mapMutations payload寫法 -->
    <button @click="add(2)">Add</button>
  </div>
</template>
<script>
//import store from './store'

//vuex有一些方便的工具，要切記在上層要注入store
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
  mounted(){
    //mutiations是用commit
    //actions是用dispatch
    this.$store.dispatch('fetchTodos', {id:2});
  },
  methods: {
    // ...mapActions(['fetchTodos']),
    ...mapActions({
      //取替代名
      fetch: 'fetchTodos',
    }),
  },
}
</script>
