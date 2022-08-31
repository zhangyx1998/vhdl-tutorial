import { h } from 'vue'
import Theme from 'vitepress/theme'
import './vars.css'
import SideList from './SideList.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'aside-ads-before': () => h(SideList)
    })
  }
}
