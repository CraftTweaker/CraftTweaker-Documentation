# 月经器

ModTinflow允许您添加或移除林业模拟器配方

## 导入包

您可以使用 `mods.forestry.Moistener` 调用软件包

## 删除配方

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## 添加配方

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack output, IItemStack input, int packingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## 燃料移除

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## 燃料添加

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack项目，IItemStack产品，int moistenerValue，int stage)；
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2)；
```

| 参数  | 类型                                            | 描述                           |
| --- | --------------------------------------------- | ---------------------------- |
| 项目  | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) | 物品成为月份设计器的有效燃料               |
| 产品  | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) | 留下潮湿者工作箱的物品(例如模小麦或毛小麦)。      |
| 月经值 | 整数                                            | 这个项目在多大程度上促成了潮湿者的最终产品。       |
| 阶段  | 整数                                            | 该产品所代表的阶段是什么。 将首先消耗较低阶段值的资源。 |