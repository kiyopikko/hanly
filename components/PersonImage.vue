<template>
  <div class="personImage">
    <img
      :id="uploadUrl ? 'pick-avatar' : ''"
      :src="src"
      alt
      width="80"
      class="img"
    />
    <AvatarCropper
      v-if="uploadUrl"
      trigger="#pick-avatar"
      :labels="labels"
      :upload-url="uploadUrl"
      :output-options="{ width: 160, height: 160 }"
      @uploading="isUploading = true"
      @uploaded="handleUploaded"
    />
    <Loader v-if="isUploading" />
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper'
import Loader from './Loader'

export default {
  components: {
    AvatarCropper,
    Loader
  },
  props: {
    src: {
      type: String,
      required: true
    },
    uploadUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isUploading: false
    }
  },
  computed: {
    labels: () => ({
      submit: '完了',
      cancel: 'キャンセル'
    })
  },
  methods: {
    handleUploaded(res) {
      this.isUploading = false
      if (!res.data) return
      this.$emit('uploaded', res.data.face_image_url)
    }
  }
}
</script>

<style lang="scss" scoped>
.personImage {
  color: #222;
  text-align: center;
}
</style>

<style lang="scss">
.avatar-cropper-close {
  text-decoration: none;
}
</style>

