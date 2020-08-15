# 压力反应分庭

截至Mekanism 9.7。 现在可以透过命令 `/ct mektendes prc` 查看压力反应分庭的所有配方字符串。

## 加

```zenscript
mods.mekanism.reaction.addRecipe(IIngredient itemInput, ILiquidStack life Input, IGasStack gasInput, IItemStack itemOutput, IGasStack gastput, tual energy, int duration);

mods. ekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000)；
```

到Mekanism 9.7.0, 可以使用IIngredients 作为物品，而不仅仅是IItemStacks。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.reaction.reaction.removeRecipe(IIngredient itemOutput, IIngredient gasOutput, @Opinion IIngredient itemInput, @Optional IIngredient gasInput);

mods. ekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, , <gas:hydrogen>);
mods.mekanism.reaction.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

到Mekanism 9.7.0，现在可以移除所有压力反应分庭的配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.reaction.removeAllRecipes();
```