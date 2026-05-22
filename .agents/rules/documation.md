---
trigger: always_on
---

# Documentation Rule

## いつ使うか

- 新しい機能仕様書を作る時
- ADR を記録する時
- Skill / Rule を追加・更新する時
- ドキュメントをどこに書くか迷った時

## 構成の全体像

| 書きたいこと | 置き場所 |
|---|---|
| アプリのコンセプト・用語 | `docs/context/` |
| 機能の要件・仕様 | `docs/spec/` |
| 設計の意思決定（なぜ） | `docs/adr/` |
| タスクの実行手順（How-to） | `.agents/skills/` |
| 守るべき規約・禁止事項 | `.agents/rules/` |
| Agentへの参照ガイド | `AGENTS.md` |

## 各ファイルを書く時のルール
- 仕様は `docs/spec/` に残し、実装前に参照可能にする
- 破壊的変更・設計判断は `docs/adr/` に理由を残す
- 用語は `docs/context/domain.md` に合わせる

## 追加・更新した時にやること
1. AGENTS.md の対応テーブルを更新する
2. 関連ファイルのリンク切れがないか確認する
