# 化学废料者

到Mekanism 9.7.0 现在可以通过命令 `/ct mek配方洗涤器来查看化学废料的所有配方字符串`

## 加

```zenscript
mods.mekanism.chemical.washer.addRecipe(IGasStack inputGas, IGasStack outputGas);

mods.mekanis.chemical.washer.addRecipe(<gas:deuterium>, <gas:tritium>);
```

## 移除

```zenscript
mods.mekanism.chemical.washer.removeRecipe(IIngredient outputGas, @Optional IIngredient inputGas);

mods.mekanism.chemical.washer.removeRecipe(<gas:cleanLead>, <gas:lead>);
mods.mekanism.chemical.washer.removeRecipe(<gas:cleanOsmium>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

从Mekanism9.7.0开始，现在可以去掉所有化学废料的配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.chemical.washer.removeAllRecipes();
```