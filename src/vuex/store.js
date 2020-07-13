// ./src/vuex/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // Create a globally shared data 'counter' in 'state'
  state: {
    counter: 0,
  },
});
