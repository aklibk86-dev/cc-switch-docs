---
title: "CC Switch 接入 Claude Desktop（桌面版）：Windows 和 Mac 都能用中转站"
date: 2026-09-18 20:00:00
tags: [CC Switch, Claude Desktop, 中转站, 教程]
categories: [技术折腾]
---

> 生命不息，折腾不止。

Claude Desktop 是 Anthropic 的桌面图形客户端（支持 MCP 能力那个）。这篇教小白：在 Windows 和 Mac 上装好 Claude Desktop，再用 CC Switch 把 AI 中转站接进去——**和 Codex 桌面版一个道理：Claude Desktop 界面里没有切换供应商的按钮，想用中转站，CC Switch 几乎是必须的**。

## 一、Claude Desktop 是个啥

Claude Desktop 是一个**图形窗口的聊天客户端**，装好就是一个应用，打开就能跟 Claude 对话，还支持 MCP（连外部工具）。

**两个容易搞混的东西：**

| | Claude Code（CLI） | Claude Desktop（桌面版） |
|---|---|---|
| 形态 | 终端命令行 | 图形窗口应用 |
| 配置位置 | `~/.claude/settings.json` | 独立的 3P profile |
| CC Switch 里显示 | 「Claude」 | 「Claude Desktop」 |

**支持平台：** macOS（需 Apple Silicon）和 Windows；Linux 暂不支持写入 Claude Desktop 配置（Linux 用 CLI 版）。

**关键点（和 Codex 桌面版一样）：** Claude Desktop 的界面里**没有切换供应商的按钮**，它只认电脑里的 3P profile 配置。想用中转站？就得有人帮你改配置——这个人就是 CC Switch。

## 二、准备工作

> <!-- 📷 图片占位：放【Claude Desktop 桌面客户端主界面】截图（建议 img/claude-desktop-main.png） -->
（2 分钟）

1. **中转站 API Key**：登录你的中转站（如 ai.aklibk.com）→ 后台 → API Keys → 创建，复制 `sk-` 开头的 Key
2. **下载 Claude Desktop**：去 Claude 官网下载 macOS / Windows 安装包，装好
3. **下载 CC Switch**：官网 ccswitch.io 或 GitHub Releases（只认官方渠道！）

## 三、在 CC Switch 里添加 Claude Desktop 供应商

**最省事的路径（推荐）：一键导入**

如果你已经在 CC Switch 的 Claude Code（CLI）里配过中转站，直接切到 **Claude Desktop** 面板，点 **「将 Claude Code 中已有的供应商导入」**——几秒钟复制过来，不用重新填。

**或者手动添加：**

1. 打开 CC Switch，左侧切换器选 **Claude Desktop**
2. 点右上角 **+** 号
3. 预设选 **自定义**（或选一个中转服务预设）
4. 填关键信息：
   - **名称**：如 `我的中转站`
   - **API 地址（Base URL）**：`https://ai.aklibk.com`（以中转站文档为准）
   - **API Key**：粘贴中转站的 Key
5. **关键一步：「需要模型映射」开关**
   - 模型是 `claude-sonnet-*` / `claude-opus-*` / `claude-haiku-*` 官方三档 → **关掉**（直连模式）
   - 模型是 DeepSeek / Kimi / GLM 等国产模型、或旧式 Claude ID → **打开**（CC Switch 本地网关帮你映射成 Sonnet/Opus/Haiku）
6. 点 **添加**，再点一下这个供应商（选中 = 生效）

> <!-- 📷 图片占位：放【CC Switch 添加 Claude Desktop 供应商面板，含「需要模型映射」开关】截图（建议 img/cc-switch-add-desktop.png） -->


## 四、切换并打开 Claude Desktop

1. 确认 CC Switch 里选中了你刚加的中转站供应商
2. **重启 Claude Desktop**（关键！重启才会读新配置）
3. 打开 Claude Desktop 窗口，随便问一句

> <!-- 📷 图片占位：放【Claude Desktop 窗口对话成功回复】截图（建议 img/claude-desktop-run.png） -->
"你好"——能回复就成功了

> 注意：Claude Desktop 和 Claude Code CLI 是**两个独立应用**，配置各管各的。你在 CC Switch 里切了 Desktop，不影响 CLI，反之亦然（两边都要的话，两个面板各加一次、各切一次）。

**想切回官方登录？** 在 CC Switch 里选「Claude Desktop Official」，重启客户端即恢复。

## 五、常见问题

| 问题 | 解决 |
|------|------|
| 切换了没反应 | 必须重启 Claude Desktop 才生效 |
| 报模型不支持 | 检查「需要模型映射」开关是否该打开 |
| 找不到 Claude Desktop 入口 | 设置 → 通用 → 应用可见性，确认没被隐藏 |
| 导入时被跳过 | 模型映射无法判断的供应商会跳过，手动添加 |
| 用 Linux | 暂不支持，用 Claude Code CLI 版 |

## 六、总结

Claude Desktop 接中转站：**下载 CC Switch → Claude Desktop 面板添加（或从 CLI 一键导入）→ 切换 → 重启 Claude Desktop**。桌面版没有内置切换器，CC Switch 这一步逃不掉，但用起来就是"点一下 + 重启"。

Claude、GPT、Gemini 全家桶一个 Key 通吃？试试 Aklibk API 中转站（ai.aklibk.com），国内直连、免绑卡、人民币按量付费。

> 下一篇预告：OpenCode 这个开源编程助手的接入教程，同样是小白三步走。
