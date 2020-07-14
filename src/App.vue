<template>
  <div id="app">
    <h4>view at http://locahost:8080</h4>
    <img src="./assets/logo.png">
    <!--Access shared data-->
    <h2>I am App.vue</h2>
    <h3>Counter root $store.state.counter is : {{ $store.state.counter }} </h3>
    <h3>Counter A $store.state.a.counter is : {{ $store.state.a.counter }} </h3>
    <h3>Get R $store.getters.doubleCounter : {{ $store.getters.doubleCounter }} </h3>
    <h3>Get A $store.getters.doubleCounterA : {{ $store.getters.doubleCounterA }} </h3>
    <hr />
    <Index></Index>
  </div>
</template>

<script>
import Index  from './components/Index';

export default {
  name: 'App',
  components: { Index },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
