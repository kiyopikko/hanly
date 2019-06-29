import { storiesOf } from '@storybook/vue'
import Loader from './Loader.vue'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { Loader }
}

storiesOf('Loader', module).add('default', () => ({
  ...testObj,
  template: `<Loader />`
}))
