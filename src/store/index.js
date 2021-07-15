import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './modules/pokemon';
import menu from './modules/menu';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokemon,
    menu
  }
})
