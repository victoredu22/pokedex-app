export default{
  namespaced:true,
  state:{
    pokemon:[],
    active:''
  },
  mutations:{
    startPokemon(state,payload){
      state.pokemon = payload
    },
    activePokemon(state, payload){
      state.active = payload; 
    },
    changeEstado(state,payload){
      state.pokemon = state.pokemon.map(p=>p.id === payload.id 
        ? ({...p, estado: payload.estado})
        : ({...p,}))

      if(state.active != ""){
        state.active.estado = payload.estado
      }
  
    },
    disablePokemon(state,payload){
      state.pokemon = state.pokemon.map(p=>
        p.name.toLocaleLowerCase().includes(payload) 
        ? ({...p, visible: true})
        : ({...p, visible: false})  
      )
    },
    enabledPokemon(state,payload){
      state.pokemon = state.pokemon.map(p=>({...p, visible:true}))
    }
  },
  actions:{
    startPokemon({ commit }, payload){
      commit("startPokemon",payload)
    },
    activePokemon({commit},payload){
      commit("activePokemon",payload)
    },
    changeEstado({commit}, payload){
      commit("changeEstado", payload)
    },
    disablePokemon({commit}, payload){
      commit('disablePokemon',payload)
    },
    enabledPokemon({commit},payload){
      commit('enabledPokemon',payload)
    }
  },
  getters:{

  }
}