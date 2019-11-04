# Casting Block

The Casting Block is a machine that converts an input fluid into an output item.

## Package
`mods.steamagerevolution.CastingBlock`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process

## Addition

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack input, IItemStack output, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Removal

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack output);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
