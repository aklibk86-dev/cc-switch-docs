---
title: "CC Switch 接入 Claude Code CLI：终端 AI 编程助手用上中转站"
date: 2026-09-18 20:00:00
tags: [CC Switch, Claude Code, 中转站, 教程]
categories: [技术折腾]
---

> 生命不息，折腾不止。

Claude Code 是现在最火的终端 AI 编程助手。这篇教小白：用 CC Switch 把 AI 中转站接进 Claude Code CLI，不用 Anthropic 官方账号、不用绑海外卡，一个 Key 就能在终端里用上 Claude 全家桶。

## 一、Claude Code CLI 是什么

Claude Code 跑在终端（命令行）里，你打字问它，它帮你读代码、改代码、跑命令，是程序员的新宠。

它官方只认 Anthropic 账号，配置存在 `~/.claude/settings.json` 里（一堆 JSON，小白看不懂）。**CC Switch 就是帮你看懂它、一键改它**的小工具。

## 二、准备工作

> <!-- 📷 图片占位：放【CC Switch Claude 面板（CLI 版）】截图（建议 img/cc-switch-claude-panel.png） -->
（2 分钟）

1. **中转站 API Key**：登录你的中转站（如 ai.aklibk.com）→ 后台 → API Keys → 创建，复制 `sk-` 开头的 Key
2. **Node.js**：nodejs.org 装 LTS 版，cmd 里 `node --version` 验证
3. **装 Claude Code**：终端执行
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   下载慢就换镜像：
   ```
   npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
   ```

## 三、在 CC Switch 里添加供应商

1. 打开 CC Switch（官网 ccswitch.io 或 GitHub Releases 下载）
2. 左侧切换器选 **Claude** 应用（图标右下角没小方块的就是 CLI 版）
3. 点右上角 **+** 号
4. 预设选 **自定义**
5. 填三个关键信息：
   - **名称**：如 `我的中转站`
   - **API 地址（Base URL）**：填 `https://ai.aklibk.com`（中转站文档为准，有的要带 `/v1`）
   - **API Key**：粘贴中转站的 Key
6. 点模型框旁的 **获取模型** 按钮自动拉列表，或手动填（如 `claude-sonnet-4-5`）
7. 点 **添加**

> <!-- 📷 图片占位：放【Claude 添加供应商自定义表单已填】截图（建议 img/cc-switch-add-cli.png） -->


> CC Switch 会自动把 `ANTHROPIC_API_KEY` 和 `ANTHROPIC_BASE_URL` 写进 `~/.claude/settings.json`，全程你不用看 JSON。

## 四、切换并运行 Claude Code

1. 在 CC Switch 的 Claude 面板点一下刚添加的供应商（选中）
2. 打开终端，输入：
   ```
   claude
   ```
3. 问一句"你好"——能回复就成功了

> <!-- 📷 图片占位：放【终端 claude 对话成功】截图（建议 img/claude-cli-run.png） -->


**想切回官方账号？** 点回「Claude 官方」供应商即可。

## 五、常见问题

| 问题 | 解决 |
|------|------|
| 报 401 | API 地址或 Key 填错，回去核对 |
| 拉不到模型 | 手动填模型名 |
| 想换模型 | 回 CC Switch 编辑供应商改模型，再点一下切换 |
| 报错看不懂 | 终端跑 `claude doctor` 看诊断 |

## 六、总结

Claude Code CLI 接中转站：**下载 CC Switch → Claude 面板添加（填地址+Key）→ 点一下切换 → 终端跑 claude**。

Claude、GPT、Gemini 全家桶一个 Key 通吃？试试 Aklibk API 中转站（ai.aklibk.com），国内直连、免绑卡、人民币按量付费。

> 下一篇预告：Claude Desktop 桌面客户端的接入教程，注意它和 CLI 的配置不是一回事。
