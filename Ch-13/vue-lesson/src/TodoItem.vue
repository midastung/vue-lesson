<template>
    <li class="todo-item"> 
        {{data}}
    </li>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="">
    .todo-item{
        font-size: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #fed;
        margin: 6px 0;
        padding: 4px 8px;
        cursor: pointer;
    }

    .todo-item:hover{
        background-color: #def;
    }
</style>