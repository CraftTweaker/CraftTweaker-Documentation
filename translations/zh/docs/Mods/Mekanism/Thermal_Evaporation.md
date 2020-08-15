# 热蒸发。

到Mekanism 9.7.0 现在可以通过命令 `/ct mek配方热蒸发` 查看热蒸发的所有配方字符串。

## 加

```zenscript
mods.mekanism.thermalevaporation.addRecipe(ILiquidStack 液体输入, ILiquidStack 液体输出);

mods.mekanism.thermalevaporation.addRecipe(<liquid:liquidfusionfuel>, <liquid:lava>);
```

## 移除

```zenscript
mods.mekanism.thermalevaporation.removeRecipe(IIngredient life Input, @Optional IIngredient 液体输出);

mods.mekanism.thermalevaporation.removeRecipe(<liquid:water>, <liquid:brine>);
mods.mekanism.thermalevaporation.removeRecipe(<liquid:brine>);
```

指定输出参数只会移除从该输入产生该输出的特定配方。 忽略输出参数将删除输入项能够生成的所有配方。

## 删除所有配方

到Mekanism 9.7.0，现在可以消除所有热蒸发植物配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.thermalevaporation.removeAllRecipes();
```