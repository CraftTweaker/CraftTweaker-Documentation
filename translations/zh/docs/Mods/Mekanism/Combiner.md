# 合并器

到Mekanism 9.7.0 现在可以通过命令 `/ct mek配方组合器` 查看组合器的所有配方字符串。

## 加

```zenscript
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extrajudiciInput, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

到Mekanism 9.7.0, 可以使用IIngredients 作为物品输入和额外输入，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient extrant Input);

mods.mekanism.componer.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.comborer.removeRecipe(<minecraft:iron_ore>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

到Mekanism 9.7.0，现在可以移除所有混合配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.combiner.removeAllRecipes();
```