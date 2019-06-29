import { storiesOf } from '@storybook/vue'
import PersonImage from './PersonImage'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { PersonImage }
}

storiesOf('PersonImage', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('default', () => ({
    ...testObj,
    template: `<PersonImage src="https://res.cloudinary.com/kiyopikko/image/upload/v1561617116/empty-user-image_o4ll8m.png" upload-url="https://httpbin.org/post" />`
  }))
