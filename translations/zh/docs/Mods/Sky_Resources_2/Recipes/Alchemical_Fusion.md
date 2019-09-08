# Alchemical Fusion

The *fusion* package is used for adding or removing recipes to/from the Alchemical Fusion process.

## 导入包

You can call the *fusion* package using `mods.skyresources.fusion`

## 配方添加

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack output, IItemStack[] input, float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## 删除配方

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```