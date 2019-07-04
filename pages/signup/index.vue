<template>
  <div class="wrap">
    <SignUpForm @submit="submit" />
  </div>
</template>

<script>
import SignUpForm from '~/components/SignUpForm'

export default {
  components: {
    SignUpForm
  },
  methods: {
    submit({ nickname, email, password }) {
      console.log(nickname, email, password)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
