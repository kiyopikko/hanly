export const state = () => ({
  friends: [],
  isPinning: false
})

export const getters = {
  friends: state => state.friends,
  isPinning: state => state.isPinning
}

export const mutations = {
  setFriends(state, list) {
    state.friends = list
  },
  addFriends(state, list) {
    state.friends = state.friends.concat(list)
  },
  setPinning(state, isPinning) {
    state.isPinning = isPinning
  }
}

export const actions = {
  async fetchFriends({ commit }) {
    const { data } = await this.$axios.get('/api/friends')
    commit('setFriends', data)
  },
  async pinAndMakeFriends({ commit }, { latitude, longitude }) {
    commit('setPinning', true)
    const { data } = await this.$axios.post('/api/my/pin', {
      latitude,
      longitude
    })
    commit('setPinning', false)
    commit('addFriends', data)
  }
}
