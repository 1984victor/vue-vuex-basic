<template>
  <div id="app">
    <h4>view at http://locahost:8080</h4>
    <img src="./assets/logo.png">
    <!--Access shared data-->
    <h2>I am App.vue</h2>
    <h3>String "{{$store.state.str}}" has been changed to "{{ $store.getters.reverseAndToUpper }}"</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
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
