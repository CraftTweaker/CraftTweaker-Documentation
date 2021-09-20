# 石英磨具（Grindstone）

你可以使用 CrT 添加或移除星辉魔法砂轮的配方。

## 导入

使用`mods.astralsorcery.Grindstone`以导入砂轮配方相关包。

## 移除配方

This will remove the first grinding recipe it finds that creates the provided [IItemStack](/Vanilla/Items/IItemStack/) `output`.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
//output 输出
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## 加

```zenscript
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