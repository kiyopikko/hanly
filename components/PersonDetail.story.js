import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import PersonDetail from './PersonDetail.vue'
import 'ress'
import 'leaflet/dist/leaflet.css'
import '../assets/css/foundation.scss'

const testObj = {
  components: { PersonDetail },
  methods: {
    uploaded: action('uploaded!')
  }
}

storiesOf('PersonDetail', module)
  .add('default', () => ({
    ...testObj,
    template: `<PersonDetail nickname="Kiyohiko Heima" :latitude="33.58948" :longitude="130.418036" datetime="2019/11/22 10:08" face-image-url="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/53540930_2099404910174341_6511290898863620096_n.jpg?_nc_cat=105&_nc_oc=AQkOyzq7kDlBy8lBJeoyiFs2UFVn6nXIYAn3xkHFf-mrUN6lrzUo4hw6pFs-2Xp1u42Er5VvzoxMUxazd7-9a-26&_nc_ht=scontent-nrt1-1.xx&oh=9c6b96fb6dec0c2c5c5ffe4a1e07a33a&oe=5DC687AD" upload-url="https://httpbin.org/post" token="hoge" @uploaded="uploaded" />`
  }))
  .add('no content', () => ({
    ...testObj,
    template: `<PersonDetail nickname="Kiyohiko Heima" upload-url="https://httpbin.org/post" token="hoge" @uploaded="uploaded" />`
  }))
