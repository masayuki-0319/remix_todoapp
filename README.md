# 環境構築

## 前提条件

- Node v20.11.0
- Yarn v1.22.21
- Docker
  - Docker Desktop 4.28.0 (139021)
  - Docker Compose version v2.24.6-desktop.1

## DB コンテナを起動

```sh
docker compose up -d
```

## データベースを初期化設定

```sh
yarn db:migrate
```

## Remix を起動

```sh
yarn dev
```
