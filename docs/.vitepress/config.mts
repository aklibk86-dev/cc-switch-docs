import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CC Switch 使用指南',
  description: 'CC Switch 使用文档：一键切换 Claude Code / Codex / Gemini 等 AI 工具配置，小白友好接入中转站。',
  base: '/',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: 'CC Switch 使用指南',
    search: { provider: 'local' },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用手册', link: '/guide/00-使用手册' },
      { text: '接入教程', link: '/guide/01-小白教程' },
      { text: '官方资源', link: 'https://ccswitch.io' }
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
      message: 'CC Switch 使用指南 · 基于官方 farion1231/cc-switch 文档整理',
      copyright: '仅供学习参考，请认准官网 ccswitch.io'
    }
  }
})
