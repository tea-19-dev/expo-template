---
trigger: always_on
---

# iOS / Android Rules (React Native / Expo)

> 目的: モバイル実装での共通品質を担保するためのルール。
> Web との共通規約は `coding-style.md` を先に読むこと。

## プラットフォーム分岐

- `Platform.OS` 分岐は必要最小限にし、増える場合は `.ios.tsx` / `.android.tsx` を検討する
- iOS 固有の見た目調整（shadow など）はインラインでなくスタイルとしてまとまりを持たせる
- iOS 固有変更時は Android 回帰確認をセットで行う

## セーフエリア

- `react-native-safe-area-context` の `SafeAreaView` または `useSafeAreaInsets` を使う
- 固定 `paddingTop` / `marginTop` でのステータスバー回避は禁止

## ナビゲーション

- ナビゲーションは Expo Router に統一する
- 遷移処理（`router.push` など）はイベントハンドラにまとめる
- ディープリンク仕様が必要な場合は `docs/spec/` に先に明記する

## アニメーション / ジェスチャー

- アニメーションは `react-native-reanimated` を使う
- ジェスチャーは `react-native-gesture-handler` を使う
- 体験に必要な箇所のみアニメーションを入れ、過剰な演出は避ける

## 権限（Permissions）

- カメラ・位置情報・通知などは `expo-*` モジュールで取得する
- 権限は必要なタイミングで要求する（起動直後の一括要求を避ける）
- `Info.plist` / Android 権限文言はプロダクトに合わせて明示的に記述する

## パフォーマンス

- リストは `FlatList` / `SectionList` を優先し、`keyExtractor` を必ず設定する
- 画像は `expo-image` を優先する
- デバッグログが本番に残らないようにする
