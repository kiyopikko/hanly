export const state = () => ({
  id: 0,
  face_image_url: '',
  nickname: '',
  pin: undefined
})

export const getters = {
  id: state => state.id,
  face_image_url: state => state.face_image_url,
  nickname: state => state.nickname,
  datetime: state => (state.pin ? state.pin.datetime : ''),
  latitude: state => (state.pin ? state.pin.latitude : 0),
  longitude: state => (state.pin ? state.pin.longitude : 0)
}

export const mutations = {
  setFriend(state, { id, face_image_url, nickname, pin }) {
    state.id = id
    state.face_image_url = face_image_url
    state.nickname = nickname
    state.pin = pin
  },
  clearFriend(state) {
    state.id = 0
    state.face_image_url = ''
    state.nickname = ''
    state.pin = undefined
  }
}

export const actions = {
  async fetchFriend({ commit }, { friendId }) {
    const { data } = await this.$axios.get('/api/friends/' + friendId)
    commit('setFriend', data)
  }
}
