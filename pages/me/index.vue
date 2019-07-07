<template>
  <PersonDetail
    :nickname="nickname"
    :latitude="latitude"
    :longitude="longitude"
    :datetime="datetime"
    :face-image-url="face_image_url"
    :upload-url="uploadUrl"
    :token="token"
    back-path="/friends"
    @uploaded="imageUploaded"
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
      face_image_url: undefined,
      uploadUrl: 'https://httpbin.org/post',
      token: 'hoge'
    }
  },
  methods: {
    imageUploaded(url) {
      console.log(url)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
