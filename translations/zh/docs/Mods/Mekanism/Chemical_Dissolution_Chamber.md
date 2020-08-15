# 化学拆解分庭

截至Mekanism 9.7。 现在可以通过命令 `/ct mek配方解散` 查看化学拆解分庭的所有配方字符串。

## 加

```zenscript
mods.mekanism.chemical.dissolution.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

由于Mekanism 9.7.0，可以使用IIngredients 作为输入堆栈，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.dissolution.removeRecipe(<gas:tin>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

从Mekanism9.7.0开始，现在可以移除所有化学拆解室配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.chemical.dissolution.removeAllRecipes();
```