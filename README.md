# population-tracker-jp

[![Test](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml/badge.svg)](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml)

各都道府県の人口推移を可視化するアプリケーション.

![population-tracker-demo](https://github.com/seelx3/population-tracker-jp/assets/61373111/f44088be-fbbd-4981-8e80-a5da9a8f78d3)

## Prerequisite

- [asdf](https://asdf-vm.com/)

## Setup

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

## Development

- 以下のコマンドで開発サーバーを起動します。

```
yarn dev
```

## Other

- 本アプリケーションは [RESAS API](https://opendata.resas-portal.go.jp/) を使用しています。
