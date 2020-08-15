# Precision Sawmill

到Mekanism 9.7.0 现在可以通过命令 `/ct mektedes sawmill` 查看精致剑的所有配方字符串。

## 加

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack outputStack, @Optional IItemStack bonusOutput, @Optional double bonusChance);

mods. ekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

由于Mekanism 9.7.0，可以使用IIngredients 作为输入堆栈，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);

mods.mekanis.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:planks> , <minecraft:wool>);
mods.mekanis.sawmill.removeRecipe(<minecraft:planks:*>);
```

指定输出参数只会移除从该输入产生该输出的特定配方。 忽略输出参数将删除输入项能够生成的所有配方。

## 删除所有配方

由于Mekanisis 9.7.0，现在有可能去掉所有精准锯齿的配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.sawmill.removeAllRecipes();
```