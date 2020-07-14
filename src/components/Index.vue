<template>
  <div class="hello">
    <h2>My name is Index.vue</h2>
    <h3>Counter B $store.state.b.counter is : {{ $store.state.b.counter }} </h3>
    <h3>syncModify B Counter : <button v-on:click="$store.commit('b/increase')">syncModify B Counter</button></h3>
  </div>
</template>
<script>
export default {
  name: 'Index',
};
</script>
