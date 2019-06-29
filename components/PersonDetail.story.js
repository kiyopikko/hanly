import { storiesOf } from '@storybook/vue'
import PersonDetail from './PersonDetail.vue'
import 'ress'
import 'leaflet/dist/leaflet.css'
import '../assets/css/foundation.scss'

const testObj = {
  components: { PersonDetail }
}

storiesOf('PersonDetail', module).add('default', () => ({
  ...testObj,
  template: `<PersonDetail nickname="Kiyohiko Heima" :latitude="33.58948" :longitude="130.418036" datetime="2019/11/22 10:08" />`
}))
