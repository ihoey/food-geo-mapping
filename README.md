<p align="center"><a href="https://www.ihoey.com" target="_blank" rel="noopener noreferrer"><img width="100" src="./public/logo.png" alt="吃货指南 logo"></a></p>

<div align="right">
    语言: :cn:
    <a title="English" href="README_EN.md">
    :us:
    </a>
</div>

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](/LICENSE)
[![CircleCI](https://circleci.com/gh/DreamStacks/food-geo-mapping.svg?style=svg)](https://circleci.com/gh/DreamStacks/food-geo-mapping)

## 本地开发

使用 Node.js 24 LTS（当前固定为 24.21.0）和 pnpm 12.6.0。使用 fnm 时：

```sh
fnm install
fnm use
npm install --global pnpm@12.6.0
pnpm install
pnpm dev
```

运行 `pnpm check` 检查 TypeScript 文件，运行 `pnpm build` 生成 Vercel 服务端部署产物。CI 从 `.node-version` 读取 Node 版本，并使用 `package.json` 中指定的 pnpm 版本。

项目使用 TypeScript 7，已移除尚不支持该版本的 `@astrojs/check`。`pnpm check` 不检查 `.astro` 模板内部的类型；模板编译由 `pnpm build` 验证。

关于页在构建时直接读取本地 `CHANGELOG.md` 并生成静态页面，不请求 GitHub API。新增更新记录后需重新构建部署；运行 `pnpm test` 验证版本、分类和条目的解析。

## 项目目标

- 致力于打造一个关于吃货（水果和特产）的指南
- 让萌新观看并参与大佬们的开发过程
- 让这类有意义的行动逐渐成为趋势并发展
- 欢迎有意向的大佬萌新加入

## 项目需求

### 水果

- 按分类查找（并不一定严格按照纲属种分类）
- 按主要产地查找（一般是块区域）
- 查询该类水果的营养成分，营养价值和主产区

### 地方小吃

- 以地区查找，一般以省市县（区）为主
- 尽可能地了解其做法，历史特色
- 最好说一下一般市场价格

## 主要开发参与人员

### [puppetsheep](https://github.com/puppetsheep)

- 项目发起者、项目规划、UI 设计、文案、部分开发支持
- 博客：[灵魂只应独行](https://puppetsheep.cn/)

### [ihoey](https://github.com/ihoey)

- 项目负责人、技术支持、架构、项目指导
- 博客：[梦魇小栈](https://blog.ihoey.com/)

### [Plus Lin](https://github.com/ljh980703)

- 项目参与者、logo、平面设计、部分开发支持

感谢所有已经为 吃货指南 做出贡献的人！
