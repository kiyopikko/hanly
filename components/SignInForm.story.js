import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import SignInForm from './SignInForm'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { SignInForm },
  methods: {
    submit: action('submit')
  }
}

storiesOf('SignInForm', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('default', () => ({
    ...testObj,
    template: `<SignInForm @submit="submit" />`
  }))
  .add('sending', () => ({
    ...testObj,
    template: `<SignInForm :is-sending="true" @submit="submit" />`
  }))
