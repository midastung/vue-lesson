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
import {mapState, mapMutations} from 'vuex';

export default {
  data(){
    return {
      loadCount: 0,
    }
  },
  computed:{
    //可以相併著用
    myCount(){
      return this.loadCount;
    },
    // ...mapState([
    //   'count',
    //   'username',
    //   'list'
    // ]),
     ...mapState({
      //  storeCount: 'count'
        storeCount: state => state.count,
        totalCount(state){
          return this.loadCount + state.count
        }
     }),
  },
  methods:{
    //陣列寫法
    // ...mapMutations(['addCount']),
    //物件寫法
    ...mapMutations({
      add: 'addCount',
    })

    
    // addCount(){
      //二個參數設置
      // this.$store.commit('addCount', 2);

      //二個參數設置，物件寫法
      // this.$store.commit({
      //   //mutation 名字
      //   type: 'addcount',
      //   //參數
      //   step: 2,
      // })
    //}
  },
}
</script>
