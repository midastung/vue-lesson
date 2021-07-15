import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        text: '',
    },
    mutations:{
        setText(state, val){
            state.text = val;
        }
    }
})

export default store;