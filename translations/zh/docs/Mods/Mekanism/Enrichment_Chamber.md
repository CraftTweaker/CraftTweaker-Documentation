# 浓缩分庭

到Mekanism 9.7.0 现在可以通过命令 `/ct mek配方浓缩` 查看浓缩商会的所有配方字符串。

## 加

```zenscript
mods.mekanism.frimment.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanis.enricomment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

由于Mekanism 9.7.0，可以使用IIngredients 作为输入堆栈，而不仅仅是IItemStack。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.recomplement.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enfyment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enricomment.remment.removeRecipe(<minecraft:stonebrick:1>);
```

指定输出参数只会移除从该输入产生该输出的特定配方。 忽略输出参数将删除输入项能够生成的所有配方。

## 删除所有配方

由于Mekanisis 9.7.0，现在可以移除所有浓缩室配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.concurment.removeAllRecipes();
```