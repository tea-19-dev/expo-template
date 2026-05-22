# Web Rules (React Native Web / Expo)

> 目的: Expo の Web ターゲットで実装する際の最低限ルール。

## 実装方針

- 画面実装は Expo Router（`src/app/`）を使う
- UI は `src/tw/` の CSS ラップ済みコンポーネントを優先して使う
- `className` の条件分岐は `cn`（`src/utils/cn.ts`）を使う

## スタイリング

- 基本は Tailwind / NativeWind のユーティリティクラスを使う
- ダークモードは `dark:` variant で指定する
- 色は `src/global.css` のトークン（`bg-background` など）を使う

## Web 固有対応

- Web 専用分岐が必要な場合のみ `Platform.OS === "web"` を使う
- 分岐が増える場合は `.web.tsx` への分離を検討する
- タッチ前提 UI でも、Web ではキーボード操作可能性を考慮する

## 禁止事項

- コンポーネント内で直接 API シークレットを扱わない
- 画面で直接 `fetch` せず、将来の差し替えを考え API 層へ寄せる
- ハードコード文字列を乱立させない
