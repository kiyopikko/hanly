import { storiesOf } from '@storybook/vue'
import BaseInput from './BaseInput'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { BaseInput },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}

storiesOf('BaseInput', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('default', () => ({
    ...testObj,
    template: `<div>
      <BaseInput v-model="email" placeholder="メールアドレス" type="email" />
      <BaseInput v-model="password" placeholder="パスワード" type="password" />
    </div>`
  }))
