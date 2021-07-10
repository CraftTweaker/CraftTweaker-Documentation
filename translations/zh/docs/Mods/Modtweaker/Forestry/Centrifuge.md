# Centrifuge

ModTweaker allows you to add or remove forestry Centrifuge Recipes

## 导入包

You can call the package using `mods.forestry.Centrifuge`

## Recipe Removal

```zenscript
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Recipe Addition

```zenscript
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] output, IItemStack ingredients, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```