<template>
  <PersonDetail
    :nickname="nickname"
    :latitude="latitude"
    :longitude="longitude"
    :datetime="datetime"
    :face-image-url="faceImageUrl"
    :upload-url="uploadUrl"
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
      nickname: 'Kiyohiko Heima',
      latitude: 33.58948,
      longitude: 130.418036,
      datetime: '2019/11/22 10:08',
      faceImageUrl: undefined,
      uploadUrl: 'http://3.15.44.11/api/me/image'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
