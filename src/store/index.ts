import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    routerName: 'index'
  },
  getters:{
    USER (state) {
      return state.user
    },
    RouterName (state) {
      return state.routerName
    }
  },
  mutations: {
    GETUSER (state, playload) {
      state.user = playload
    },
    ROUTERNAME (state, playload) {
      state.routerName = playload
    }
  },
  actions: {
    GETUSER_G ({ commit, dispatch }, playload) {
      commit('GETUSER',playload)
    }
  },
  modules: {
      
  }
})