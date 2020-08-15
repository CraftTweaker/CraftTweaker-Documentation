# 发酵器

ModTinflow允许您添加或移除林业肥料配方

## 导入包

您可以使用 `mods.forestry.Fermenter` 来调用软件包。

## 删除配方

```zenscript
//mods.forestry.Fermenter.removeRecipe(IIngredient input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## 配方添加

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, IItemStack resource, ILiquidStack fluidInput, int fermentationValue, float fluidOutModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

液体输出量：发酵值* 液体输出修改器

| 参数          | 类型                                             | 描述           |
| ----------- | ---------------------------------------------- | ------------ |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | 矩形的输出        |
| 资源          | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)  | 乐施会的项目输入     |
| fluidInput  | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | 累积体液体输入      |
| 发酵值         | 整数                                             | 有机项目上的输入流量需要 |
| 流体输出修改器     | int                                            | 输出倍数         |

## 燃料移除

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## 燃料添加

```zenscript
//mods.forestry.Fermenter.addFuel(ItemStack item, int fermentPerCycle, int burning Dur);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| 参数    | 类型                                       | 说明                     |
| ----- | ---------------------------------------- | ---------------------- |
| 项目    | [IItemStack](/Vanilla/Items/IItemStack/) | 要成为发酵器有效燃料的物品          |
| 发酵周期线 | 整数                                       | 每个工作周期发酵量多少，即输入的液体消耗量。 |
| 燃烧时长  | 整数                                       | 这种燃料中的单一物品的工作周期在期满前保持。 |