import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import modules from './modules';
import persistanceConfig from './persistence.config';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules,
	plugins: [
		createPersistedState(persistanceConfig),
	],
});
