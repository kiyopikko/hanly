import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/vue'
import PersonImage from './PersonImage'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { PersonImage },
  methods: {
    uploaded: action('uploaded!')
  }
}

storiesOf('PersonImage', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('no image ', () => ({
    ...testObj,
    template: `<PersonImage upload-url="https://httpbin.org/post" token="hoge" @uploaded="uploaded" />`
  }))
  .add('default', () => ({
    ...testObj,
    template: `<PersonImage src="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-1/p100x100/53540930_2099404910174341_6511290898863620096_n.jpg?_nc_cat=105&_nc_oc=AQkOyzq7kDlBy8lBJeoyiFs2UFVn6nXIYAn3xkHFf-mrUN6lrzUo4hw6pFs-2Xp1u42Er5VvzoxMUxazd7-9a-26&_nc_ht=scontent-nrt1-1.xx&oh=9c6b96fb6dec0c2c5c5ffe4a1e07a33a&oe=5DC687AD" upload-url="https://httpbin.org/post" token="hoge" @uploaded="uploaded" />`
  }))
