<p align="center"><a href="https://www.ihoey.com" target="_blank" rel="noopener noreferrer"><img width="100" src="./public/logo.png" alt="food-geo-mapping logo"></a></p>

<div align="right">
    Language: :us:
    <a title="Chinese" href="README.md">
    :cn:
    </a>
</div>

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](/LICENSE)
[![CircleCI](https://circleci.com/gh/DreamStacks/food-geo-mapping.svg?style=svg)](https://circleci.com/gh/DreamStacks/food-geo-mapping)

## Local development

Use Node.js 24 LTS (currently pinned to 24.21.0) and pnpm 12.6.0. With fnm:

```sh
fnm install
fnm use
npm install --global pnpm@12.6.0
pnpm install
pnpm dev
```

Run `pnpm check` to check TypeScript files and `pnpm build` to generate the Vercel server deployment output. CI reads the Node version from `.node-version` and the pnpm version from `package.json`.

The project uses TypeScript 7 without `@astrojs/check`, which does not yet support this version. `pnpm check` does not check types inside `.astro` templates; `pnpm build` verifies template compilation.

## Project objectives

- work on creating a guide to foodies (fruits and specialties)
- let meng xin watch and participate in the development process of the big guys
- let such meaningful actions gradually become the trend and development
- welcome to join us

## Project requirements

### Fruit

- search by category (not necessarily strictly by class or genus)
- search by major origin (usually block)
- check the nutritional composition, nutritional value and main producing areas of the fruit

### Regional snacks

- search by region, generally based on provinces, cities and counties (districts)
- learn as much as possible about its practices and historical features
  -better say something about the general market price

## Contributors

### [puppetsheep](https://github.com/puppetsheep)

- Project sponsor, project planning, UI design, copywriting, some development support.
- blog：[灵魂只应独行](https://puppetsheep.cn/)

### [ihoey](https://github.com/ihoey)

- Project manager, technical support, architecture, project guide.
- blog：[Dream Stacks](https://blog.ihoey.com/)

### [Plus Lin](https://github.com/ljh980703)

- Project participants, logo, design, parts development support.

Thank you to all the people who have already contributed to food-geo-mapping!
