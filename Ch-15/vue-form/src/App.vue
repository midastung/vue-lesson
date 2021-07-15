<template>
  <div>
    <!-- <input type="text" v-model="text" /> -->
    <input type="text" :value="text" @input="setText" />
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';
export default {
  // data(){
  //   return{
  //     text:'',
  //   }
  // },
  computed:{
    // text(){
    //   return this.$store.state.text;
    // },
    ...mapState(['text'])
  },
  methods:{
    // setText(val){
    //   this.$store.commit('setText', val)
    // }
    ...mapMutations(['setText'])
  },  
}
</script>
<style lang="">
  
</style>