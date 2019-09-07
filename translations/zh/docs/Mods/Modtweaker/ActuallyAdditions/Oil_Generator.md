# 原油发电机

## 所属包名

`mods.actuallyadditions.OilGen`

## 添加配方

`genTime`燃烧时间默认为100？（没有单位）

```zenscript
//mods.actuallyadditions.OilGen.addRecipe(流体名, 产出能量);
//mods.actuallyadditions.OilGen.addRecipe(流体名, 产出能量, 燃烧时间);

mods.actuallyadditions.OilGen.addRecipe(<liquid:water>, 100);
mods.actuallyadditions.OilGen.addRecipe(<liquid:lava>, 1000, 10);
```

## 删除配方

```zenscript
//mods.actuallyadditions.OilGen.removeRecipe(移除该流体的发电配方);
mods.actuallyadditions.OilGen.removeRecipe(<liquid:water>);
```