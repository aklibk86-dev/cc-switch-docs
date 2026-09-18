import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Aklibk 文档中心',
  description: 'Aklibk API 中转站文档中心：CC Switch 使用教程与完整手册。',
  base: '/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Aklibk 文档中心',
    search: { provider: 'local' },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用手册', link: '/guide/00-使用手册' },
      { text: '接入教程', link: '/guide/01-小白教程' },
      { text: '中转站', link: 'https://ai.aklibk.com' }
    ],
    sidebar: [
      {
        text: '接入教程',
        items: [
          { text: '小白教程（快速上手）', link: '/guide/01-小白教程' },
          { text: 'Codex 桌面版（GUI）', link: '/guide/02-codex' },
          { text: 'Claude Code CLI', link: '/guide/03-claude-code-cli' },
          { text: 'Claude Desktop（GUI）', link: '/guide/04-claude-desktop' },
          { text: 'OpenCode', link: '/guide/05-opencode' },
          { text: 'OpenClaw', link: '/guide/06-openclaw' },
          { text: 'Hermes', link: '/guide/07-hermes' }
        ]
      },
      {
        text: '官方中文手册',
        items: [
          { text: '完整使用手册', link: '/guide/00-使用手册' }
        ]
      }
    ],
    footer: {
      message: 'Aklibk 文档中心',
      copyright: '© Aklibk · ai.aklibk.com'
    }
  }
})
