<template>
  <div class="person">
    <PersonImage
      :src="face_image_url"
      :upload-url="uploadUrl"
      @uploaded="(url) => $emit('uploaded', url)"
    />
    <h2 class="nickname">{{ nickname }}</h2>
    <div class="mapWrap">
      <PersonMap :latitude="latitude" :longitude="longitude"/>
    </div>
    <p class="datetime">{{ datetime }} 時点</p>
    <div class="buttonWrap">
      <BaseButton>戻る</BaseButton>
    </div>
  </div>
</template>

<script>
import PersonImage from '~/components/PersonImage'
import PersonMap from '~/components/PersonMap'
import BaseButton from '~/components/BaseButton'

export default {
  components: {
    PersonImage,
    PersonMap,
    BaseButton
  },
  props: {
    nickname: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    datetime: {
      type: String,
      required: true
    },
    face_image_url: {
      type: String,
      default:
        'https://res.cloudinary.com/kiyopikko/image/upload/v1561617116/empty-user-image_o4ll8m.png'
    },
    uploadUrl: {
      type: String,
      default: 'https://httpbin.org/post'
    }
  }
}
</script>

<style lang="scss" scoped>
.person {
  margin-top: 2rem;
}

.nickname {
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.mapWrap {
  height: 20rem;
}

.datetime {
  font-size: 0.875rem;
  color: rgba($color: #fff, $alpha: 0.7);
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.buttonWrap {
  padding: 1rem;
}
</style>
