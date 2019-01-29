# 星能聚合配方（Starlight Infusion Recipe）

你可以添加或移除聚合配方。

## 导入

使用`mods.astralsorcery.StarlightInfusion`以导入星能聚合配方相关包。

## 移除配方

此方法将移除第一个`输出`为传入的物品堆[（IItemStack）](/Vanilla/Items/IItemStack/)的星能聚合配方。   
如果有多个配方可以合成传入的物品，你需要多次使用这个方法。

```JAVA
//mods.astralsorcery.StarlightInfusion.removeInfusion(IItemStack output);
//output 输出
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## 添加配方

```JAVA
//mods.astralsorcery.StarlightInfusion.addInfusion(IItemStack input, IItemStack output, boolean consumeMultiple, float consumptionChance, int craftingTickTime);
//input 输入
//output 输出
//comsumeMultiple 是否消耗多格星能液
//consumptionChance 消耗星能液的概率
//craftingTickTime 合成
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```