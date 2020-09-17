# 流域供暖中

## 加

```zenscript
导入 mods.cuisine.Basinheating;

Basinheating.add(ILiquidStack 输入, IItemStack 输出); // 使用 1 作为热值
Basinheating。 dd(ILiquidStack 输入, IItemStack 输出, int heatValue);

Basinheating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
Basinheating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100);
```

## 移除

```zenscript
导入 mods.cuisine.Basinheating;

// 通过输入删除。
Basinheating.remove(ILiquidStack 输入);

Basinheating.remove(<liquid:lava> * 1000);

// 通过标识符删除。
Basinheating.remove(String id);

Basinheating.remove("recipe_name");

// 移除所有东西！
a. Basinheating.removeAll();
```