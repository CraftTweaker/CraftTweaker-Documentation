# 能量化冶炼器

到Mekanism 9.7.0 现在可以通过命令 `/ct mek配方冶炼厂` 查看所有配方字符串。

## 加

```zenscript
mods.mekanism.smelter.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanis.smelter.addRecipe(<minecraft:tallgrass:1>, <minecraft:deadbush>);
```

由于Mekanism 9.7.0，可以使用IIngredients 作为输入堆栈，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.smelter.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.smelter.removeRecipe(<minecraft:sand:*>, <minecraft:glass>);
mods.mekanism.smelter.removeRecipe(<minecraft:cobblestone>);
```

指定输出参数只会移除从该输入产生该输出的特定配方。 忽略输出参数将删除输入项能够生成的所有配方。

## 删除所有配方

到Mekanism 9.7.0，现在可以移除所有加能冶炼厂配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.smelter.removeAllRecipes();
```