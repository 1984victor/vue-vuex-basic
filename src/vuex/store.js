// ./src/vuex/store.js
/* eslint-disable no-plusplus */
import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './moduleA';
import moduleB from './moduleB';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 1000 },
  mutations: {
    increase (state) {
      console.log('store-increase');
      state.counter++;
    },
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
  getters: {
    doubleCounter (state) { return state.counter * state.counter; },
  },
  modules: {
    a: moduleA, b: moduleB,
  },
});
