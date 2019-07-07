export default async function({ store, redirect, app: { $axios } }) {
  const token = window.localStorage.getItem('hanly_access_token')
  if (!token) {
    // ユーザーが認証されていないとき
    return redirect('/signin')
  }
  const { data } = await $axios.get('/api/me')
  store.commit('me/setMe', data)
}
