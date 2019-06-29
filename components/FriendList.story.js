import { storiesOf } from '@storybook/vue'
import FriendList from './FriendList'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { FriendList },
  data() {
    return {
      list: [
        {
          id: 1,
          nickname: 'Mizuki Matsutani',
          date: '2019/05/21 11:11',
          img: 'https://dummyimage.com/48x48/000/fff'
        },
        {
          id: 2,
          nickname: 'kiyopikko',
          date: '2019/05/21 11:12',
          img: 'https://dummyimage.com/48x48/333/ddd'
        },
        {
          id: 3,
          nickname: 'Kotaro Okuya',
          date: '2019/05/21 11:13',
          img: 'https://dummyimage.com/48x48/555/bbb'
        }
      ]
    }
  }
}

storiesOf('FriendList', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('default', () => ({
    ...testObj,
    template: `<FriendList
      :list="list"
      path="/" />`
  }))
