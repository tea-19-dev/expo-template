# Coding Style Rules

> **用途**: プラットフォーム共通のコーディング規約。
> Web・iOS 問わず、コードを書く前に参照すること。

---

## 命名規則
- 変数・関数名は `docs/context/domain.md` の用語集に従う（和製英語・造語を使わない）
- 略語は使わない（`usr` → `user`, `btn` → `button`）
- boolean 変数は `is` / `has` / `can` プレフィックスをつける

## コメント
- **なぜ**そうしているかを書く（何をしているかはコードを読めばわかる）
- ADR に記録された判断が関係する箇所には `# See: docs/adr/000X-*.md` を添える
- TODO コメントには担当者と日付を書く: `// TODO(2025-01-15): ...`

## スタイル（className）
- `className` / `contentContainerClassName` に条件分岐を入れる時は、テンプレート文字列や文字列結合を使わず `cn`（`src/utils/cn.ts`）を使う
- 例: `className={cn("base", isActive ? "active" : "inactive")}`
- 固定クラスのみの場合は単に文字列のまま
- class 順序は Prettier に任せる（手動で揃えようとしない）

## エラーハンドリング
- エラーは握りつぶさない。必ずログに残すかユーザーに伝える
- ユーザー向けエラーメッセージは `docs/context/domain.md` の用語に合わせる

## テスト
- 新機能には必ずユニットテストを追加する
- テストファイルは実装ファイルと同じディレクトリに置く（`__tests__/` にまとめない）
- テスト名は「〜の時、〜になる」の形式で書く

## Git
- コミットメッセージは日本語可。`{type}: {内容}` の形式
  - type: `feat` / `fix` / `refactor` / `docs` / `chore`
- 1コミット1変更（複数の目的を混ぜない）
- PRを出す前に `docs/adr/` の既存決定と矛盾しないか確認する

## lint
- コミット前に、必ず lint をチェックし、エラーがあれば修正すること
- 自動修正は `npm run fix` を実行する（`lint:fix` + `format`）
- import 順序は ESLint（`simple-import-sort`）で統一する
