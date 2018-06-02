# 粉碎机

ModTweaker 允许你添加或移除更多实用设备2的粉碎机配方

使用 `mods.extrautils2.Crusher` 以导入粉碎机相关包

## 移除

```JAVA
//mods.extrautils2.Crusher.remove(IItemStack outout);
//output 输出
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```


## 添加

```JAVA
//mods.extrautils2.Crusher.add(IItemStack output, IItemStack input, @Optional IItemStack secondaryOutput, @Optional float secondaryChance);
//output 输出
//input 输入
//secondaryOutput 副产物（可选）
//secondaryChance 副产物概率（可选）
mods.extrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```

