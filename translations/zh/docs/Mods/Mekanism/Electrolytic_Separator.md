# 电解分隔符

到Mekanism 9.7.0 现在可以通过命令 `/ct mek配方分隔符` 查看电解分离器的所有配方字符串。

## 加

```zenscript
mods.mekanism.separator.addRecipe(ILiquidStack inputFluid, double inputRF, IGasStack outputGas1, IGasStack outputGas2);

mods.mekanism.separator.addRecipe(<liquid:liquidfusionfuel>, 5000, <gas:deuterium>, <gas:tritium>);
```

## 移除

```zenscript
mods.mekanism.separator.removeRecipe(IIngredient inputFluid, @Optional IIngredient outputGas1, @Optional IIngredient outputGas2);

mods.mekanism.separator.removeRecipe(<liquid:heavywater>, <gas:deuterium>, <gas:oxygen>);
mods.mekanis.separator.removeRecipe(<liquid:water>);
```

指定输出参数只会移除从该输入产生该输出的特定配方。 忽略输出参数将删除输入项能够生成的所有配方。

## 删除所有配方

由于Mekanism 9.7.0，现在可以移除所有电解分离器配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.separator.removeAllRecipes();
```