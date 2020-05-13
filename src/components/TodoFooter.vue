<template>
  <div>
    <!-- <button v-on:click="removeAllIem()"> -->
    <button v-on:click="$emit('clear')">
      removeAll
    </button>
  </div>
</template>

<script>
export default {
  data() {
    //vda
    return {
      todoItems: [],
    };
  },
  methods: {
    removeAllIem: function() {
      console.log('click removeAll', localStorage.length);
      this.$emit('clear');
      // for (var i = 0; i < localStorage.length; i++) {
      //   localStorage.removeItem(i);
      // }
    },
  },
};
</script>

<style></style>
