# Expo Cross-Platform Template

React Native + Expo + NativeWind で、`iOS / Android / Web` を1つのコードベースで開発するためのテンプレートです。<br />
※ Android は動作未検証です。

## 含まれる技術スタック

- Expo SDK 55
- React Native / React 19
- Expo Router（file-based routing）
- NativeWind v5 + react-native-css + Tailwind CSS v4
- TypeScript（strict）
- ESLint（Expo config）
- Prettier

## 含まれないもの（意図的に未同梱）

- バックエンド実装（APIサーバー / DB）
- 認証基盤（Clerk / Auth0 / Cognito など）
- 状態管理ライブラリ（Redux / Zustand など）
- テスト基盤（Jest / Vitest / Playwright など）
- CI/CD ワークフロー定義

必要なものだけを後から追加できるよう、最小限の構成にしています。

## セットアップ

### 1. 前提ツール

- Node.js 22 以上（LTS 推奨）
- npm 10 以上
- Xcode（iOS開発時）
- Android Studio（Android開発時）

### 2. 依存関係インストール

```bash
npm install
```

### 3. 開発サーバー起動

```bash
npm run start
```

### 4. 各プラットフォーム起動

```bash
npm run ios
npm run android
npm run web
```

## 開発コマンド

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run typecheck
```

## ダークモード

- トップページのトグルボタンで `light / dark` を手動切替できます。
- 実装時は `bg-background dark:bg-background-dark` のように `dark:` variant で
  `*-dark` トークンを必ず併記してください。

## テンプレート初期化

最初に [docs/init-todo.md](docs/init-todo.md) を実施してください。  
プロジェクト名・bundle identifier・概要ドキュメント更新の抜け漏れを防げます。

## ドキュメント

- 開発ガイド: `AGENTS.md`
- docs 運用ルール: `docs/README.md`
- 初期化チェックリスト: `docs/init-todo.md`
- 仕様テンプレート: `docs/spec/template.md`
- ADR テンプレート: `docs/adr/0000-template.md`

## 補足

`example/` は Expo 公式サンプル実装として保持しています。テンプレート本体の実装対象は `src/` 配下です。
