# 因子化器

Factorizer Manager 允许您将配方添加到插件制造商。

## 导入软件包

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
导入mods.thermalexten.Factorizer;
```

## 添加配方

您可以添加一条路分割/组合配方或双向绑定。

```zenscript
//mods.thermalrepl.Factorizer.addRecipeSplit(IItemStack in IItemStack out);
mods.thermalex.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

///mods.thermalres.Factorizer.addRecipeCombine(IItemStack in IItemStack out);
mods. Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermal扩张.Factorizer.addRecipeBoth(IItemStack 组合, IItemStack 分割);
mods.thermalabov.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## 删除配方

当然，您也可以删除配方。  
如果您想要删除双向绑定的话，您将需要两次呼叫。

```zenscript
//mods.thermallipl.Factorizer.removeRecipeSplit(StemStack in);
mods.thermalext.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

///mods.thermalexpl.Factorizer.removeRecipeipeCombine(IItemStack in);
mods.thermalexpl.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```