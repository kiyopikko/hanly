<template>
  <div class="wrap">
    <SignInForm @submit="submit" />
  </div>
</template>

<script>
import SignInForm from '~/components/SignInForm'

export default {
  components: {
    SignInForm
  },
  methods: {
    submit({ email, password }) {
      console.log(email, password)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
