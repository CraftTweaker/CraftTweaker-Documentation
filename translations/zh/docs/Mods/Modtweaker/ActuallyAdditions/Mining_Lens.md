# 矿工透镜

## 所属包名

`mods.actuallyadditions.MiningLens`

## 添加配方

```zenscript
//mods.actuallyadditions.MiningLens.addStoneOre(矿物词典名, 权重值);
//主世界矿物
mods.actuallyadditions.MiningLens.addStoneOre(<ore:oreIron>, 2);


//mods.actuallyadditions.MiningLens.addNetherOre(矿物词典名, 权重值);
//下界矿物
mods.actuallyadditions.MiningLens.addNetherOre(<ore:oreGold>, 5);
```

## 删除配方

```zenscript
//mods.actuallyadditions.MiningLens.removeStoneOre(矿物词典名)
//删除主世界出产
mods.actuallyadditions.MiningLens.removeStoneOre(<ore:oreIron>)



//mods.actuallyadditions.MiningLens.removeNetherOre(矿物词典名)
//删除下界出产
mods.actuallyadditions.MiningLens.removeNetherOre(<ore:oreGold>)
```