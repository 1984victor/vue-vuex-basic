<template>
  <div class="hello">
    <h2>My name is Index.vue</h2>
    <h3>Counter B $store.state.b.counter is : {{ $store.state.b.counter }} </h3>
    <h3>asyncModify B Counter : <button v-on:click="$store.dispatch('b/increaseAction')">asyncModify B Counter</button></h3>
  </div>
</template>
<script>
export default {
  name: 'Index',
};
</script>
