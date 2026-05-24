## Project Overview

- **Template**: expo-cross-platform-template
- **目的**: React Native + Expo + NativeWind で iOS / Android / Web を横断開発するための雛形
- **Team**: 任意（1名〜）

## First Setup Checklist

このテンプレートから新規プロジェクトを作る時は、まず `docs/init-todo.md` を完了させる。

- 初期化TODO: `docs/init-todo.md`
- プロジェクト名、bundle identifier、概要ドキュメント更新の必須項目を含む

## Critical Rules

- APIキーやシークレットをコードに埋め込まない
- 本番データベースに直接書き込まない
- `docs/adr/` に既存の設計決定がある場合、それに矛盾する実装をしない
- 仕様書が存在する機能を実装する前に、必ず該当の `docs/spec/` を読む
- 破壊的変更は `docs/adr/` に ADR 追加後に実施する

## Setup / Build / Test

- `README.md` を参照
- 作業完了前のチェックは `npm run fix` を実行すればOK（lint + format を一括実行）
- Expo の native module 追加・更新時は `npm add` ではなく `npx expo install <package>` を使う

## Documentation Map

```
.agents/
├── rules/   # 技術規約
│   ├── web.md
│   ├── ios.md
│   └── coding-style.md
└── skills/  # タスク別手順書
docs/
├── README.md
├── init-todo.md
├── context/
├── adr/
└── spec/
```

## PR Rule

- `.github/pull_request_template.md` に従って記述

## When to Read What

| タイミング                    | 読むファイル                                        |
| ----------------------------- | --------------------------------------------------- |
| 新規プロジェクト初期化時      | `docs/init-todo.md`                                 |
| 全体像を把握する時            | `docs/context/product.md`, `docs/context/domain.md` |
| コードを書く前（共通）        | `.agents/rules/coding-style.md`                     |
| コードを書く前（Web）         | `.agents/rules/web.md`                              |
| コードを書く前（iOS/Android） | `.agents/rules/ios.md`                              |
| UIコンポーネントを実装する時  | `.agents/skills/frontend-design/SKILL.md`           |
| ライブラリ選定・アーキ変更時  | `docs/adr/` 全体                                    |
| 特定機能を実装する時          | `docs/spec/{feature-name}.md`                       |

## Available Skills

| Skill               | 用途                               | パス                                          |
| ------------------- | ---------------------------------- | --------------------------------------------- |
| frontend-design     | UIコンポーネント・画面の実装       | `.agents/skills/frontend-design/SKILL.md`     |
| skill-development   | SKILL.md の設計・実装              | `.agents/skills/skill-development/SKILL.md`   |
| building-native-ui  | Expo Router でのネイティブUI構築   | `.agents/skills/building-native-ui/SKILL.md`  |
| expo-dev-client     | Development Client の構築・配布    | `.agents/skills/expo-dev-client/SKILL.md`     |
| expo-tailwind-setup | NativeWind/Tailwind のセットアップ | `.agents/skills/expo-tailwind-setup/SKILL.md` |

## Notes

- `example/` は Expo 公式サンプルを保持するための参照用ディレクトリ。
- テンプレート本体の実装は `src/` を対象にする。
