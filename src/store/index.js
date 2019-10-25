import Vue from 'vue';
import Vuex from 'vuex';
// Vuex modules
import auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
  },
});

export default store;
