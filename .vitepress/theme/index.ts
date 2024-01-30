import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FeatureComponent from '../components/FeatureComponent/index.vue'
import Left from '../components/FeatureComponent/left.vue'
import Right from '../components/FeatureComponent/right.vue'
import Titles from '../components/Titles.vue'
import '../styles/index.scss'
import '../styles/icnos.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('FeatureComponent', FeatureComponent)
    app.component('Titles', Titles)
    app.component('Left', Left)
    app.component('Right', Right)
  },
} satisfies Theme
