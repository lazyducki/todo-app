<template>
  <div>
    <!-- <p>{{ msg }}</p>
    <main v-if="show">메인</main> -->
    <todo-header></todo-header>
    <todo-input v-on:addItem="addItem"></todo-input>
    <todo-list v-bind:todos="todoItems" v-on:remove="removeItem"></todo-list>
    <todo-footer v-on:clear="claerList"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter,
  },
  data() {
    //vda
    return {
      todoItems: [],
    };
  },
  methods: {
    fetchTodoItems: function() {
      //var arr = [];
      //this.todoItems = [];
      for (var i = 0; i < localStorage.length; i++) {
        var value = localStorage.key(i);
        this.todoItems.push(value);
      }
      //return arr;
    },
    claerList: function() {
      localStorage.clear();
      this.todoItems = [];
    },
    addItem: function(todoItem) {
      this.todoItems.push(todoItem);
      localStorage.setItem(todoItem, todoItem);
    },
    removeItem: function(todoItem, index) {
      this.todoItems.splive(index, 1);
      localStorage.removeItem(todoItem, index);
    },
  },
  created: function() {
    this.fetchTodoItems();
  },
};
</script>

<style></style>
