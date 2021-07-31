# Rock Grinder

The *rockgrinder* package is used for adding or removing recipes to/from the Rock Grinder.

## 导入包

You can call the *rockgrinder* package using `mods.skyresources.rockgrinder`

## 配方添加

```zenscript
//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input);
mods.skyresources.rockgrinder.addRecipe(<minecraft:diamond>, <minecraft:stone>);

//mods.skyresources.rockgrinder.addRecipe(IItemStack output, IItemStack input, float chance);
mods.skyresources.rockgrinder.addRecipe(<minecraft:emerald>, <minecraft:stone>, 0.50);
```

## 删除配方

```zenscript
//mods.skyresources.rockgrinder.removeRecipe(IItemStack output);
mods.skyresources.rockgrinder.removeRecipe(<minecraft:gravel>);
```