import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BaseButton from './BaseButton'
import 'ress'
import '../assets/css/foundation.scss'

const testObj = {
  components: { BaseButton },
  methods: {
    click: action('click!')
  }
}

storiesOf('BaseButton', module)
  .addDecorator(
    () => `<div style="max-width: 300px; margin: 1rem auto;"><story/></div>`
  )
  .add('button', () => ({
    ...testObj,
    template: `<BaseButton @click="click">テスト</BaseButton>`
  }))
  .add('link', () => ({
    ...testObj,
    template: `<BaseButton to="/test">テスト</BaseButton>`
  }))
  .add('disabled button', () => ({
    ...testObj,
    template: `<BaseButton disabled @click="click">テスト</BaseButton>`
  }))
  .add('disabled link', () => ({
    ...testObj,
    template: `<BaseButton to="/test" disabled>テスト</BaseButton>`
  }))
  .add('multiple', () => ({
    ...testObj,
    template: `<div><BaseButton to="/test">テスト</BaseButton><BaseButton @click="click">テスト</BaseButton></div>`
  }))
