# 砂轮

你可以使用Craft tweaker添加或移除星辉魔法砂轮的合成表。


## 导入
使用`mods.astralsorcery.Grindstone`以导入砂轮相关包。

## 移除
这个方法移除第一个`输出`为传入的[物品堆](/Vanilla/Items/IItemStack)的合成。 
如果有多个合成表可以合成传入的物品，你需要多次使用这个方法！

```JAVA
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
//output：输出物品
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## 添加
```JAVA
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
//input：输入物品
//output：输出物品
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);
```
