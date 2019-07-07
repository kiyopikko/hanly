<template>
  <button v-if="!to" class="btn" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
  <nuxt-link v-else :to="to" class="btn" :class="disabled && 'isDisabled'">
    <slot />
  </nuxt-link>
</template>
  
<script>
export default {
  props: {
    to: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  text-decoration: none;
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
  &:disabled,
  &.isDisabled {
    opacity: 0.3;
  }
}
</style>


