# Cauldron Cleaning

The *cauldroncleaning* package is used for adding or removing recipes to/from the Cauldron.

## 导入包

You can call the *cauldroncleaning* package using `mods.skyresources.cauldronclean`

## 配方添加

```zenscript
//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.cauldronclean.addRecipe(<minecraft:diamond>, <minecraft:dirt>);

//mods.skyresources.cauldronclean.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.cauldronclean.addRecipe(<minecraft:emerald>, <minecraft:dirt>, 0.50);
```

## 删除配方

```zenscript
//mods.skyresources.cauldronclean.removeRecipe(IItemStack output);
mods.skyresources.cauldronclean.removeRecipe(<minecraft:diamond>);
```