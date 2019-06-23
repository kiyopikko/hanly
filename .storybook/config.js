import { configure } from '@storybook/vue'

const req = require.context('../components', true, /story(.)*\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
