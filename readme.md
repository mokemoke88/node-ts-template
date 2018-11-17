# Typescript プロジェクト用テンプレ

typescript で何かやるときのテンプレ

## 目的
 最近よく使うので何度も書きたくない。& 書く度に微妙に変わるので集約したい.

## 利用方法

レポジトリをクローンした後 .git 削除してpackage.jsonのメタ情報あたりを適当に書き換えてから

```
npm i
```

## 処理系
node.js 10.0.13

## 提供しているもの
- typescriptコンパイラの設定(tsconfig.json)
- babelの設定(.babelrc)
- prettierの設定(.prettierrc)
- tslintの設定(tslint.json)
- webpackの設定(webpack.config.js)
- postcssの設定(postcss.config.js)
- jestの設定(package.json)
- npmパッケージ設定(package.json)
- npm スクリプト
  - npm run compile  
  src/以下をコンパイルしてbuild/以下に出力.
  - npm run lint  
  src/以下のlintチェック
  - npm run lint:fix  
  src/以下のlintチェックとソースフォーマット
  - npm run test  
  jestを使ったtypescriptのunitテスト  
  src/**/*.test.ts が対象
  - npm run webpack  
    - ブラウザ用のjsファイルをdist/以下に出力  
    エントリポイントは src/index.ts
    - ブラウザ用のcssファイルをdist/css/browser.cssに出力  
    エントリポイントは src/sass/style.scss
  - npm run webpack:stg
    - プロダクション環境用のjsファイルを出力
  - npm run devserver  
    webpack-dev-serverを起動
