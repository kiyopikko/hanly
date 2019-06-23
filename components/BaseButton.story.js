import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'
import BaseButton from './BaseButton'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { BaseButton },
  methods: {
    change: action('change!')
  }
}

storiesOf('BaseButton', module)
  .addDecorator(centered)
  .add('default', () => ({
    ...testObj,
    template: `<BaseButton @myclick="change">テスト</BaseButton>`
  }))
  .add('red', () => ({
    ...testObj,
    template: `<BaseButton @myclick="change" clr="red">テスト</BaseButton>`
  }))
