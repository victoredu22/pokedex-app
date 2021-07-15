export default {
	namespaced: true,
	state: {
		menu: [
			{
				id: 0,
				title: "All",
				estado: true,
				url:'/list'
			},
			{
				id: 1,
				title: "Favorites",
				estado: false,
				url:'/favorite'
			},
		],
	},
	mutations: {
		activeMenu(state, payload) {
			state.menu = state.menu.map((m) =>
				m.id === payload ? { ...m, estado: true } : { ...m, estado:false }
			);

		},
	},
	actions: {
		activeMenu({ commit }, payload) {
			commit("activeMenu", payload);
		},
	},
	getters: {},
};
