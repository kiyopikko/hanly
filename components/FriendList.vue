<template>
  <div>
    <FriendItem
      v-for="(item, i) in list"
      :key="i"
      :to="`${path}${item.id}`"
      :nickname="item.nickname"
      :date="item.date"
      :img="item.img"
    />
  </div>
</template>

<script>
import FriendItem from './FriendItem'

export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  components: {
    FriendItem
  }
}
</script>
