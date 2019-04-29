# Centrifuge

ModTweaker allows you to add or remove forestry Centrifuge Recipes

## Calling

You can call the package using `mods.forestry.Centrifuge`

## Recipe Removal

```JAVA
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```

## Reipe Addition

```JAVA
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] output, IItemStack ingredients, int packagingTime);
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```