# Typescript プロジェクト用テンプレ

typescript で何かやるときのテンプレ

## 目的
備忘録的に。

## 利用方法

レポジトリをクローンした後 .git 削除してpackage.jsonのメタ情報あたりを適当に書き換えてから

```
npm i
```

## 処理系
node.js 10.0.13

## 提供しているもの
- typescriptの設定( npm run compile )
  - src/以下をコンパイルしてbuild/以下に出力  
  (tsconfig.json)
- tslint & prettier の設定( npm run lint )
  - lintとコードフォーマット  
  (tslint.json & .prettierrc)
- jest の設定 ( npm run test )
  - src/**/*.test.tsx?$ を対象にunitテストの実施  
  (package.json)
- webpack の設定 (npm run webpack )  
  - src/index.ts をエントリポイントにして dist/browser.bundle.js を出力
  - src/sass/style.scssをエントリポイントにして dist/css/browser.bundle.css を出力
