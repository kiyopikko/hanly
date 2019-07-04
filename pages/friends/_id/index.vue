<template>
  <PersonDetail
    :nickname="nickname"
    :latitude="latitude"
    :longitude="longitude"
    :datetime="datetime"
    :face-image-url="faceImageUrl"
    back-path="/friends"
  />
</template>

<script>
import PersonDetail from '~/components/PersonDetail'

export default {
  components: {
    PersonDetail
  },
  data() {
    // 本来はstoreのデータをバインド
    return {
      nickname: 'Kotaro Okuya',
      latitude: 33.58948,
      longitude: 130.418036,
      datetime: '2019/11/22 10:08',
      faceImageUrl: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
