import Vue from 'vue';
import Vuex from 'vuex';
// import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

// const store = new Store({...})
const store = new Vuex.Store({
    state:{
        count: 0,
    },
    mutations:{
        addCount(state){
            state.count += 1;
        }
    }
})

export default store;