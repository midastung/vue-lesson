<template >
    <div>
        <LessonItem 
            v-for="lesson in lessons" 
            :lesson=lesson>
        </LessonItem>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import LessonItem from './LessonItem.vue';

export default {
    components:{
        LessonItem,
    },
        computed: {
       ...mapState(['lessons']),
    },
    methods:{
        ...mapActions(['fetchLessons']),
    },
    mounted() {
        this.fetchLessons();
    },
}
</script>
<style lang="">
    
</style>