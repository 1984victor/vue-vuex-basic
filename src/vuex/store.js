// ./src/vuex/store.js
/* eslint-disable no-plusplus */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // Create a globally shared data 'counter' in 'state'
  state: {
    counter: 0,
  },
  mutations: {
    increase (state) { state.counter++; },
    decrement (state) { state.counter--; },
  },
  actions: {
    increaseAction (context) {
      setTimeout(() => { context.commit('increase'); }, 1000);
    },
    decrementAction (context) {
      setTimeout(() => { context.commit('decrement'); }, 1000);
    },
  },
});
