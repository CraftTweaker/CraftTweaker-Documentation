# マイニングベイ

Minebayでアイテムと交換できます。

## 既定の取引

- 1x Emerald のための硬化した粘土。
- エメラルドの8倍の頭骨
- サドル（エメラルド4倍）
- エメラルドの8倍の卵（メタ100、何もしない）を出現させる
- ダイヤモンドの馬アーマー
- 1倍の鉄のインゴットをエンチャントするボトル
- 1倍鉄インゴット用4倍花火
- シルクタッチエンチャントされた本 (8倍エメラルド)
- 2x 暗視のポーション (3:00) 1x Emerald
- レシピ本1x エメラルド（エメラルド）

## 削除中

## マッチする取引を削除します。

```zenscript
mods.cfm.MineBay.remove(@Optional IIngredient item);

// Remove trade resulting in the nightvision potion (with any amount)
mods.cfm.MineBay.remove(<minecraft:potion>.withTag({Potion: "night_vision"}));
// Remove all trades
mods.cfm.MineBay.remove();
```

現在、貿易の結果によってのみ削除をサポートしています。

## 追加中

## 注文を追加

```zenscript
mods.cfm.MineBay.addTrade(@Nonnull IItemStack item, @Nonnull IItemStack currency);

// Add a trade for 42 sticks given 13 diamonds
mods.cfm.MineBay.addTrade(<minecraft:stick>.withAmount(42),<minecraft:diamond>.withAmount(13));
// Add a trade for 16 apples given 3 emeralds
mods.cfm.MineBay.addTrade(<minecraft:apple>.withAmount(16),<minecraft:emerald>.withAmount(3));
// Add a trade for 1 carrot given 1 emerald
mods.cfm.MineBay.addTrade(<minecraft:carrot>,<minecraft:emerald>);
```