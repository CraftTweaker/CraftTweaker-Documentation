# 原油发电机

## 相关包
`mods.actuallyadditions.OilGen`


## 添加配方


`genTime` 如果省略默认为100
```
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount);
//mods.actuallyadditions.OilGen.addRecipe(ILiquidStack fluid, int genAmount, int genTime);
//fluid 流体
//genAmount 产生的能量
//gentime 发电时间

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## 移除

```
//mods.actuallyadditions.OilGen.removeRecipe(ILiquidStack output);
//output 流体
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```
