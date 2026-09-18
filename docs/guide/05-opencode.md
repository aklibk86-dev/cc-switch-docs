---
title: "CC Switch 接入 OpenCode：开源编程助手也能用中转站"
date: 2026-09-18 20:00:00
tags: [CC Switch, OpenCode, 中转站, 教程]
categories: [技术折腾]
---

> 生命不息，折腾不止。

OpenCode 是一个开源、免费的终端 AI 编程助手，支持接各种大模型。这篇教小白：用 CC Switch 把 AI 中转站接进 OpenCode，不用翻墙、不用绑卡，一个 Key 开箱即用。

## 一、OpenCode 是什么

OpenCode 是开源社区里的 Claude Code 替代品，完全免费，跑在终端里，支持 OpenAI、Anthropic 等一堆模型接口。它的配置文件是 `opencode.json`，一堆 JSON 新手看着就头大——**CC Switch 帮你管它**。

## 二、准备工作

> <!-- 📷 图片占位：放【CC Switch 应用切换器（OpenCode）】截图（建议 img/cc-switch-opencode-panel.png） -->


1. **中转站 API Key**：后台 → API Keys → 创建，复制 `sk-` Key
2. **Node.js**：nodejs.org 装 LTS 版
3. **装 OpenCode**：官方文档或 GitHub 提供一键安装脚本，按平台执行即可
4. **下载 CC Switch**：官网 ccswitch.io 或 GitHub Releases

## 三、在 CC Switch 里添加 OpenCode 供应商

1. 打开 CC Switch
2. 左侧切换器选 **OpenCode** 应用
3. 点右上角 **+**
4. 预设选 **OpenAI Compatible**（中转站都是兼容 OpenAI 格式的，选这个最稳）
   - 或者选 **自定义** 手动填
5. 填关键信息：
   - **名称**：如 `我的中转站`
   - **API 地址（Base URL）**：`https://ai.aklibk.com/v1`
   - **API Key**：粘贴中转站 Key
   - **模型**：填一个支持的，如 `gpt-4o`
6. 点 **添加**

> <!-- 📷 图片占位：放【OpenCode 添加供应商（OpenAI Compatible 预设）】截图（建议 img/cc-switch-add-opencode.png） -->


> 内置预设里还有 DeepSeek、智谱 GLM、Kimi、MiniMax、硅基流动等一堆，如果你中转站/直连这些，直接选预设只填 Key 更快。

## 四、切换并运行 OpenCode

1. 在 OpenCode 面板点一下刚添加的供应商（选中）
2. 打开终端，输入：
   ```
   opencode
   ```
3. 问一句"你好"——能回复就成功了

> <!-- 📷 图片占位：放【终端 opencode 对话成功】截图（建议 img/opencode-run.png） -->


## 五、常见问题

| 问题 | 解决 |
|------|------|
| 报 401 | API 地址或 Key 填错，核对 |
| 报模型不存在 | 换中转站后台实际有的模型名 |
| 想换模型 | CC Switch 编辑供应商改模型，再切换 |

## 六、总结

OpenCode 接中转站：**下载 CC Switch → OpenCode 面板添加（选 OpenAI Compatible + 填地址 Key）→ 切换 → 终端跑 opencode**。

开源免费 + 一个 Key 通吃全家桶？试试 Aklibk API 中转站（ai.aklibk.com），国内直连、免绑卡、人民币按量付费。

> 下一篇预告：OpenClaw——能接管你电脑的 AI 私人助理，接入教程来了。
