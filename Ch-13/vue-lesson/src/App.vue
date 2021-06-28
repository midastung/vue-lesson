<template>
  <div>
    <TodoInput @goText="addTodo"/>
    <ul>
      <TodoItem
       v-for="(todo,idx) in todos"
       :data="todo"
       @click.native="removeItem(idx)"
       />
    </ul>
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'
export default {
  data(){
    return{
      todos:[],
    }
  },
  components:{
    TodoInput,
    TodoItem
  },
  methods:{
    addTodo(text){
      this.todos.push(text);
    },
    removeItem(idx){
      this.todos.splice(idx, 1);
    },
  },
};
</script>

<style lang="">
  
</style>