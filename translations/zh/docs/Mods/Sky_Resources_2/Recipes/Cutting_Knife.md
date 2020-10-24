# Cutting Knife

The *knife* package is used for adding or removing recipes to/from the Cutting Knife.

## 导入包

You can call the *knife* package using `mods.skyresources.knife`

## 配方添加

```zenscript
//mods.skyresources.knife.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.knife.addRecipe(<minecraft:diamond>, <minecraft:stone>);
```

## 删除配方

```zenscript
//mods.skyresources.knife.removeRecipe(IItemStack output);
mods.skyresources.knife.removeRecipe(<minecraft:melon>);
```