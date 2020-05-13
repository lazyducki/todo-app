<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todos" v-bind:key="index">
        {{ todoItem }}
        <!-- 아래 삭제 버튼을 눌렀을 때 동작하게 코드를 변경 -->
        <button v-on:click="removeItem(todoItem, index)">
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: [],
    },
  },
  methods: {
    // fetchTodoItems: function() {
    //   //var arr = [];
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var value = localStorage.key(i);
    //     this.todoItems.push(value);
    //   }
    //   //return arr;
    // },
    removeItem: function(todoItem, index) {
      this.$emit('remove', todoItem, index);
      //this.todoItems.splice(index, 1);
      //localStorage.removeItem(todoItem);
    },
  },
  // created: function() {
  //   this.fetchTodoItems();
  // },
};
</script>

<style></style>
