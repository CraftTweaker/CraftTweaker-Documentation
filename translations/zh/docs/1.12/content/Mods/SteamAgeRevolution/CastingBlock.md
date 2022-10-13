# Casting Block

The Casting Block is a machine that converts an input fluid into an output item.

## 所属包
`mods.steamagerevolution.CastingBlock`

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process

## 添加

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack input, IItemStack output, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## 移除

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack output);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
