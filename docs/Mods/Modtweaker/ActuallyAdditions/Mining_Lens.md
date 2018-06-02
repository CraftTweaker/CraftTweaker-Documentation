# 矿工透镜

## 相关包
`mods.actuallyadditions.MiningLens`


## 添加



```
//添加主世界矿物
//mods.actuallyadditions.MiningLens.addStoneOre(IOreDictEntry ore, int weight);
//ore 矿物
//weight 权重
mods.actuallyadditions.MiningLens.addStoneOre(<ore:oreIron>, 2);


//添加下界矿物
//mods.actuallyadditions.MiningLens.addNetherOre(IOreDictEntry ore, int weight);
//ore 矿物
//weight 权重
mods.actuallyadditions.MiningLens.addNetherOre(<ore:oreGold>, 5);
```

## 移除

```
//移除主世界矿物
//mods.actuallyadditions.MiningLens.removeStoneOre(IOreDictEntry ore)
//ore 矿物
mods.actuallyadditions.MiningLens.removeStoneOre(<ore:oreIron>)


//移除下界矿物
//mods.actuallyadditions.MiningLens.removeNetherOre(IOreDictEntry ore)
//ore 矿物
mods.actuallyadditions.MiningLens.removeNetherOre(<ore:oreGold>)
```
