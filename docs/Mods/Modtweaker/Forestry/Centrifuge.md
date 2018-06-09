# 离心机

ModTweaker 允许你添加或移除林业离心机配方

## 导入
使用 `mods.forestry.Centrifuge` 以导入相关包

## 移除配方

```JAVA
//mods.forestry.Centrifuge.removeRecipe(IIngredient input);
//input 输入
mods.forestry.Centrifuge.removeRecipe(<forestry:bee_combs:*>);

```


## 添加配方

```JAVA
//mods.forestry.Centrifuge.addRecipe(WeightedItemStack[] output, IItemStack ingredients, int packagingTime);
//output 输出（加权物品堆）（数组）
//ingredients 材料
//packagingTime 时间
mods.forestry.Centrifuge.addRecipe([(<minecraft:redstone> * 9) % 80, <minecraft:gold_ingot> % 12], <minecraft:redstone_block>, 100);
```

