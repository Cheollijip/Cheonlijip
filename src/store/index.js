import Vuex from 'vuex'

const state = {
  isOpenMenu: false,
}

const mutations = {
  IS_OPEN_MENU(state, toggle) {
    state.isOpenMenu = toggle
  },
}

const actions = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store
