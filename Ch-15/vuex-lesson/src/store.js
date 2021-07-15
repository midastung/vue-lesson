import Vue from 'vue';
import Vuex from 'vuex';
// import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

//可以細分成數個物件來管理state
const todos = {
  namespaced: true,
  state: {
    list:[],
  },
  mutations: {
    //自己的state
    setList(state, payload){
      //...
    },
  },
  getters:{
    //(自state, 自getters, 全域State, 眾getters)
    getLength(state, getters, rootState, rootGetters){
      // 若想要叫member物件裏的state
        rootState.member.username
    }
  },
  actions:{
    // fetchList({commit, dispatch, state, getters, rootState, rootGetters})
    fetchList(context){
      const {commit, dispatch, state, getters, rootState, rootGetters} = context;  
    }
  }
};

const member = {
  namespaced: true,
  state: {
    username: '',
    rank:0,
  },
  mutations:{},
  actions:{
    //  假設有重複名稱的actions函式的話，在App.vue呼叫執行時，則會兩者皆執行。
    fetchList(){
      //...
    },
    //如果想跨取其他物件的mutations...
    fetchList({commit}){
      //取他人
      commit('todos/setList', [1,2,3,4], {root: true});
      //取自己
      commit('setList', [1,2,3,4]);
    }
  },
};

const store = new Vuex.Store({
  //state會因為專案越來越大變得複雜起來
  // state: {
  //   todos: [],
  //   cart: [],
  //   products: [],
  //   username: '',
  //   rank: 0,
  //   notification: [], 
  // },
  modules:{
    todos: todos,
    member: member,
  }
})

export default store;