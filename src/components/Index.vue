<template>
  <div class="hello">
    <h2>My name is Index.vue</h2>
    <h3>IndexCounter is : {{$store.state.counter}}</h3>
    <button v-on:click="$store.commit('increase')">Click then Counter incease by 1</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
