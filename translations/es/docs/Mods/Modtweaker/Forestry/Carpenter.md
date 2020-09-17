# Carpintero

ModTweaker te permite añadir o eliminar recetas de carpintero forestal

## Llamando

You can call the package using `mods.forestry.Carpenter`

## Receta eliminada

```zenscript
//mods.forestry.Carpenter.removeRecipe(salida IItemStack, @Optional ILiquidStack fluidInput);
mods.forestry.Carpenter.removeRecipe(<forestry:portable_alyzer>);
mods.forestry.Carpenter.removeRecipe(<forestry:wood_pulp>, <liquid:water>);
```

## Adición de receta

```zenscript
//mods.forestry.Carpenter.addRecipe(salida IIItemStack, IIngredient[][] ingredientes, int packagingTime, @Optional ILiquidStack fluidInput, @Optional IItemStack box)
mods.forestry.Carpenter.addRecipe(<minecraft:redstone> * 9, [[<minecraft:redstone_block>]], 30);
mods.forestry.Carpenter. ddRecipe(<minecraft:gold_ingot>, [[<minecraft:gold_block>]], 30, <liquid:for.honey> * 100);
mods.forestry.Carpenter. ddReceta(<minecraft:redstone_block>, [[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>]], 60, <liquid:water> * 200, <minecraft:stone>);
```