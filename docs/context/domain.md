# Domain Knowledge

> 目的: 用語・ドメインルール・状態遷移を統一し、命名や実装判断のブレを減らす。

## 用語集（Glossary）

| 用語       | 定義     | コード上の表記    |
| ---------- | -------- | ----------------- |
| `{term-a}` | `{説明}` | `{camelCaseName}` |
| `{term-b}` | `{説明}` | `{camelCaseName}` |

## ドメインルール

### `{rule-category}`

- `{必須ルール1}`
- `{必須ルール2}`

## 状態遷移（必要な場合）

```text
{entity-name}
draft -> submitted -> approved
      -> rejected  -> draft
```

## 実装メモ

- 用語はこのファイルの定義に合わせる
- 仕様追加時は `docs/spec/` と同時に更新する
