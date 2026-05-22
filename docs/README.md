# docs/ 運用ガイド（テンプレート版）

このディレクトリは「人間が読む設計資産」を置く場所です。

## 構成

```
docs/
├── README.md                 # このファイル
├── init-todo.md              # テンプレート初期化チェックリスト
├── context/
│   ├── product.md            # プロダクト背景・スコープ
│   └── domain.md             # 用語集・ビジネスルール
├── adr/
│   └── 0000-template.md      # ADR テンプレート
└── spec/
    └── template.md           # 仕様書テンプレート
```

## 何をどこに書くか

| 書きたいこと                 | 置き場所                  |
| ---------------------------- | ------------------------- |
| プロダクトの目的・ターゲット | `docs/context/product.md` |
| 用語・状態遷移・業務ルール   | `docs/context/domain.md`  |
| 設計判断の理由（なぜ）       | `docs/adr/*.md`           |
| 実装仕様（何を作るか）       | `docs/spec/*.md`          |

## 初期セットアップ時に最初に埋める項目

1. `docs/init-todo.md` を上から順に実施
2. `docs/context/product.md` の `{...}` プレースホルダを更新
3. `docs/context/domain.md` の用語集とドメインルールを更新
4. 必要に応じて `docs/spec/{feature-name}.md` を作成

## ADR ルール

- ファイル名は `docs/adr/0001-{title}.md` 形式
- 既存 ADR を上書きせず、追記で意思決定を残す
- 破壊的変更・ライブラリ導入・大きな設計変更は ADR を先に作成
