# Canner

## Package
`import mods.ic2.Canner`

## Add Bottle Recipe

```
mods.ic2.Canner.addBottleRecipe(IItemStack output, IIngredient container, IIngredient filler);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```


## Add Enrich Recipe

```
mods.ic2.Canner.addEnrichRecipe(ILiquidStack output, ILiquidStack input, IIngredient additive);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);```
