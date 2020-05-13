<template>
  <div>
    <input type="text" v-model="inputText" v-on:keyup.enter="addItem" />
    <button v-on:click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    addItem: function() {
      var value = this.inputText;
      // axios.post('todos', {
      //   title: this.inputText,
      // });

      //todoItems에 추가
      this.$emit('addItem', value);
      this.clearInput();
      value = '';
    },
    clearInput: function() {
      this.inputText = '';
    },
  },
};
</script>

<style></style>
