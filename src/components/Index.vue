<template>
  <div class="hello">
    <h2>My name is Index.vue</h2>
    <h3>IndexCounter is : {{$store.state.counter}}</h3>
    <button v-on:click="$store.dispatch('increaseAction')">Click, wait for 1 second, Counter will increase by 1</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
