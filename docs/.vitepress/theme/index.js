import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import ShareComponent from './../components/ShareComponent.vue'
//import './custom.css'

export default {
    ...DefaultTheme,
    // override the Layout with a wrapper component that injects the slots
    Layout: MyLayout,
    enhanceApp({ app }) {
      app.component('ShareComponent', ShareComponent)
    }
  }