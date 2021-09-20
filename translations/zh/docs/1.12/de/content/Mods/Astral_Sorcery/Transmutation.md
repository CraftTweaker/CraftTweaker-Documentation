# 星辉聚合（Starlight Transmutation）

你可以添加或移除星辉聚合配方

## 导入

使用`mods.astralsorcery.LightTransmutation`以导入星辉聚合相关包。

## 移除配方

This function removes the first recipe it finds that returns provided [IItemStack](/Vanilla/Items/IItemStack/) `output` and uses `matchStack` to determine whether it should also match Metadata.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```zenscript
//mods.astralsorcery.LightTransmutation.removeTransmutation(IItemStack stackToRemove, boolean matchMeta);
//stackToRemove 需要移除的物品
//matchMeta 是否匹配物品附加值
mods.astralsorcery.LightTransmutation.removeTransmutation(<minecraft:end_stone>, false);
```

## 加

```zenscript
//mods.astralsorcery.LightTransmutation.addTransmutation(IItemStack stackIn, IItemStack stackOut, double cost);
//stackIn 输入
//stackOut 输出
//cost 消耗
mods.astralsorcery.LightTransmutation.addTransmutation(<minecraft:grass>, <minecraft:gold_ore>, 10);
```