<template>
  <button v-if="!to" class="btn" @click="$emit('click')">
    <slot/>
  </button>
  <nuxt-link v-else :to="to" class="btn">
    <slot/>
  </nuxt-link>
</template>
  
<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  text-align: center;
  cursor: pointer;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0;
  width: 100%;
  height: 3.75rem;
  line-height: 3.75rem;
  border-radius: 4px;
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
  & + & {
    margin-top: 0.75rem;
  }
}
</style>


