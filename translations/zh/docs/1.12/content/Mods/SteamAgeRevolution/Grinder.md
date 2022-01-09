# Grinder

The Grinder is a machine that converts an input item into an output item using steam.

## 所属包
`mods.steamagerevolution.Grinder`

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process
- **int steamCost** Cost of Steam for machine to process

## 添加配方

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## 移除配方

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack output);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
