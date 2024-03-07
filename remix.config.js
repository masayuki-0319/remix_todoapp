/**
 * ライブラリ等で remix.config.js に設定指示がある場合、vite.config.ts に定義する。
 *
 * 背景として、remix-flat-routes 導入時に正常に有効化されなかった経過がある。
 * 理想は、remix.config.js の設定を vite.config.ts に export できること。
 */
