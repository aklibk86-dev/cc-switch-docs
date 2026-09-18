---
title: "CC Switch 接入 Hermes：你的 AI 智能体助手也能用中转站"
date: 2026-09-18 20:00:00
tags: [CC Switch, Hermes, 中转站, 教程]
categories: [技术折腾]
---

> 生命不息，折腾不止。

Hermes 是一个开源的 AI 智能体（Agent）框架，可以接管你的服务器、自动化跑任务。这篇教小白：用 CC Switch 把 AI 中转站接进 Hermes，让智能体用上你的中转站模型，一个 Key 管全家。

## 一、Hermes 是什么

Hermes（Hermes Agent）是 Nous Research 出的开源 AI 智能体框架，跑在服务器/电脑上，能接大模型、调用工具、自动完成任务，还能通过 Telegram、飞书、微信这些平台跟你聊天办事。

它本身支持配置多种模型供应商，但配置在 YAML 文件里——**CC Switch 帮你可视化切换**，点一下就换模型供应商，不用手动改配置。

## 二、准备工作

> <!-- 📷 图片占位：放【CC Switch 应用切换器（Hermes）】截图（建议 img/cc-switch-hermes-panel.png） -->


1. **中转站 API Key**：后台 → API Keys → 创建，复制 `sk-` Key
2. **Node.js**：nodejs.org 装 LTS 版（CC Switch 依赖）
3. **安装 Hermes**：按 Hermes 官方文档安装（有 Docker 和本地两种方式）
4. **下载 CC Switch**：官网 ccswitch.io 或 GitHub Releases

## 三、在 CC Switch 里添加 Hermes 供应商

1. 打开 CC Switch
2. 左侧切换器选 **Hermes** 应用
3. 点右上角 **+**
4. 预设选 **自定义**（Hermes 一般需要手动填）
5. 填关键信息：
   - **名称**：如 `我的中转站`
   - **API 地址（Base URL）**：`https://ai.aklibk.com/v1`（中转站文档为准）
   - **API Key**：粘贴中转站 Key
   - **模型**：填一个支持的模型名
6. 点 **添加**

> <!-- 📷 图片占位：放【Hermes 添加供应商面板已填】截图（建议 img/cc-switch-add-hermes.png） -->


> 不同版本 Hermes 的配置结构可能有差异，添加后先在 CC Switch 里点一下切换，再重启 Hermes 让它重新读取配置。

## 四、切换并验证

1. 在 Hermes 面板点一下刚添加的供应商（选中）
2. 重启 Hermes 智能体
3. 通过它的对话入口（如 Telegram）问一句

> <!-- 📷 图片占位：放【Hermes 对话（Telegram 等入口）回复成功】截图（建议 img/hermes-run.png） -->
"你好"——能回复就成功了

## 五、常见问题

| 问题 | 解决 |
|------|------|
| 切换后没变化 | 重启 Hermes 让它重新读配置 |
| 报 401 | API 地址或 Key 填错 |
| 报模型不存在 | 换中转站后台实际提供的模型名 |
| 报 base_url 格式错 | 确认中转站要求带不带 `/v1` |

## 六、总结

Hermes 接中转站：**下载 CC Switch → Hermes 面板添加（填地址+Key）→ 切换 → 重启 Hermes**。

想让你的 AI 智能体用上全家桶模型、还便宜？试试 Aklibk API 中转站（ai.aklibk.com），国内直连、免绑卡、人民币按量付费。

> 系列预告：CC Switch 支持的应用还剩 Gemini CLI 没讲，下一篇补上，凑齐全家桶。
