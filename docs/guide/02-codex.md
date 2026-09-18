---
title: "CC Switch 接入 Codex 桌面版（GUI）：Windows 和 Mac 都能用中转站"
date: 2026-09-18 20:00:00
tags: [CC Switch, Codex, 中转站, 教程]
categories: [技术折腾]
---

> 生命不息，折腾不止。

Codex 现在是**有图形界面的桌面应用**了（不用再窝在终端里）。这篇教小白：在 Windows 和 Mac 上装好 Codex 桌面版，再用 CC Switch 把 AI 中转站接进去——重点是 Codex 桌面版**没有内置切换供应商的功能，CC Switch 几乎是必须的**。

## 一、Codex 桌面版是个啥

Codex 是 OpenAI 出的 AI 编程智能体。现在它有**桌面应用（GUI）**，打开就是一个图形窗口，能：
- 同时跑多个 AI 代理线程（每个线程独立干活）
- 集成了 Git（能看代码改动、随时回退）
- 有 Plan 模式（先规划再动手）

**支持平台：**
| 系统 | 要求 |
|------|------|
| macOS | **必须 Apple Silicon**（M1/M2/M3/M4），Intel Mac 不支持 |
| Windows | 2026 年 3 月起支持，下载安装包即可 |
| Linux | 没有图形版，用 Codex CLI（终端版） |

## 二、准备工作

> <!-- 📷 图片占位：放【Codex 桌面版主界面（多线程/项目视图）】截图（建议 img/codex-desktop-main.png） -->
（2 分钟）

1. **中转站 API Key**：登录你的中转站（如 ai.aklibk.com）→ 后台 → API Keys → 创建，复制 `sk-` 开头的 Key
2. **下载 Codex 桌面版**：去 OpenAI 官网（chatgpt.com 或 Codex 官方页面）下载 macOS / Windows 安装包
3. **下载 CC Switch**：官网 ccswitch.io 或 GitHub Releases（只认官方渠道！）

> macOS 如果提示"无法打开，因为来自身份不明的开发者"：右键安装包 → 打开 → 确认即可（Gatekeeper 首次拦截，正常现象）。

## 三、在 CC Switch 里添加 Codex 供应商

**为什么必须用 CC Switch？** Codex 桌面版的界面里**没有切换供应商的按钮**，它只读电脑里的配置文件（`~/.codex/auth.json` 和 `config.toml`）。想用中转站，就得有人帮你改配置——这个人就是 CC Switch。

1. 打开 CC Switch
2. 左侧切换器选 **Codex** 应用
3. 点右上角 **+** 号
4. 预设选 **自定义**
5. 填关键信息：
   - **名称**：如 `我的中转站`
   - **API 地址（Base URL）**：`https://ai.aklibk.com/v1`（OpenAI 兼容端点）
   - **API Key**：粘贴中转站的 `sk-` Key
   - **模型**：填一个支持的模型，如 `gpt-5.2` 或 `gpt-4o`
6. 点 **添加**，再点一下这个供应商（选中 = 生效）

> <!-- 📷 图片占位：放【CC Switch 添加 Codex 供应商面板，Base URL/API Key/模型已填】截图（建议 img/cc-switch-add-codex.png） -->


> CC Switch 会自动写好 Codex 的 `auth.json`（存 `OPENAI_API_KEY`）和 `config.toml`（模型提供商 custom + base_url + wire_api responses），全程不用你碰文件。

## 四、切换并打开 Codex 桌面版

1. 确认 CC Switch 里选中的是你刚加的中转站供应商
2. **重启 Codex 桌面版**（关键！重启才会读新配置）
3. 打开 Codex 窗口，随便问一句

> <!-- 📷 图片占位：放【Codex 桌面版对话成功回复】截图（建议 img/codex-desktop-run.png） -->
"你好"——能回复就成功了

> 桌面版和命令行版（Codex CLI）**共享同一套配置**：你在 CC Switch 里改一次，两边重启后都生效。桌面版当"图形面板"用，CLI 当"脚本自动化"用，互不冲突。

**想切回官方 ChatGPT 账号？** 在 CC Switch 里点回 Codex 官方的供应商，重启 Codex 即可。

## 五、常见问题

| 问题 | 解决 |
|------|------|
| macOS 打不开/提示未信任 | 右键安装包 → 打开 → 确认（Intel Mac 不支持，别硬装） |
| 切换了没反应 | 必须重启 Codex 桌面版 |
| 报 API Key invalid | 确认 CC Switch 填的 Key 是 `sk-` 开头的完整 Key（配置里会自动写成 `OPENAI_API_KEY` 全大写） |
| 报模型不存在 | 换成中转站后台实际提供的模型名 |
| 用 Linux | 没有图形版，用 Codex CLI（CC Switch 也能管它的配置） |

## 六、总结

Codex 桌面版接中转站：**下载 CC Switch → Codex 面板添加（填地址+Key）→ 切换 → 重启 Codex 桌面版**。因为桌面版没内置切换器，CC Switch 这一步逃不掉，但用起来就是"点一下"的事。

Claude、GPT、Gemini 全家桶一个 Key 通吃？试试 Aklibk API 中转站（ai.aklibk.com），国内直连、免绑卡、人民币按量付费。

> 下一篇预告：Claude Code CLI 的接入教程，同样是小白三步走。
