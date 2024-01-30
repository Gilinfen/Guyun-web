import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Guyun',
  description: '直播 Ai 助手',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用教程', link: '/docs/examples.md' },
    ],

    sidebar: [
      { text: '使用教程', link: '/docs/examples.md' },
      { text: '更新日志', link: '/docs/logs.md' },
    ],
  },
})
