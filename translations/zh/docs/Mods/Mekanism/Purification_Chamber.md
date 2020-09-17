# 净化分庭

到Mekanism 9.7.0，现在可以通过命令 `/ct mek配方净化` 查看净化分庭的所有配方字符串。

## 加

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

由于Mekanism 9.7.0 输入气体不再仅限于氧气，

另外，由于Mekanism 9.7.0，可以使用IIngredients 作为项目输入，而不仅仅是IItemStacks。

注意：目前所有这一切都是在java的不同可能性上循环的，而不是在ZenScript中添加。 目前，机器本身没有用于支持复合成份或修复术。

## 移除

```zenscript
mods.mekanism.purification.removeRecipe(IIngredient itemOutput, @Optional IIngredient itemInput);

mods.mekanis.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

指定输入参数只会删除使用所述输入的特定配方。 忽略输入参数将删除所有生成指定输出的配方。

## 删除所有配方

由于Mekanisis 9.7.0，现在可以移除所有净化室配方。 (这排除了任何通过 CraftTweaker 添加的配方

```zenscript
mods.mekanism.purification.removeAllRecipes();
```