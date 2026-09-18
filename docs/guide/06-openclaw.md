---
title: "CC Switch 接入 OpenClaw：AI 私人助理也能用中转站"
date: 2026-09-18 20:00:00
tags: [CC Switch, OpenClaw, 中转站, 教程]
categories: [技术折腾]
---

> 生命不息，折腾不止。

OpenClaw 是一个开源的 AI 私人助理框架（社区里管它叫"能接管你电脑的 AI 管家"）。这篇教小白：用 CC Switch 把 AI 中转站接进 OpenClaw，让它用上你的中转站模型。

## 一、OpenClaw 是什么

OpenClaw 是开源的 AI 助理框架，可以接入各种大模型，帮你操作电脑、调用工具。它支持一堆模型供应商（DeepSeek、智谱 GLM、通义千问 Qwen、Kimi、MiniMax 等），配置在 `opencode.json` / Clawdbot 相关配置里——**CC Switch 帮你一键管理**。

## 二、准备工作

> <!-- 📷 图片占位：放【CC Switch 应用切换器（OpenClaw）】截图（建议 img/cc-switch-openclaw-panel.png） -->


1. **中转站 API Key**：后台 → API Keys → 创建，复制 `sk-` Key
2. **Node.js**：nodejs.org 装 LTS 版
3. **安装 OpenClaw**：按 OpenClaw 官方文档安装（GitHub 提供一键脚本）
4. **下载 CC Switch**：官网 ccswitch.io 或 GitHub Releases

## 三、在 CC Switch 里添加 OpenClaw 供应商

1. 打开 CC Switch
2. 左侧切换器选 **OpenClaw** 应用
3. 点右上角 **+**
4. 预设选 **自定义**，或者选现成的（DeepSeek / 智谱 GLM / Qwen Coder / Kimi 等，看你中转站/直连哪个）
5. 填关键信息：
   - **名称**：如 `我的中转站`
   - **API 地址（Base URL）**：`https://ai.aklibk.com/v1`
   - **API Key**：粘贴中转站 Key
   - **模型**：填一个支持的模型名
6. 点 **添加**

> <!-- 📷 图片占位：放【OpenClaw 添加供应商面板已填】截图（建议 img/cc-switch-add-openclaw.png） -->


> 选预设的话只需要填 API Key，端点自动填好，最省事。

## 四、切换并启动 OpenClaw

1. 在 OpenClaw 面板点一下刚添加的供应商（选中）
2. 启动 OpenClaw，问一句"你好"

> <!-- 📷 图片占位：放【OpenClaw 启动/对话成功】截图（建议 img/openclaw-run.png） -->
——能回复就成功了

**想换模型/换供应商？** 回 CC Switch 点一下，立刻切换。

## 五、常见问题

| 问题 | 解决 |
|------|------|
| 报 401 | API 地址或 Key 填错 |
| 报模型不存在 | 换中转站后台实际提供的模型名 |
| OpenClaw 启动失败 | 看 OpenClaw 日志；确认 Node.js 版本 ≥ 18 |

## 六、总结

OpenClaw 接中转站：**下载 CC Switch → OpenClaw 面板添加（填地址+Key）→ 切换 → 启动 OpenClaw**。

想让你的 AI 管家用上全家桶模型？试试 Aklibk API 中转站（ai.aklibk.com），国内直连、免绑卡、人民币按量付费。

> 下一篇预告：Hermes——你的 AI 智能体助手，CC Switch 也能管它的配置。
