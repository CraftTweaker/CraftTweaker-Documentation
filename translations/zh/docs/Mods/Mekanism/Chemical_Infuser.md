# 化学感染用户

从Mekanism 9.7.0 现在可以通过命令 `/ct mek配方的化学Infuser` 查看所有配方字符串。

## 加

```zenscript
mods.mekanism.chemical.infuser.addRecipe(IGasStack inputGas1, IGasStack inputGas2, IGasStack outputGas);

mods.mekanism.chemical.infuser.addRecipe(<gas:water>, <gas:deuterium>, <gas:tritium>);
```

## 移除

```zenscript
mods.mekanism.chemical.infuser.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas1, @Optional IIngredient inputGas2);

mods.mekanism.chemical.infuser.removeRecipe(<gas:hydrogenchloride>, <gas:hydrogen>, <gas:chlorine>);
mods.mekanism.chemical.infuser.removeRecipe(<gas:fusionfuel>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

由于Mekanism 9.7.0，现在可以移除所有化学感染者配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.chemical.infuser.removeAllRecipes();
```