<template>
  <div class="hello">
    <h2>My name is Index.vue</h2>
    <h3>Counter B $store.state.b.counter is : {{ $store.state.b.counter }} </h3>
    <h3>Get B $store.getters['b/doubleCounter'] : {{$store.getters['b/doubleCounter']}} </h3>
  </div>
</template>
<script>
export default {
  name: 'Index',
};
</script>
