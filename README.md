# population-tracker-jp

[![Test](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml/badge.svg)](https://github.com/seelx3/population-tracker-jp/actions/workflows/playwright.yml)

各都道府県の人口推移を可視化するアプリケーション.

![population-tracker-demo](https://github.com/seelx3/population-tracker-jp/assets/61373111/f44088be-fbbd-4981-8e80-a5da9a8f78d3)

## Prerequisite
- [asdf](https://asdf-vm.com/)
  
## Setup

- Move to project directory and install runtimes.
```
asdf install
```

- Install dependencies.
```
yarn
```

- Set the API key for the RESAS API in `.env` as follows
```
RESAS_API_KEY="YOUR_API_KEY"
```

## Development

- How to run application:

```
yarn dev
```
