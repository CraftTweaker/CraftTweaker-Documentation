# 星辉聚合（Starlight Transmutation）

你可以添加或移除星辉聚合配方

## 导入

使用`mods.astralsorcery.LightTransmutation`以导入星辉聚合相关包。

## 移除配方

这个方法移除第一个`输出`为传入的的物品堆（[IItemStack](/Vanilla/Items/IItemStack/)）的配方，并且会使用匹配物品堆（` matchStack `）检测是否需要匹配物品附加值。  
如果有多个配方可以合成传入的物品，你需要多次调用此方法！

```JAVA
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
//stackToRemove 需要移除的物品
//matchMeta 是否匹配物品附加值
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## 添加配方

    //mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, double cost);
    //stackIn 输入
    //stackOut 输出
    //cost 消耗
    mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);