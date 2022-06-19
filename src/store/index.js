import Vuex from 'vuex'
import axios from 'axios'
import { instance } from '../utils/axios'

const state = {
  isOpenModal: false,
  isOpenMenu: true,
  matjipList: [],
  choiceMatjip: {},
}

const mutations = {
  IS_OPEN_MODAL(state, toggle) {
    state.isOpenModal = toggle
  },
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
  SCORE_UPDATE(state, data) {
    state.choiceMatjip = { ...state.choiceMatjip, score: data, is_scored: true }
  },
}

const actions = {
  fetchMatjipList({ commit }, token) {
    instance
      .get('/matjibs', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        commit('FETCH_MATJIP_LIST', res.data)
        commit('CHOICE_MATJIP', res.data[0])
      })
      .catch((error) => console.log(error))
  },
  upDateMatjipScore({ commit }, { matjip_id, score, token }) {
    console.log(token)
    instance
      .post(
        `/matjibs/${matjip_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
        {
          score: score,
        }
      )
      .then((res) => {
        commit('SCORE_UPDATE', res.data)
      })
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
