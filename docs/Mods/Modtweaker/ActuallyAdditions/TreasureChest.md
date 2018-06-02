# 藏宝箱

## 相关包
`mods.actuallyadditions.TreasureChest`

## 添加

```
//mods.actuallyadditions.TreasureChest.addLoot(IItemStack returnItem, int chance, int minAmount, int maxAmount);
//returnItem 获得的物品
//chance 概率
//minAmount 最小数量
//maxAmount 最大数量
mods.actuallyadditions.TreasureChest.addLoot(<minecraft:dirt>, 50, 1, 64);
```

## 移除

```
//mods.actuallyadditions.TreasureChest.removeLoot(IItemStack returnItem);
//returnItem 获得的物品
mods.actuallyadditions.TreasureChest.removeLoot(<minecraft:gold_nugget>);
```
