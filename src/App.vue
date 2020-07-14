<template>
  <div id="app">
    <h4>view at http://locahost:8080</h4>
    <img src="./assets/logo.png">
    <!--Access shared data-->
    <h2>I am App.vue</h2>
    <h3>Counter root $store.state.counter is : {{ $store.state.counter }} </h3>
    <h3>Counter A $store.state.a.counter is : {{ $store.state.a.counter }} </h3>
    <h3>Use mapState access R Counter : {{ counter }} </h3>
    <h3>Use mapState access A Counter : {{ counterA }} </h3>
    <h3>Use mapGetter access R Counter : {{ doubleCounter }} </h3>
    <h3>Use mapGetter access A Counter : {{ doubleCounterA }} </h3>
    <hr />
    <Index></Index>
  </div>
</template>

<script>
/* eslint-disable import/first */
import Index  from './components/Index';
import { mapState, mapGetters }  from 'vuex';

export default {
  name: 'App',
  components: { Index },
  computed: {
    ...mapState({ counter: 'counter' }),
    ...mapState('a', { counterA: 'counter' }),
    ...mapGetters({ doubleCounter: 'doubleCounter' }),
    ...mapGetters('a', { doubleCounterA: 'doubleCounter' }) },
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
