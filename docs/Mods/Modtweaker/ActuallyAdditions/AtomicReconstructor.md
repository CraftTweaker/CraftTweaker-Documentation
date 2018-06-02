# 原子再构机

## 相关包
`mods.actuallyadditions.AtomicReconstructor`

## 添加

```
//mods.actuallyadditions.AtomicReconstructor.addRecipe(IItemStack output, IItemStack input, int energyUsed);
//output 输入
//input 输出
//energyUsed 消耗的能量
mods.actuallyadditions.AtomicReconstructor.addRecipe(<minecraft:fire_charge>, <minecraft:coal:1>, 1000);
```

## 移除

```
//mods.actuallyadditions.AtomicReconstructor.removeRecipe(IItemStack output);
//output 输出
mods.actuallyadditions.AtomicReconstructor.removeRecipe(<minecraft:coal>);
```
