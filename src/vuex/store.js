// ./src/vuex/store.js
/* eslint-disable no-plusplus */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // Create a globally shared data 'counter' in 'state'
  state: { str: 'hello' },
  getters: {
    reverseAndToUpper (state) {
      return state.str.toUpperCase().split('').reverse().join('');
    },
  },
});
