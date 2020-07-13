<template>
  <div id="app">
    <h4>view at http://locahost:8080</h4>
    <img src="./assets/logo.png">
    <!--Access shared data-->
    <h2>I am App.vue</h2>
    <h3>App.Counter is : {{$store.state.counter}}</h3>
    <button v-on:click="$store.commit('decrement')">Click then Counter decrement by 1</button>
    <hr />
    <Index></Index>
  </div>
</template>

<script>
import Index from './components/Index';

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
