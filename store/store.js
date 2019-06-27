import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
          title: 'House Finder!!!!'
        }
    },
    mutations: {},
    actions: {},
    getters: {}
})

export default store;