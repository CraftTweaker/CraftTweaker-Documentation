# Crucible

The Crucible is a machine that converts an input item into an output fluid using steam.

## Package
`mods.steamagerevolution.Crucible`

## Methods

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** The result of the recipe.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process
- **int steamCost** Cost of Steam for machine to process

## Addition

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient input, ILiquidStack output, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Removal

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
