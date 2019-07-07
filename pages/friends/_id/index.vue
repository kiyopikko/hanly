<template>
  <PersonDetail
    :nickname="nickname"
    :latitude="latitude"
    :longitude="longitude"
    :datetime="getDateTime"
    :face-image-url="face_image_url"
    back-path="/friends"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import PersonDetail from '~/components/PersonDetail'

export default {
  components: {
    PersonDetail
  },
  computed: {
    getDateTime() {
      return this.$dayjs(this.datetime).format('YYYY/MM/DD HH:mm')
    },
    ...mapGetters('friend', [
      'id',
      'face_image_url',
      'nickname',
      'latitude',
      'longitude',
      'datetime'
    ])
  },
  asyncData({ params, store }) {
    store.dispatch('friend/fetchFriend', { friendId: params.id })
    return {}
  },
  destroyed() {
    this.$store.commit('friend/clearFriend')
  }
}
</script>

<style lang="scss" scoped>
</style>
