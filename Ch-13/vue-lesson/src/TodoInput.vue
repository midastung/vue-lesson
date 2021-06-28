<template>
    <div>
        <form @submit.prevent="textSubmit">
            <input type="text" v-model="text">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            text: '',
        }
    },
    methods: {
        textSubmit(){
            this.$emit('goText', this.text);
            this.text = " ";
        }
    },
}
</script>