<template>
    <div>
        <input type="text" v-model="text">
        <div class="lesson-list">
            <div class="lesson" v-for="lesson in lessons">
                <h2>{{lesson.title}}</h2>
            </div>
        </div>
    </div>
</template>
<script>
import debounce from 'lodash/debounce';
import Vue from 'vue'

const SEARCH_API = 'https://hiskio.com/api/v1/courses/search?word=';
export default {
    data(){
        return{
            text:'',
            lessons: [],
        };
    },
    methods:{
        search(val){
           fetch(`${SEARCH_API}${val}`) 
           .then(rs => rs.json())
           .then(data => {
               this.lessons = data.courses;
           });
        }
    },
    watch:{
        text(val){
            this.search(val);
        }
    },
    created(){
        this.searchDebounced = debounce(this.search, 500);
    }
}
</script>
<style lang="">
    
</style>