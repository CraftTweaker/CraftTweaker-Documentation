# 共振仪

ModTweaker 允许你添加或移除更多实用设备2的共振仪配方

## 导入
使用 `mods.extrautils2.Resonator` 以导入共振仪相关包

## 移除

```JAVA
//mods.extrautils2.Resonator.remove(IItemStack outout);
//output 输出
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```


## 添加

```JAVA

//1 GP = 100 energy（能量）
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
//output 输出
//input 输入
//energy 能量
//addOwnerTag 是否添加所有者标签（可选）
mods.extrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```
