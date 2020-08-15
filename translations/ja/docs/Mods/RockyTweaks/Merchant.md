# Merchant

## コマンド

以下のコマンドは、利用可能な商人の職業についての情報を取得するために追加されます & carrers:

- `/ct merchant professions` - 有効な商人の職業のログを出力します。
- `/ct merchant careers [profession]` - すべてまたは指定された職業に対して有効なキャリアのログを出力します。

## パッケージ

`mods.rockytweaks.Merchant`

## 加算

取引は特定の商人の職業 & carrerに追加できます。

```zenscript
// addTrade(String profession, String career, IItemstack input1, @Optional IItemstack input2, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", "nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## 削除

マーチャント貿易削除は現在不可能です。
