# 发酵机

ModTweaker 允许你添加或移除林业发酵机配方

## 导入
使用 `mods.forestry.Fermenter` 以导入相关包

## 移除配方

```JAVA
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
//input 输入
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```


## 添加配方

```JAVA
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, IItemStack resource, ILiquidStack fluidInput, int fermentationValue, float fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```
流体输出数量计算公式: fermentationValue * fluidOutputModifier

| 参数                 | 类型                                                   | 描述                                          |
|---------------------|--------------------------------------------------------|-----------------------------------------------|
| fluidOutput         | 流体堆（[ILiquidStack](/Vanilla/Liquids/ILiquidStack)） | 输出                                          |
| resource            | 物品堆（[IItemStack](/Vanilla/Items/IItemStack)）       | 物品输入                                      |
| fluidInput          | 流体堆（[ILiquidStack](/Vanilla/Liquids/ILiquidStack) ）| 流体输入                                      |
| fermentationValue   | 整型                                                   | 有机物发酵需要的流体数量                        |
| fluidOutputModifier | 整型                                                   | 输出倍增器                                     |


## 移除催化剂

```JAVA
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
//fermenter 催化剂
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```


## 添加催化剂

```JAVA
//mods.forestry.Fermenter.addFuel(IItemStack item, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

|参数            | 类型                                   | 描述                                                                                 |
|----------------|----------------------------------------|------------------------------------------------------------------------------------|
|item            |物品堆（[IItemStack](/Vanilla/Items/IItemStack) ）|需要添加的催化剂                                                             |
|fermentPerCycle |整型                                    |每个工作周期发酵的量，即消耗输入的流体的量                                              |
|burnDuration    |整型                                     |单个物品完全消耗需要的的工作周期数量                                                  |
