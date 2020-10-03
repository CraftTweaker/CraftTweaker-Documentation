# Combustion

The *combustion* package is used for adding or removing recipes to/from the Combustion process.

## 导入包

You can call the *combustion* package using `mods.skyresources.combustion`

## 配方添加

```zenscript
//mods.skyresources.combustion.addRecipe(IItemStack output, IItemStack[] input, int temperature);
mods.skyresources.combustion.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:sand> * 2], 420);
```

## 删除配方

```zenscript
//mods.skyresources.combustion.removeRecipe(IItemStack output);
mods.skyresources.combustion.removeRecipe(<minecraft:diamond>);
```