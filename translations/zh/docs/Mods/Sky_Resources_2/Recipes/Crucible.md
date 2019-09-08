# Crucible

The *crucible* package is used for adding or removing recipes to/from the Crucible.

## 导入包

You can call the *crucible* package using `mods.skyresources.crucible`

## 配方添加

```zenscript
//mods.skyresources.crucible.addRecipe(ILiquidStack output, IItemStack input);
mods.skyresources.crucible.addRecipe(<liquid:lava> * 500, <minecraft:cobblestone>);
```

## 删除配方

```zenscript
//mods.skyresources.crucible.removeRecipe(ILiquidStack output);
mods.skyresources.crucible.removeRecipe(<liquid:lava>);
```