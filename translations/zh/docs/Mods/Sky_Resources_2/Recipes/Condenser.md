# Condenser

The *condenser* package is used for adding or removing recipes to/from the Condenser.

## 导入包

You can call the *condenser* package using `mods.skyresources.condenser`

## 配方添加

```zenscript
//mods.skyresources.condenser.addRecipe(IItemStack output, int tickTime, IItemStack catalyst, ILiquidStack inputFluid);
mods.skyresources.condenser.addRecipe(<minecraft:obsidian>, 300, <minecraft:ice>, <liquid:lava>);
```

## 删除配方

```zenscript
//mods.skyresources.condenser.removeRecipe(IItemStack output);
mods.skyresources.condenser.removeRecipe(<minecraft:iron_ingot>);
```