<template>
  <div class="hello">
    <h2>My name is Index.vue</h2>
    <h3>Counter B $store.state.b.counter is : {{ $store.state.b.counter }} </h3>
    <h3>Use mapState access B Counter : {{ counterB }} </h3>
    <h3>Use mapGetter access B doubleCounter : {{ doubleCounterB }} </h3>
  </div>
</template>
<script>
/* eslint-disable import/first */
import { mapState, mapGetters }  from 'vuex';

export default {
  name: 'Index',
  computed: {
    ...mapState('b', { counterB: 'counter' }),
    ...mapGetters('b', { doubleCounterB: 'doubleCounter' }),
  },
};
</script>
