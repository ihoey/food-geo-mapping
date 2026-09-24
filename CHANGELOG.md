# 更新日志

根据 master 分支已合入的 Git 历史，按月份归档并重新编排版本号，以下按时间倒序展示。

归档规则：同一月份合入的变更归为一个版本，以该月最后一次合入或直接提交的日期为版本日期（Asia/Shanghai）。跨月 PR 按合入时间归档，不按分支上的原始提交时间归档；没有合入变更的月份不单独生成版本。

版本规则：2019 年 5 月的项目初版从 1.0.0 开始，功能更新递增次版本，修复和依赖维护递增补丁版本，2024 年 3 月迁移至 Astro 从 2.0.0 开始。这些编号用于历史归档，不沿用原有 Git 标签，也不代表实际发布记录；Git 标签和 package.json 版本不随本日志变更。

同一事项的重复提交、回滚后重新合入及纯合并记录已合并说明；依赖更新按每个归档版本内的升级结果归纳。条目链接指向具体提交，版本标题链接指向对应的提交范围（初版链接指向截至该版本的提交历史）。

## [2.1.0](https://github.com/DreamStacks/food-geo-mapping/compare/7ee70ca07b56ae7686552e9787a99e1214c7673e...1e6e45de9c92171c3c2675dae955d74cb46840f5) (2026-09-24)

### 页面与体验

