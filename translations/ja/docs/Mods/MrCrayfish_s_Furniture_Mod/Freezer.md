# フリーザー

冷凍庫は冷蔵庫の下部コンパートメントです。

アイテムの凍結に使用できますが、動作にはアイスが必要です。

## 既定の冷凍庫のレシピ

- 水入りのバケツ->氷
- 氷->パックドアイス
- 溶岩入り->黒曜石
- スライムボール -> スノーボール
- 毒じゃがいも→じゃがいも
- 腐った肉 -> 肉

## 削除中

## 一致する冷凍庫のレシピを削除します。

```zenscript
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that result in Ice
mods.cfm.Freezer.remove(<minecraft:ice>);
// Remove recipes that require a Lava Bucket
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Remove all recipes
mods.cfm.Freezer.remove();
```

## 追加中

冷凍庫のレシピを追加します。

## サイズ1の入力のみをサポートします。

```zenscript
mods.cfm.Freezer.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes 16 Ice from a Lava Bucket
mods.cfm.Freezer.addRecipe(<minecraft:ice>.withAmount(16),<minecraft:lava_bucket>);
// Adds a recipe that makes 16 Obsidian from a Water Bucket
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>.withAmount(16),<minecraft:water_bucket>);
// Adds a recipe that makes a Water Bucket from a Bucket
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```