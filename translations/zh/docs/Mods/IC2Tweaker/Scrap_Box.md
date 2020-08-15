# 废纸箱

## 所属包名

`导入 mods.ic2.ScrappBox;`

## 使用方式

- **[重量物品](/Vanilla/Items/WeightedItemStack/) 重量物品** 废箱投放池的新条目。 百分比重量将除以100。
- **浮点数** 此新条目的权重

### 添加拖放(重量项目)

```zenscript
mods.ic2.Scrappox.addDrop(权重物品，权重物品)；

mods.ic2.Scrappox.addDrop(<minecraft:diamond_ore>.权重(0.1))；
mods.ic2.Scrappox.addDrop(<minecraft:diamond_ore> % 10);
```

### 添加 (StemStack, 浮动)

```zenscript
mods.ic2.Scrappox.addDrop(StemStack 项目，浮点重量)；
mods.ic2.Scrappox.addDrop(<minecraft:diamond_ore>, 0.1F)；
```

## 删除配方

- 如果安装了 IC2 经典调节器并且正在使用Ic2 经典而不是Ic2 实验设备，碎片箱可以移除。 See [here](/Mods/IC2ClassicTweaker/Scrap_Box) for doc.
- 如果使用 Ic2 实验，则无法移除。