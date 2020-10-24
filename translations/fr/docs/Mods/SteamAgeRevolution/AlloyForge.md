# Alloy Forge

The Alloy Forge is a machine that converts two input fluids into one output fluid.

## Package
`mods.steamagerevolution.AlloyForge`

## Methods

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** The result of the recipe.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process

## Addition

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack input, ILiquidStack input, ILiquidStack output, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Removal

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack output);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
