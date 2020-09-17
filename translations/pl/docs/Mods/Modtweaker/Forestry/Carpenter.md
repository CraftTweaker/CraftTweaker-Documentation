# Stolarz

ModTweaker pozwala na dodanie lub usunięcie przepisów leśnego stolarza

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.Carpenter`

## Usuwanie przepisów

```zenscript
//mods.forestry.Carpenter.removeRecipe(IItemStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Carpenter.removeRecipe(<forestry:portable_alyzer>);
mods.forestry.Carpenter.removeRecipe(<forestry:wood_pulp>, <liquid:water>);
```

## Dodawanie przepisów

```zenscript
//mods.forestry.Carpenter.addRecipe(IItemStack output, IIngredient[][] składniki, int packingTime, @Optional ILiquidStack fluidInput, @Optional IItemStack box)
mods.forestry.Carpenter.addRecipe(<minecraft:redstone> * 9, [[<minecraft:redstone_block>]], 30);
mods.forestry.Carpenter. ddRecipe(<minecraft:gold_ingot>, [[<minecraft:gold_block>]], 30, <liquid:for.honey> * 100);
mods.forestry.Carpenter. ddRecpe(<minecraft:redstone_block>, [[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone><minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>]], 60, <liquid:water> * 200, <minecraft:stone>);
```