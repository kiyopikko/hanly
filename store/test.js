export const state = () => ({
  txt: '' // 初期値
})

export const getters = {
  txt(state) {
    return state.txt //  Vueコンポーネントの data/computed の関係が store では state/getters になる
  }
}

export const mutations = {
  setTxt(state, txt) {
    // ここに非同期処理は書かない
    state.txt = txt // state を更新
  }
}

export const actions = {
  async saveTxt({ commit }, { text }) {
    // const txt = await this.$axios.post(...) 本来はサーバーへリクエスト
    const txt = await getValueAfter100ms(text)
    commit('setTxt', txt) // mutations の setTxt に txt を渡す
  }
}

// 1秒後に値を返すだけの関数、サーバーっぽい挙動にするため。
function getValueAfter100ms(txt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(txt)
    }, 100)
  })
}
