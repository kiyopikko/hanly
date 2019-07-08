<template>
  <div>
    <PersonDetail
      :nickname="nickname"
      :latitude="latitude"
      :longitude="longitude"
      :datetime="getDateTime"
      :face-image-url="face_image_url"
      :upload-url="uploadUrl"
      :token="token"
      back-path="/friends"
      @uploaded="imageUploaded"
    />
    <BaseButton is-txt @click="logout">ログアウト</BaseButton>
  </div>
</template>

<script>
import PersonDetail from '~/components/PersonDetail'
import BaseButton from '~/components/BaseButton'
import { mapGetters } from 'vuex'

export default {
  components: {
    PersonDetail,
    BaseButton
  },
  data() {
    return {
      token: window.localStorage.getItem('hanly_access_token')
    }
  },
  computed: {
    getDateTime() {
      return this.$dayjs(this.datetime).format('YYYY/MM/DD HH:mm')
    },
    ...mapGetters('me', [
      'face_image_url',
      'nickname',
      'latitude',
      'longitude',
      'datetime'
    ]),
    uploadUrl: () => process.env.baseURL + '/api/me/image'
  },
  methods: {
    imageUploaded(url) {
      this.$store.commit('me/updateImage', url)
    },
    logout() {
      window.localStorage.setItem('hanly_access_token', '')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
