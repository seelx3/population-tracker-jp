# population-tracker-jp

[![Test](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml/badge.svg)](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml)

各都道府県の人口推移を可視化するアプリケーション.

![population-tracker-demo](https://github.com/seelx3/population-tracker-jp/assets/61373111/f44088be-fbbd-4981-8e80-a5da9a8f78d3)

## 使用技術

|                |                       |
| -------------- | --------------------- |
| フレームワーク | Next.js (React)       |
| 状態管理       | Jotai                 |
| フェッチ       | TanStack Query, Axios |
| グラフ描画     | Highcharts            |
| スタイリング   | css-modules           |
| フォーマッタ   | Prettier              |
| リンター       | ESLint                |
| テストツール   | Playwright            |
| その他         | Husky, Lint-staged    |

## 特徴

- API サーバー（RESAS API）から都道府県別の人口推移データを取得し、グラフとして表示します。

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

- API サーバーのエンドポイント及び API キーを `.env` に設定してください。

```
API_ENDPOINT= # API endpoint e.g. "https://opendata.resas-portal.go.jp"
API_KEY= # Your API key
```

- 以下のコマンドで開発サーバーを起動します。

```
yarn dev
```

## その他

- 本アプリケーションは [RESAS API](https://opendata.resas-portal.go.jp/) を使用しています。

## 動作確認用 API サーバー

RESAS API は 2025 年 3 月 24 日で提供終了になります。

ローカルで動作確認ができるように、[population-tracker-jp-api](https://github.com/seelx3/population-tracker-jp-api) を作成しました。

詳細は population-tracker-jp-api の README を参照してください。
