---
sidebar_position: 1
---

# 教程简介

在不到5分钟的时间内了解 **Docusaurus**。

## 入门指南

通过**创建一个新站点**来开始。

或者通过 **[docusaurus.new](https://docusaurus.new)** 立即尝试Docusaurus。

### 所需工具

- [Node.js](https://nodejs.org/en/download/) 版本16.14或更高：
  - 在安装Node.js时，建议勾选与依赖项相关的所有复选框。

## 生成新站点

使用**经典模板**生成一个新的Docusaurus站点。

运行以下命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以将此命令输入到命令提示符、PowerShell、终端或其他代码编辑器的集成终端中。

该命令还会安装运行Docusaurus所需的所有必要依赖项。

## 启动站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd`命令会更改您正在使用的目录。为了使用您新创建的Docusaurus站点工作，您需要导航到该目录。

`npm run start`命令会在本地构建您的网站，并通过开发服务器提供该网站，您可以在 http://localhost:3000/ 查看。

打开 `docs/intro.md`（本页）并编辑一些行：网站会**自动重新加载**并显示您的更改。