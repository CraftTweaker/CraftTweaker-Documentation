# 化学晶体

到Mekanism 9.7.0 现在可以通过命令 `/ct mektaches crystallizer` 查看化学水晶体的所有配方字符串。

## 加

```zenscript
mods.mekanism.chemical.crystalizer.addRecipe(IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.crystallizer.addRecipe(<gas:water>, <minecraft:ice>);
```

## 移除

```zenscript
mods.mekanism.chemical.crystalizer.removeRecipe(IIngredient outputStack, @Optional IIngredient inputGas);

mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:otherdust:4>, <gas:lithium>);
mods.mekanism.chemical.crystallizer.removeRecipe(<mekanism:crystal:1>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

到Mekanism 9.7.0, 现在可以移除所有化学晶体配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.chemical.crystalizer.removeAllRecipes();
```