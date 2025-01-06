<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button @click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      var value = this.newTodoItem;
      //App.vue 의 todoItems에 할 일 데이터 값을 추가
      this.$emit('addItem', value);
      this.newTodoItem = "";
    }
  },
}
</script>

<style>

</style>