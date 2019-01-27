# 砂轮（Grindstone）

你可以使用 CrT 添加或移除星辉魔法砂轮的配方。

## 导入

使用`mods.astralsorcery.Grindstone`以导入砂轮配方相关包。

## 移除配方

这个方法移除第一个`输出`为传入的物品堆[（IItemStack）](/Vanilla/Items/IItemStack/)的砂轮配方。   
如果有多个配方可以合成传入的物品，你需要多次使用这个方法。

```JAVA
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
//output 输出
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## 添加配方

```JAVA
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
//input 输入
//output 输出
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
//input 输入
//output 输出
//doubleChance 两倍产物概率
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```