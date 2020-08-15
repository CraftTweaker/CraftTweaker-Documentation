# 遠心分離機

ModTweakerを使用すると、森林の遠心分離レシピを追加または削除できます

## 発信中

You can call the package using `mods.forestry.Centrifuge`

## レシピの削除

```zenscript
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Reipe Addition

```zenscript
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] output, IItemStack 食材, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```