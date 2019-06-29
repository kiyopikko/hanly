import { storiesOf } from '@storybook/vue'
import PersonMap from './PersonMap.vue'
import 'ress'
import 'leaflet/dist/leaflet.css'
import '../assets/css/foundation.scss'

const testObj = {
  components: { PersonMap }
}

storiesOf('PersonMap', module).add('default', () => ({
  ...testObj,
  template: `<div style="height: 20rem"><PersonMap  :latitude="33.58948" :longitude="130.418036" /></div>`
}))
