# 化学喷射分庭

截至Mekanism 9.7。 现在可以通过命令 `/ct mek配方注入` 查看化学注入室的所有配方字符串。

## 加

```zenscript
mods.mekanism.chemical.injection.addRecipe(IIngredient inputStack, IGasStack inputGas, IItemStack outputStack);

mods.mekanism.chemical.injection.addRecipe(<minecraft:hardened_clay:1>, <gas:water>, <minecraft:clay>);
```

由于Mekanism 9.7.0 输入气体不再仅限于硫酸、水或氯化氢。

另外，由于Mekanism 9.7.0，可以使用IIngredients 作为输入堆栈，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.chemical.injectiveRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Ingredient inputGas);

mods.mekanism.chemical.injection.removeRecipe(<mekanism:shard:2>, <mekanism:oreblock>, <gas:hydrogenchloride>);
mods.mekanism.chemical.intraction.removeRecipe(<mekanism:shard:1>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

从Mekanism 9.7.0开始，现在可以移除化学品注射室的所有配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.chemical.injection.removeAllRecipes();
```