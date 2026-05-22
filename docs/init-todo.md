# Init TODO（テンプレート初期化チェックリスト）

このテンプレートから新規プロジェクトを作るときに、最初に更新する項目をまとめたチェックリストです。

## 使い方

1. このファイルを上から順に埋める
2. 必須項目が完了してから実装を開始する
3. 完了後、このファイルは削除

## 0. プロジェクト情報

- [ ] プロジェクト名: `{project-name}`
- [ ] 一言説明: `{what-and-for-whom}`
- [ ] 対象プラットフォーム優先度: `{ios/android/web}`
- [ ] リリース予定: `{target-date}`

## 1. 必須で更新する設定

| 対象ファイル              | 更新項目                               | 例                           |
| ------------------------- | -------------------------------------- | ---------------------------- |
| `package.json`            | `name`                                 | `my-awesome-app`             |
| `app.json`                | `expo.name`                            | `My Awesome App`             |
| `app.json`                | `expo.slug`                            | `my-awesome-app`             |
| `app.json`                | `expo.scheme`                          | `myawesomeapp`               |
| `app.json`                | `expo.ios.bundleIdentifier`            | `com.mycompany.myawesomeapp` |
| `docs/context/product.md` | すべての `{...}` プレースホルダ        | プロダクト概要・ターゲット   |
| `docs/context/domain.md`  | 用語集・ドメインルール                 | 用語統一                     |
| `AGENTS.md`               | Project Overview のプロジェクト名/目的 | チーム共通の前提             |
| `README.md`               | プロジェクト固有の説明へ更新           | 公開用の入口情報             |

## 2. 推奨で更新する設定

| 対象ファイル                       | 更新項目                                          | いつ必要か                 |
| ---------------------------------- | ------------------------------------------------- | -------------------------- |
| `app.json`                         | `expo.android.package`                            | Android配布する場合は必須  |
| `app.json`                         | `expo.icon` / `expo.web.favicon` / `adaptiveIcon` | ブランド反映する時         |
| `app.json`                         | `expo.plugins[].expo-splash-screen` の色/画像     | スプラッシュを差し替える時 |
| `eas.json`                         | build profile 名・運用方針                        | EAS Build 運用を開始する時 |
| `.github/pull_request_template.md` | PR 記載項目                                       | チーム運用に合わせる時     |
| `docs/spec/*.md`                   | 初期機能の仕様書作成                              | 実装前に仕様を固定したい時 |

## 3. 実装前の確認

- [ ] `npm install` が成功する
- [ ] `npm run lint` が通る
- [ ] `npm run typecheck` が通る
- [ ] `npm run start` で開発サーバーが起動する

## 4. 任意（運用開始時）

- [ ] ADR 1本目を作る（技術選定・運用方針など）
- [ ] Issue/PR テンプレートをチーム運用向けに調整する
- [ ] 必要な secrets 管理方針を決める（ローカル `.env` / CI など）

## 関連ドキュメント

- ルート導線: `README.md`
- Agent 向け導線: `AGENTS.md`
- docs の運用: `docs/README.md`
