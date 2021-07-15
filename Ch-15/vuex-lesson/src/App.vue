<template>
  <div>
   
  </div>
</template>
<script>

import {mapSate} from 'vuex';

export default {
  mounted() {
    //  假設有重複名稱的actions函式的話，在App.vue呼叫執行時，則會兩者皆執行。
    this.$store.dispatch('fetchList');
    //  但是在組件裏加上了 -> namespaced: true
    this.$store.dispatch('todos/fetchList');
    this.$store.dispatch('member/fetchList');


  },
  computed: {
    //想使用mapState來寫的話呢？
    ...mapSate([
      'todos/list',
      'todos/input',
      'todos/current',
      'todos/loading',
    ]),

    //可以寫簡單一點
    ...mapSate('todos',[
      'list',
      'input',
      'current',
      'loading',
    ]),


    todoList(){
      return this.$store.state.todos.list;
    }
  },
}
</script>
