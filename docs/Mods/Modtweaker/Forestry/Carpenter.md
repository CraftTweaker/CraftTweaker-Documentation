# Carpenter

ModTweaker allows you to add or remove forestry Carpenter Recipes

## Calling
You can call the  package using `mods.forestry.Carpenter`

## Recipe Removal

```JAVA
//mods.forestry.Carpenter.removeRecipe(IItemStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Carpenter.removeRecipe(<Forestry:flutterlizer>);
mods.forestry.Carpenter.removeRecipe(<Forestry:beealizer>, <liquid:water>);
```


## Recipe Addition

```JAVA
//mods.forestry.Carpenter.addRecipe(IItemStack output, IIngredient[][] ingredients, int packagingTime, @Optional ILiquidStack fluidInput, @Optional IItemStack box)
mods.forestry.Carpenter.addRecipe(<minecraft:redstone> * 9, [[<minecraft:redstone_block>]], 30);
mods.forestry.Carpenter.addRecipe(<minecraft:gold_ingot>, [[<minecraft:gold_block>]], 30, <liquid:honey>);
mods.forestry.Carpenter.addRecipe(<minecraft:redstone_block>, [[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>]], 60, <liquid:water>, <minecraft:stone>);
```

