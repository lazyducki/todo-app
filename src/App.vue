<template>
  <div id="app">
    <!-- {{ msg }} -->
    <todo-header></todo-header>
    <todo-input v-on:addItem="addItem"></todo-input>
    <todo-list v-bind:todos="todoItems" v-on:removeItem="removeItem"></todo-list>
    <todo-footer v-on:clear="clearItems"></todo-footer>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    fetchTodoItems() {
      // var arr = [];
      for(var i = 0; i < localStorage.length; i++){
        var value = localStorage.key(i);
        // arr.push(value);
        this.todoItems.push(value);
      }
      // return arr;
    },
    clearItems(){
      this.todoItems = [];
      localStorage.clear();
    },
    addItem(item){
      this.todoItems.push(item)
      localStorage.setItem(item, item);
    },
    removeItem(item, index){
      console.log(item, index);
      //배열변경
      this.todoItems.splice(index ,1);
      //저장소 변경
      localStorage.removeItem(item);
    }
  },
  created () {
    this.fetchTodoItems();
  },
}
</script>

<style>

</style>