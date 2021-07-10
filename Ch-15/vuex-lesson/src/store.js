import Vue from 'vue';
import Vuex from 'vuex';
// import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

const url = '';
// const store = new Store({...})
const store = new Vuex.Store({
  state: {
    loading: false,
    todos: [],
  },
  mutations:{
    setTodos(state, todos){
        state.todos = todos;
    },
    setLoading(state, loading){
        state.loading - loading;
    }
  },
  //非同步執行
  // actions不能直接改state裏的屬性
  actions: {
    fetchTodos({commit, dispatch}, payload) {
      //必須是真的promise，如jquery不是原生的promise
      return new Promise(resolve => {
        //多次commit
        commit('setLoading', true);
    
        fetch(`${url}/todos`)
          .then(rs => rs.json())
          .then(todos => {
              commit('setTodos', todos);
              commit('setLoading', false);
              //也可以呼叫多個actions函式
              dispatch('fetchUserInfo');
              resolve();
          })
      })
    },
    fetchUserInfo(){

    }
  }
})

export default store;