import { storiesOf } from '@storybook/vue'
import FriendItem from './FriendItem'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { FriendItem }
}

storiesOf('FriendItem', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('default', () => ({
    ...testObj,
    template: `<FriendItem
      img="https://dummyimage.com/48x48/000/fff"
      nickname="Demo User User User User User"
      date="2018/02/23 11:02" />`
  }))
