<template>
  <div class="app">
      <div class="board">
        <div 
          class="grid" 
          v-for="(grid, idx) in grids"
          @click="setGrid(idx)"
        >
          {{ setSymbol(grid) }}
        </div>
      </div>
      <div class="info">
        <span>Player: {{ setSymbol(player) }}</span>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
    return{
      player: 1,
      //包含9個數值
      grids: [
        0,0,0,
        0,0,0,
        0,0,0
      ]
    };
  },
  methods:{
      setGrid(idx){
        // Vue.set(this.grids, idx, 1)
        this.$set(this.grids, idx, this.player);
        this.player = -this.player;
      },
      setSymbol(num){
        return num === 0 ? '' : num === 1 ? 'O' : 'X';
      }
  },
}
</script>
<style>
.board{
    display:flex;
    flex-flow:row wrap;
    width: 400px;
    height: 400px;
    align-content: flex-start;
}
.grid{
    width: 33%;
    height: 33%;
    border: 1px solid gray;
    box-sizing: border-box;
    font-size:60px;
    text-align:center;
    line-height:130px;
    
}
.info{
    font-size: 40px;
}
  
</style>