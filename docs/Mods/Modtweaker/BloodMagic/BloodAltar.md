# 血之祭坛

## 相关包
`mods.bloodmagic.BloodAlter`

## 添加

```
//mods.bloodmagic.BloodAltar.addRecipe(IItemStack output, IItemStack input, int minimumTier, int syphon, int consumeRate, int drainRate);
//output 输出
//input 输入
//minimumTier 最低血之祭坛等级
//syphon 消耗LP数量
//consumeRate 
//drainRate
mods.bloodmagic.BloodAltar.addRecipe(<minecraft:glass>, <minecraft:stick>, 0, 20,30,40);
```

## 移除

```
//mods.bloodmagic.BloodAltar.removeRecipe(IItemStack input);
//input 输入
mods.bloodmagic.BloodAltar.removeRecipe(<minecraft:stone>);
```
