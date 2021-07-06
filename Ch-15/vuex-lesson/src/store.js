import Vue from 'vue';
import Vuex from 'vuex';
// import Vuex, {Store} from 'vuex';

Vue.use(Vuex);

// const store = new Store({...})
const store = new Vuex.Store({
    state:{
        count: 0,
        editor: {
            text:''
        },
    },
    //只能做同步操作
    mutations:{
        addCount(state, payload){
            state.count += payload;
            //不能這樣寫
            //state.loading = true
            // state本身沒有此屬性的話，要呼叫要使用Vue.set(...)
            // Vue.set(state, 'loading', true);

            //指定editor中的text
            //Vue.set(state.editor, 'text', true);
            // state.editor = {...state.editor, loading:true}
        }
    }
})

export default store;