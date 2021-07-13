<template>
    <div>
        <img :src="lesson.cover" width="100"/>
        <span class="title">{{lesson.title}}</span>
        <span class="price">{{lesson.price}}</span>
        <span class="teachers">{{teachers}}</span>
        <div :class="btnClass" @click="addToCart(lesson)">{{btnLabel}}</div>
    </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex';
export default {
    props: ['lesson'],
    computed:{
        ...mapGetters(['isLessonInCart']),
        inCart(){
            this.isLessonInCart(this.lesson);
        },
        btnClass(){
            return {
                buy: true,
                bought: this.inCart,
            }            
        },
        btnLabel(){
            return (
                this.inCart ? '已加入購物車' : '加入購物車'
            );
        },
        teachers(){
            return this.lesson.teachers
                .map(t => t.username)
                .join(',')
        },
        coverstyle(){
            return {
                backgroundImage: `url('$this.lesson.cover')`
            };
        },   
    },
    methods:{
        ...mapMutations(['addToCart']),
    }
}
</script>
<style lang="">
    
</style>