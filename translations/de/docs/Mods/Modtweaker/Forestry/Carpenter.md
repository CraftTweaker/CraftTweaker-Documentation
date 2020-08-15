# Zimmermann

ModTweaker ermöglicht das Hinzufügen oder Entfernen von Wald-SchreinerRezepten

## Anruf

You can call the package using `mods.forestry.Carpenter`

## Rezept entfernen

```zenscript
//mods.forestry.carpenter.removeRecipe(IItemStack output, @Optional ILiquidStack fluidInput);
mods.forestry.carpenter.removeRecipe(<forestry:portable_alyzer>);
mods.forestry.carpenter.removeRecipe(<forestry:wood_pulp>, <liquid:water>);
```

## Rezeptzusatz

```zenscript
//mods.forestry.Carpenter.addRecipe(IItemStack output, IIngredient[][] Zutaten, int packagingTime, @Optional ILiquidStack fluidInput, @Optional IItemStack box)
mods.forestry.Carpenter.addRecipe(<minecraft:redstone> * 9, [[<minecraft:redstone_block>]], 30);
mods.forestry.Carpenter. ddRecipe(<minecraft:gold_ingot>, [[<minecraft:gold_block>]], 30, <liquid:for.honey> * 100);
mods.forestry.Carpenter. ddRecipe(<minecraft:redstone_block>, [[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>]], 60, <liquid:water> * 200, <minecraft:stone>);
```