<template>
  <div class="wrap">
    <SignInForm :is-sending="isSending" @submit="signIn" />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import SignInForm from '~/components/SignInForm'

export default {
  layout: 'account',
  components: {
    SignInForm
  },
  data() {
    return {
      error: '',
      isSending: false
    }
  },
  methods: {
    async signIn({ email, password }) {
      this.isSending = true
      const {
        data: { client_id, client_secret }
      } = await this.$axios.get('/api/oauth/client-credentials')
      try {
        const {
          data: { access_token }
        } = await this.$axios.post('/api/oauth/token', {
          grant_type: 'password',
          client_id,
          client_secret,
          scope: '*',
          username: email,
          password
        })
        window.localStorage.setItem('hanly_access_token', access_token)
        this.$axios.setToken(access_token, 'Bearer') // ログイン後にすぐに使えるように
        this.$router.push('/friends')
      } catch (e) {
        this.isSending = false
        this.error = 'メールアドレスが存在しないか、パスワードが間違っています'
        setTimeout(() => {
          this.error = ''
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
