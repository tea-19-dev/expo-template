# 作業計画書（テンプレートリポジトリ化）

## 目的

`expo-template` を、React Native + Expo + NativeWind で iOS / Android / Web を横断開発できる公開テンプレートとして整備する。

## スコープ

- 依存関係の棚卸し（不要・不足・分類ミス）
- プロジェクト固有情報の除去
- テンプレート向けドキュメント全面改訂
- ダークモード実装のクロスプラットフォーム対応（手動トグル）
- Linter / Formatter 導入と auto-fix 可能化
- 動作検証・セルフレビュー

## 実施ステップ

### 1. 現状監査

- [x] `package.json` / import 実績から依存関係を分類
- [x] 不要ライブラリ候補と不足ライブラリ候補を一覧化
- [x] `world-cup` など固有名称の残存箇所を抽出
- [x] `sample/` `example/` の扱い（削除・保持）を決定

### 2. テンプレート構造へ修正

- [x] `package.json` / `app.json` の名称・スクリプトをテンプレート化
- [x] 不要なファイル/ディレクトリを整理
- [x] 開発時に必要な最小構成に整える

### 3. ダークモード再実装

- [x] `ThemeProvider` を導入し、light/dark を管理
- [x] NativeWind の `colorScheme` 制御を実装（iOS/Android/Web 共通）
- [x] `global.css` を `dark:` 変種前提で動作するよう調整
- [x] トップページにテーマ切替ボタンを追加

### 4. Linter / Formatter 導入

- [x] ESLint を導入し、`npm run lint` で検証可能にする
- [x] import 順序の自動整形ルールを導入
- [x] Tailwind/NativeWind class 順序の自動整形を導入
- [x] `npm run format` / `npm run lint:fix` を整備

### 5. ドキュメント刷新

- [x] `README.md` をテンプレート利用者向けに再記述
- [x] `AGENTS.md` をテンプレート向けナビゲーションへ更新
- [x] `docs/README.md` / `docs/context/*` / `docs/spec/*` を雛形化
- [x] 「ここを埋めればよい」項目が明確な記述に統一

### 6. 検証・セルフレビュー

- [x] 型チェック・Lint・Format を実行
- [x] 依存関係の最終確認（runtime / dev の分類）
- [x] 変更差分のセルフレビュー（リスク・抜け漏れ確認）
- [x] 結果を報告（実施内容・検証結果・残課題）

## 完了条件

- テンプレートとして初期利用できる README と docs が揃っている
- ダークモードが iOS / Android / Web で手動切替できる
- Lint/Format がコマンドで自動修正可能
- 不要依存・固有名称・不適切な依存分類が解消されている

## 監査メモ

- `example/` は Expo 公式実装例として保持
- `sample/` は削除
- 未使用依存を削除し、lint/format 関連は `devDependencies` へ集約
