# 星能聚合配方（Starlight Infusion Recipe）

你可以添加或移除聚合配方。

## 导入

使用`mods.astralsorcery.StarlightInfusion`以导入星能聚合配方相关包。

## 移除配方

This will remove the first infusion it finds that creates the provided [IItemStack](/Vanilla/Items/IItemStack/) `output`.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```JAVA
//mods.astralsorcery.StarlightInfusion.removeInfusion(IItemStack output);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## Addition

```JAVA
//mods.astralsorcery.StarlightInfusion.addInfusion(IItemStack input, IItemStack output, boolean consumeMultiple, float consumptionChance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```