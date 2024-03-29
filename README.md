# 環境構築

## 前提条件

- Node v20.11.0
- Yarn v4.1.1
- Docker
  - Docker Desktop 4.x
  - Docker Compose version v2.x

## 依存ライブラリをダウンロード

```sh
yarn install
```

## .env ファイルを用意

```sh
cp .env.example .env
```

```sh
cp .env.test.example .env.test
```

## DB コンテナを起動

```sh
docker compose up -d
```

## DB 初期設定

```sh
yarn db:init
```

## Remix を起動

```sh
yarn dev
```

## 動作確認

### アプリ起動

```sh
open http://localhost:5173
```

### テスト ( Vitest ) 起動

```sh
yarn test
```
