import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import SignUpForm from './SignUpForm'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { SignUpForm },
  methods: {
    submit: action('submit')
  }
}

storiesOf('SignUpForm', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('default', () => ({
    ...testObj,
    template: `<SignUpForm @submit="submit" />`
  }))
  .add('sending', () => ({
    ...testObj,
    template: `<SignUpForm :is-sending="true" @submit="submit" />`
  }))
