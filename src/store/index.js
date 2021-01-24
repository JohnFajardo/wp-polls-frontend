import Vue from 'vue';
import Vuex from 'vuex';
import pollList from './modules/pollList';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        pollList
    }
});
