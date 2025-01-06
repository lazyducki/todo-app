<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todos" v-bind:key="index">{{ todoItem }}
        <button @click="$emit('removeItem', todoItem, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['todos']
  ,
  methods: {
    // removeItem(todoItem, index){
    //   console.log(todoItem, index);
    // }
  },
  // created(){
  //   this.fetchTodoItems();
  // }
}
</script>

<style>

</style>