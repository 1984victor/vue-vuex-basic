// ./src/vuex/moduleA.js
/* eslint-disable no-plusplus */
const moduleA = {
  state: { counter: 5 },
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
  getters: {
    doubleCounter (state) { return state.counter * state.counter; },
  },
};
export default moduleA;
