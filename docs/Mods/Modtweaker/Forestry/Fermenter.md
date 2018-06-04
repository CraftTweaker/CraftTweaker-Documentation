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
| fluidOutput         | 流体堆（[ILiquidStack](/Vanilla/Liquids/ILiquidStack)） | 配方的输出                                     |
| resource            | 物品堆（[IItemStack](/Vanilla/Items/IItemStack)）       | 配方的物品输入                                 |
| fluidInput          | 流体堆（[ILiquidStack](/Vanilla/Liquids/ILiquidStack) ）| 配方的流体输入                                 |
| fermentationValue   | 整型                                                   | Amount of inputFluid on organic item requires |
| fluidOutputModifier | 整型                                                   | Output multiplier                             |


## Fuel Removal

```JAVA
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```


## Fuel Addition

```JAVA
//mods.forestry.Fermenter.addFuel(IItemStack item, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

|Parameter       | Type                                   | Description                                                                        |
|----------------|----------------------------------------|------------------------------------------------------------------------------------|
|item            |[IItemStack](/Vanilla/Items/IItemStack) |Item to become a valid fuel for the fermenter                                       |
|fermentPerCycle |int                                     |How much is fermented per work cycle, i.e. how much fluid of the input is consumed. |
|burnDuration    |int                                     |Amount of work cycles a single item of this fuel lasts before expiring.             |
