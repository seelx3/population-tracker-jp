# population-tracker-jp

[![Test](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml/badge.svg)](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml)

各都道府県の人口推移を可視化するアプリケーション.

![population-tracker-demo](https://github.com/seelx3/population-tracker-jp/assets/61373111/f44088be-fbbd-4981-8e80-a5da9a8f78d3)

## 使用技術

|                |                    |
| -------------- | ------------------ |
| フレームワーク | Next.js (React)    |
| グラフ描画     | Highcharts         |
| スタイリング   | css-modules        |
| フォーマッタ   | Prettier           |
| リンター       | ESLint             |
| テストツール   | Playwright         |
| その他         | Husky, Lint-staged |

## 特徴

- RESAS API を使用するときに API キーが必要になりますが、本アプリケーションではクライアントから API キーを秘匿しています。これは、API routes を使用してサーバーサイドで API キーを使用してデータを取得することにより実現しています。

## 事前準備

- [asdf](https://asdf-vm.com/)

## インストール

- プロジェクトのルートディレクトリに移動して、以下のコマンドを実行してください。
- nodejs と yarn のバージョンを指定してインストールします。

```
asdf install
```

- 依存関係をインストールします。

```
yarn
```

- RESAS API の API キーを `.env` に設定してください。

```
API_KEY="YOUR_API_KEY"
```

- 以下のコマンドで開発サーバーを起動します。

```
yarn dev
```

## その他

- 本アプリケーションは [RESAS API](https://opendata.resas-portal.go.jp/) を使用しています。

## population-tracker-jp-api

RESAS API は 2025 年 3 月 24 日で提供終了となります。

ローカルだけで動作確認ができるように、[population-tracker-jp-api](https://github.com/seelx3/population-tracker-jp-api) を作成しました。

詳細は population-tracker-jp-api の README を参照してください。
