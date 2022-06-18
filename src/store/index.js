import Vuex from 'vuex'
import axios from 'axios'

const state = {
  isOpenMenu: true,
  matjipList: [],
  choiceMatjip: {},
}

const mutations = {
  IS_OPEN_MENU(state, toggle) {
    state.isOpenMenu = toggle
  },
  FETCH_MATJIP_LIST(state, data) {
    state.matjipList = data
  },
  CHOICE_MATJIP(state, data) {
    console.log(data)
    state.choiceMatjip = data
  },
}

const actions = {
  fetchMatjipList({ commit }) {
    axios
      .get('http://211.38.86.92:8090/matjibs')
      .then((res) => {
        commit('FETCH_MATJIP_LIST', res.data)
        commit('CHOICE_MATJIP', res.data[0])
      })
      .catch((error) => console.log(error))
  },
}

const getters = {
  getMatjipList(state) {
    return state.matjipList
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store