* 恢复小吃和水果分类路由，修复首页入口 404，并完善分类页的占位内容。 ([9edf1c2](https://github.com/DreamStacks/food-geo-mapping/commit/9edf1c2a87d9ad54bdbaf2538386ca3835d75814))
* 优化首页按钮说明、Logo 留白、全屏背景与响应式布局，适配大屏和移动端。 ([9edf1c2](https://github.com/DreamStacks/food-geo-mapping/commit/9edf1c2a87d9ad54bdbaf2538386ca3835d75814))
* 引入本地托管的思源黑体和 Manrope 字体，统一导航、页脚与页面视觉样式。 ([9edf1c2](https://github.com/DreamStacks/food-geo-mapping/commit/9edf1c2a87d9ad54bdbaf2538386ca3835d75814))
* 重整团队介绍的成员排版与资料展示，将头像资源保存到本地。 ([1e6e45d](https://github.com/DreamStacks/food-geo-mapping/commit/1e6e45de9c92171c3c2675dae955d74cb46840f5))
* 重新设计关于页面，直接读取本地 CHANGELOG.md 并预渲染，按版本折叠展示记录和提交链接，移除远程日志 API。 ([1e6e45d](https://github.com/DreamStacks/food-geo-mapping/commit/1e6e45de9c92171c3c2675dae955d74cb46840f5))

### 依赖与工程

* 升级至 Astro 7.3.4、TypeScript 7.0.2、Vercel 适配器 11.0.11 和 Sass 1.105.0。 ([0534b3f](https://github.com/DreamStacks/food-geo-mapping/commit/0534b3fd44709ef7f8ffc0639d5aa9ec437ed4a0))
* 统一使用 Node.js 24.21.0 LTS 与 pnpm 12.6.0，更新运行环境和依赖锁文件。 ([0534b3f](https://github.com/DreamStacks/food-geo-mapping/commit/0534b3fd44709ef7f8ffc0639d5aa9ec437ed4a0))
* 移除不兼容 TypeScript 7 的 @astrojs/check，使用 tsc --noEmit 检查 TypeScript。 ([0534b3f](https://github.com/DreamStacks/food-geo-mapping/commit/0534b3fd44709ef7f8ffc0639d5aa9ec437ed4a0))
* 新增日志解析测试，并在持续集成中执行测试、类型检查和构建。 ([1e6e45d](https://github.com/DreamStacks/food-geo-mapping/commit/1e6e45de9c92171c3c2675dae955d74cb46840f5))

## [2.0.2](https://github.com/DreamStacks/food-geo-mapping/compare/be55f69539ddaed32423d63ba4418cb9e1bd311d...7ee70ca07b56ae7686552e9787a99e1214c7673e) (2024-09-09)

### 依赖维护

* 将 micromatch 从 4.0.5 升级至 4.0.8。 ([30e9594](https://github.com/DreamStacks/food-geo-mapping/commit/30e9594a7f82f7c94e82a4244c052a1fdeeb72c3))

## [2.0.1](https://github.com/DreamStacks/food-geo-mapping/compare/704c157e2a4c8490dda5d1b6d816e766b12470de...be55f69539ddaed32423d63ba4418cb9e1bd311d) (2024-04-18)

### 依赖维护

* 将 tar 从 6.2.0 升级至 6.2.1。 ([b49d4d4](https://github.com/DreamStacks/food-geo-mapping/commit/b49d4d440aee281cf7613b47681ec236b7c636be))

## [2.0.0](https://github.com/DreamStacks/food-geo-mapping/compare/4dc6f1310f28adba0d5e14f3c66a3534168b7407...704c157e2a4c8490dda5d1b6d816e766b12470de) (2024-03-07)

### 架构与页面

* 从 Vue、Koa 和自建 SSR 架构迁移至 Astro，重建页面、组件与布局。 ([61e39db](https://github.com/DreamStacks/food-geo-mapping/commit/61e39db342665520b9668e36a20bfe872d09aba9))
* 修正导航和首页链接的路径。 ([bb80616](https://github.com/DreamStacks/food-geo-mapping/commit/bb806168cfdf45731b978c098b5798e6cb3ef549))

### 构建与部署

* 将包管理器从 Yarn 切换为 pnpm。 ([0ae4299](https://github.com/DreamStacks/food-geo-mapping/commit/0ae4299ce40c95a71dde5004ab7351181102b83c))
* 接入 Vercel 部署。 ([beeb67a](https://github.com/DreamStacks/food-geo-mapping/commit/beeb67a5de0804385ddb3cc5b8ff45709a67908d))
* 新增 Astro GitHub Actions 工作流，并统一工作流文件命名。 ([a8cd203](https://github.com/DreamStacks/food-geo-mapping/commit/a8cd203d4ee16eb5ad57260d4a90fd04e3ccc044))
* 移除 GitHub Pages 部署步骤。 ([03fb939](https://github.com/DreamStacks/food-geo-mapping/commit/03fb939db2cf32115939d49970b8759c2f130d2e))
* 整理构建工作流并更新 Node.js 环境配置。 ([4097742](https://github.com/DreamStacks/food-geo-mapping/commit/4097742fcfb1f3bd27f3fe7975bf56411920af30))
* 移除工作流中不适用的 branding 配置。 ([7de5ec0](https://github.com/DreamStacks/food-geo-mapping/commit/7de5ec0df070eef0bdef5adc85c126b13ec838f2))
* 修复 ESLint 和 node-sass 构建问题。 ([77c1fa2](https://github.com/DreamStacks/food-geo-mapping/commit/77c1fa2f4edf5dd13b0d78560e56728d0a4d1fb5))
* 调整 CircleCI 配置以处理证书验证失败的问题。 ([2a87616](https://github.com/DreamStacks/food-geo-mapping/commit/2a876162c7a9634604ddd79af2c9ec279cce1100))

### 文档与依赖

* 修复 README 图片显示不完整的问题。 ([cc36486](https://github.com/DreamStacks/food-geo-mapping/commit/cc36486f74cc43450022d28847f16ce74008b89a))
* 更新中英文 README 的 Logo 地址。 ([704c157](https://github.com/DreamStacks/food-geo-mapping/commit/704c157e2a4c8490dda5d1b6d816e766b12470de))
* 将 follow-redirects 从 1.15.3 升级至 1.15.4。 ([58b0af1](https://github.com/DreamStacks/food-geo-mapping/commit/58b0af105b263ee8355efc75201ce4a48582d17c))
* 将 ip 从 1.1.5 升级至 1.1.9。 ([3785067](https://github.com/DreamStacks/food-geo-mapping/commit/378506792804f7952ce0a46ac61c952c3b03c115))

## [1.3.5](https://github.com/DreamStacks/food-geo-mapping/compare/4f30c2b7535d796816b6c907695740c4c43b8148...4dc6f1310f28adba0d5e14f3c66a3534168b7407) (2024-01-02)

### 依赖维护

* 将 Axios 从 0.23.0 升级至 1.6.0。 ([18523d5](https://github.com/DreamStacks/food-geo-mapping/commit/18523d548c732c31ba282161e28e0643d201d1b0))
* 将 browserify-sign 从 4.2.1 升级至 4.2.2。 ([b8f4c7d](https://github.com/DreamStacks/food-geo-mapping/commit/b8f4c7d5f4227d69e67ba5bb15effcd436755002))

## [1.3.4](https://github.com/DreamStacks/food-geo-mapping/compare/ed4a21dbcda2eff7d7acafe61abe377f77cc63c5...4f30c2b7535d796816b6c907695740c4c43b8148) (2023-10-20)

### 依赖维护

* 将 @babel/traverse 从 7.15.4 升级至 7.23.2。 ([a63cc13](https://github.com/DreamStacks/food-geo-mapping/commit/a63cc1392000cdb3c34d7c59cf6c1de3c0d9d9d1))
* 将 word-wrap 从 1.2.3 升级至 1.2.4。 ([3442166](https://github.com/DreamStacks/food-geo-mapping/commit/3442166d726186c8780c5bf5c980d429763adf25))
* 将 semver 从 5.7.1 升级至 5.7.2。 ([68b4b4e](https://github.com/DreamStacks/food-geo-mapping/commit/68b4b4e4d5a1d52296608ce8324c35bd1fb507b1))

## [1.3.3](https://github.com/DreamStacks/food-geo-mapping/compare/064b83076eb4f5e8a34575679e727b3b28018057...ed4a21dbcda2eff7d7acafe61abe377f77cc63c5) (2023-03-03)

### 依赖维护

* 将 Express 从 4.17.1 升级至 4.18.2。 ([aba865b](https://github.com/DreamStacks/food-geo-mapping/commit/aba865b2642ae01b22509b01a8eeccf92902811d))
* 将 qs 从 6.5.2 升级至 6.5.3。 ([030e365](https://github.com/DreamStacks/food-geo-mapping/commit/030e365ebc63181f3d54418306ffa939f8e43cee))
* 将 decode-uri-component 从 0.2.0 升级至 0.2.2。 ([31df3db](https://github.com/DreamStacks/food-geo-mapping/commit/31df3db5e1452c096a122685b1f429da03d82127))
* 将 Terser 从 4.8.0 升级至 4.8.1。 ([b5c91d6](https://github.com/DreamStacks/food-geo-mapping/commit/b5c91d6af63d80bf0e3304c644d8e5213f51bbdf))
* 将 shell-quote 从 1.7.2 升级至 1.7.3。 ([3683147](https://github.com/DreamStacks/food-geo-mapping/commit/36831476b5ab82f396c6059c66f5ae5901a4b334))
* 将 eventsource 从 1.1.0 升级至 1.1.1。 ([c656f4b](https://github.com/DreamStacks/food-geo-mapping/commit/c656f4bcaad840e12293e648fbbfd8015501711c))
* 将 async 从 2.6.3 升级至 2.6.4。 ([dbb3b89](https://github.com/DreamStacks/food-geo-mapping/commit/dbb3b899e7192daeeed8b5eb9f7db20331684fa1))

## [1.3.2](https://github.com/DreamStacks/food-geo-mapping/compare/e5bb5902518b6318ec3d86c3a2f6934eecc4868b...064b83076eb4f5e8a34575679e727b3b28018057) (2022-04-25)

### 依赖维护

* 将 node-sass 从 6.0.1 升级至 7.0.0。 ([21929f5](https://github.com/DreamStacks/food-geo-mapping/commit/21929f5628be69dbcb97fa8f1e858b628430e8a7))
* 将 follow-redirects 从 1.14.7 升级至 1.14.8。 ([cdf33ae](https://github.com/DreamStacks/food-geo-mapping/commit/cdf33aed7ff17b353b5813b60970284cb2446e5f))
* 将 url-parse 从 1.5.3 升级至 1.5.10。 ([30a4745](https://github.com/DreamStacks/food-geo-mapping/commit/30a47451b2cb4a68e983fb965bdc6be46b9912bf))

## [1.3.1](https://github.com/DreamStacks/food-geo-mapping/compare/52aa5e4bad4f61238600a8cc32b0826455751d4d...e5bb5902518b6318ec3d86c3a2f6934eecc4868b) (2022-01-24)

### 依赖维护

* 将 follow-redirects 从 1.14.4 升级至 1.14.7。 ([c4c32be](https://github.com/DreamStacks/food-geo-mapping/commit/c4c32be4ebdbabb310651a65414fe7430bdf2193))

## [1.3.0](https://github.com/DreamStacks/food-geo-mapping/compare/2e2d906f9813e4a8b27a16272d697b711d39df5e...52aa5e4bad4f61238600a8cc32b0826455751d4d) (2021-10-19)

### 功能与页面

* 网站页脚增加备案信息。 ([2e6f054](https://github.com/DreamStacks/food-geo-mapping/commit/2e6f0547c731ddf9d5b3bcde2723363972f2f5bf))

### 工程维护

* 开发模式关闭 SSR，并取消严格版本号限制。 ([5a0bfee](https://github.com/DreamStacks/food-geo-mapping/commit/5a0bfeeb19e81f387fc57468696347db346434b9))
* 将 CircleCI 的 Node.js 版本更新至 14.18.1。 ([773acdd](https://github.com/DreamStacks/food-geo-mapping/commit/773acdd0593b4ead9ce3c6df85c08e826c2ceed7))

### 依赖维护

* 升级 Vue 2.6.14、Vue CLI 4.5.14、Koa 2.13.3、Axios 0.23.0、node-sass 6.0.1 等项目依赖。 ([aa1429b](https://github.com/DreamStacks/food-geo-mapping/commit/aa1429b85aa78c64e2abe042f1e51b7fee2c9f73))

### 问题修复

* 补全网站备案号中的后缀。 ([52aa5e4](https://github.com/DreamStacks/food-geo-mapping/commit/52aa5e4bad4f61238600a8cc32b0826455751d4d))

## [1.2.3](https://github.com/DreamStacks/food-geo-mapping/compare/ef6220c8bb908204c33d12016d572e29bbed3ac5...2e2d906f9813e4a8b27a16272d697b711d39df5e) (2021-07-26)

### 依赖维护

* 更新 color-string 至 1.6.0。 ([e45c797](https://github.com/DreamStacks/food-geo-mapping/commit/e45c797fc644dba47c78da907bbd9c83787544e3))
* 更新 ws 至 6.2.2。 ([d00635a](https://github.com/DreamStacks/food-geo-mapping/commit/d00635adcb7e7d422b035a99c989af11b1398ec0))
* 更新 ini 至 1.3.8。 ([9a1cf77](https://github.com/DreamStacks/food-geo-mapping/commit/9a1cf77e1eb4527a5b7207c51f37c62fdcdced07))
* 更新 dns-packet 至 1.3.4。 ([9d42405](https://github.com/DreamStacks/food-geo-mapping/commit/9d4240550ee860e8663fc17585d94625019faaca))
* 更新 yargs-parser 至 5.0.1。 ([3ae5a3e](https://github.com/DreamStacks/food-geo-mapping/commit/3ae5a3e365139128fe9040ef8e6bb00c48dcde49))
* 更新 hosted-git-info 至 2.8.9。 ([2c29cdb](https://github.com/DreamStacks/food-geo-mapping/commit/2c29cdbf9114f8a139d66d7c7d294bc6732000ad))
* 更新 Handlebars 至 4.7.7。 ([0b38e05](https://github.com/DreamStacks/food-geo-mapping/commit/0b38e05fd9e44b7ec96519c1f38de3c0f86021bc))
* 更新 url-parse 至 1.5.1。 ([d14516c](https://github.com/DreamStacks/food-geo-mapping/commit/d14516cdf8045c793096e6041797e4e1857aa7aa))
* 更新 y18n 至 3.2.2。 ([3da4b6a](https://github.com/DreamStacks/food-geo-mapping/commit/3da4b6af8b9bf3131917bf6c07f0415bd0924dd3))
* 将 Axios 从 0.19.0 升级至 0.21.1。 ([d5dba87](https://github.com/DreamStacks/food-geo-mapping/commit/d5dba877fd006ea12d20056514f0b9e341eff3f3))

## [1.2.2](https://github.com/DreamStacks/food-geo-mapping/compare/d0043ac47ec4a3197a82bd3be37f02d1eadd5a9a...ef6220c8bb908204c33d12016d572e29bbed3ac5) (2021-05-27)

### 依赖维护

* 更新 browserslist 至 4.16.6。 ([1db62b8](https://github.com/DreamStacks/food-geo-mapping/commit/1db62b8613ff710a60264d2c83e6498f2d8cbc08))
* 更新 elliptic 至 6.5.4。 ([b97ac77](https://github.com/DreamStacks/food-geo-mapping/commit/b97ac775c94e078b95a6c5f9388a1dab98abe903))

## [1.2.1](https://github.com/DreamStacks/food-geo-mapping/compare/947887fe3961fb568a648a4792a86e195eda7e17...d0043ac47ec4a3197a82bd3be37f02d1eadd5a9a) (2020-09-07)

### 依赖维护

* 更新 http-proxy 至 1.18.1。 ([1260e3e](https://github.com/DreamStacks/food-geo-mapping/commit/1260e3e7396c086e735cd6485a5908145814572a))
* 更新 tree-kill 至 1.2.2。 ([568611f](https://github.com/DreamStacks/food-geo-mapping/commit/568611f06735c4f2934a417e94aeaaab84527a54))
* 更新 websocket-extensions 至 0.1.4。 ([09c1d9b](https://github.com/DreamStacks/food-geo-mapping/commit/09c1d9b655b8b435e84ebb916036c34c8fd1b6e0))
* 将 node-sass 从 4.13.0 升级至 4.13.1。 ([427f350](https://github.com/DreamStacks/food-geo-mapping/commit/427f350edc4dc9f2e7add7795f31d8b03dff7d86))
* 将 elliptic 从 6.4.1 升级至 6.5.3。 ([5b7b719](https://github.com/DreamStacks/food-geo-mapping/commit/5b7b719f80aeb91e0d9ed9689e6b94eb68cc5ff4))
* 将 Handlebars 从 4.2.1 升级至 4.7.6。 ([2204239](https://github.com/DreamStacks/food-geo-mapping/commit/2204239b94524601bf5468ab7b1883048527b1ff))

## [1.2.0](https://github.com/DreamStacks/food-geo-mapping/compare/ce5cdbc1bdaa555855b00bafd6a5ec7dfd80e7f9...947887fe3961fb568a648a4792a86e195eda7e17) (2019-12-18)

### 功能与页面

* 新增水果分类占位页面和布局，并补充成员 zhangpeng2k 的资料。 ([d2f4f1f](https://github.com/DreamStacks/food-geo-mapping/commit/d2f4f1fea43efb1fd65fd4aed21b8f88c75101b7))

### 工程维护

* 整理布局结构。 ([a21335b](https://github.com/DreamStacks/food-geo-mapping/commit/a21335b4e29a045528f3deb5a7484e474ffc0f30))
* 重新生成 Yarn 锁文件。 ([f563114](https://github.com/DreamStacks/food-geo-mapping/commit/f5631144fdef56a694864d5a527245c00e87906d))

## [1.1.0](https://github.com/DreamStacks/food-geo-mapping/compare/134cc5d81e67d485a08edcb3c04375e1d626d112...ce5cdbc1bdaa555855b00bafd6a5ec7dfd80e7f9) (2019-09-28)

### 功能与页面

* 调整首页视觉样式。 ([80ec463](https://github.com/DreamStacks/food-geo-mapping/commit/80ec46370c7cd1be24832dc7e3fb0b552db7d59d))
* 调整页面 viewport 设置，改善移动端展示。 ([075307b](https://github.com/DreamStacks/food-geo-mapping/commit/075307b84b4619e5046d1f7d10064fb9f857f6f3))
* 优化团队页面的视觉布局。 ([85e56fc](https://github.com/DreamStacks/food-geo-mapping/commit/85e56fc438aafcbdf41043c761d8b469375b36fb))
* 优化团队页面 HTML 结构。 ([13b2b93](https://github.com/DreamStacks/food-geo-mapping/commit/13b2b9371b0c9ce9ef870ca1b30faea737f1e1a3))
* 整理团队页面代码。 ([5b3ede5](https://github.com/DreamStacks/food-geo-mapping/commit/5b3ede5f223bd9458e1bf6ec42d416ef7abac742))
* 关于页面改为动态获取更新记录。 ([f35a37b](https://github.com/DreamStacks/food-geo-mapping/commit/f35a37bb3310485ad85c1303a3654de8ed6f3b82))

### 修复与工程

* 调整 HTML 背景图设置。 ([bebb69c](https://github.com/DreamStacks/food-geo-mapping/commit/bebb69cb2071ed7dc63533f69cb5cd0fddbb6516))
* 调整 PM2 配置，并将背景图地址改为 CDN 链接。 ([5137d92](https://github.com/DreamStacks/food-geo-mapping/commit/5137d929d5859c9e9ba3eeada45de2ef3f95a233))
* 接入 conventional-changelog，生成版本更新记录。 ([a85781d](https://github.com/DreamStacks/food-geo-mapping/commit/a85781d09b08f49128a971e695c23934f60c2b9d))

### 依赖维护

* 更新 eslint-utils 至 1.4.2。 ([79ed2a0](https://github.com/DreamStacks/food-geo-mapping/commit/79ed2a000ae2b383d98de6080208a26b55407194))
* 更新 lodash.mergewith 至 4.6.2。 ([85be706](https://github.com/DreamStacks/food-geo-mapping/commit/85be706103c7cdbf68a985dd7a83a603cdd25abb))
* 更新 lodash.merge 至 4.6.2。 ([8b5e7aa](https://github.com/DreamStacks/food-geo-mapping/commit/8b5e7aa8f67717d407ddf2dbcd13ae80db394ab6))
* 更新 lodash.template 至 4.5.0。 ([76e5fec](https://github.com/DreamStacks/food-geo-mapping/commit/76e5fec6233da1187c2ba527a5abbfc818f34957))
* 更新 lodash.defaultsdeep 至 4.6.1。 ([b5528ba](https://github.com/DreamStacks/food-geo-mapping/commit/b5528ba2630066813935c737235ff2eec1c040fc))
* 更新 mixin-deep 至 1.3.2。 ([bbb73af](https://github.com/DreamStacks/food-geo-mapping/commit/bbb73afc541c8a16c2192e26bc1e18422be35dd6))

### 工程维护

* 默认开启 SSR，完善服务端渲染配置。 ([ce5cdbc](https://github.com/DreamStacks/food-geo-mapping/commit/ce5cdbc1bdaa555855b00bafd6a5ec7dfd80e7f9))

## [1.0.1](https://github.com/DreamStacks/food-geo-mapping/compare/9577e0df859aa8ccd8bbdc8ba55f4adeac0418ec...134cc5d81e67d485a08edcb3c04375e1d626d112) (2019-06-03)

### 修复与工程

* 修复页面渲染问题。 ([134cc5d](https://github.com/DreamStacks/food-geo-mapping/commit/134cc5d81e67d485a08edcb3c04375e1d626d112))

## [1.0.0](https://github.com/DreamStacks/food-geo-mapping/commits/9577e0df859aa8ccd8bbdc8ba55f4adeac0418ec) (2019-05-31)

### 项目起步

* 建立项目，编写中英文说明文档。 ([550f71c](https://github.com/DreamStacks/food-geo-mapping/commit/550f71cdef8c9106dba9a3731d04746a38c56d67))
* 添加项目 Logo。 ([9ccb33d](https://github.com/DreamStacks/food-geo-mapping/commit/9ccb33ddddeba7e9de3abb5b655681254031d060))
* 使用 Vue CLI 3、Koa 和 vue-server-renderer 搭建项目与服务端渲染框架。 ([a9530bb](https://github.com/DreamStacks/food-geo-mapping/commit/a9530bb0974ef1de7ec6155a13001bdc5e18ea95))
* 实现首页基础内容和布局。 ([cd0edb2](https://github.com/DreamStacks/food-geo-mapping/commit/cd0edb2be4968c8b506b4898a6ba511d5df59a83))
* 完善全局样式与 Header 组件。 ([7c1aa21](https://github.com/DreamStacks/food-geo-mapping/commit/7c1aa2134ddeeac64c124a1091f77eb96278b86e))
* 补充 SSR 使用说明与页面标题、描述、关键词配置。 ([877e8b4](https://github.com/DreamStacks/food-geo-mapping/commit/877e8b4f0223b5cf12b1504999263a6bfc2065c3))
* 补充 Anti-996 许可证及中文版本。 ([e0b5dd8](https://github.com/DreamStacks/food-geo-mapping/commit/e0b5dd8322001afc4ed730ffd5ea0732127b6466))

### 开发与部署

* 修复开发环境 socket 连接问题。 ([18cabec](https://github.com/DreamStacks/food-geo-mapping/commit/18cabec065881555b53c79dd6d00c5b115b53bb8))
* 接入 Git Hooks 与提交消息检查。 ([b33cdaa](https://github.com/DreamStacks/food-geo-mapping/commit/b33cdaa0c3a08e7d055fc05375a7dc7ec45a3713))
* 引入 Commitizen，规范提交消息。 ([6c75ac6](https://github.com/DreamStacks/food-geo-mapping/commit/6c75ac69f70789ae4028cb2de6fcf7edd2611a0b))
* 修正 lint-staged 文件匹配规则。 ([89beaa5](https://github.com/DreamStacks/food-geo-mapping/commit/89beaa5ea7e59b153870a098e60c978aab8f2206))
* 接入 CircleCI 持续集成。 ([755c5d3](https://github.com/DreamStacks/food-geo-mapping/commit/755c5d3b270ea3fe81e13e205621e3b07dbf0207))
* 添加 PM2 部署配置与静态 Logo 资源。 ([2c8a7b1](https://github.com/DreamStacks/food-geo-mapping/commit/2c8a7b1f170b92fc1aa3d027bc6963804743abae))

### 功能与页面

* 引入 Element UI 组件。 ([5c63bb6](https://github.com/DreamStacks/food-geo-mapping/commit/5c63bb6c8fd135187422abeb71ce6cc1c773dfd5))
* 新增网站图标，并接入页面模板。 ([9577e0d](https://github.com/DreamStacks/food-geo-mapping/commit/9577e0df859aa8ccd8bbdc8ba55f4adeac0418ec))
* 在 README 中补充贡献者信息。 ([a675458](https://github.com/DreamStacks/food-geo-mapping/commit/a67545823429f425f83c2543dfb81258640c7336))

### 依赖维护

* 更新 Axios，处理旧版本依赖告警。 ([57579eb](https://github.com/DreamStacks/food-geo-mapping/commit/57579ebeb4a0b6022f35698c84f5294a9084eb4a))
