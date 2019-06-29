<template>
  <form class="form" @submit.prevent="$emit('submit', { email, password })">
    <BaseInput v-model="email" placeholder="メールアドレス" type="email"/>
    <BaseInput v-model="password" placeholder="パスワード" type="password"/>
    <BaseButton class="mts">ログイン</BaseButton>
  </form>
</template>

<script>
import BaseButton from './BaseButton'
import BaseInput from './BaseInput'

export default {
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
