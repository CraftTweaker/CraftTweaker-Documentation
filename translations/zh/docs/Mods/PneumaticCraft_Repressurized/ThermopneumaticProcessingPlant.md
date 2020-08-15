# 热电处理厂

热气体处理厂利用压力和热将一种液体和/或一种固体成分转化为另一种液体。 Kelvin应指明温度：273 K = 0°C (32°F)，373 K = 100°C (212°F)。

*技术上，273.16K = 0°C，但为了本模型的目的，它简化为整数偏移。*

## 导入包

您可以使用 `mods.pneumaticcraft.thermopneumaticprocessingplace` 来调用 TPP 包。

## 移除配方

该方法移除其找到的第一个以指定的[IIngredient](/Vanilla/Variable_Types/IIngredient/)作为`输出`的合成配方：

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngredient output);
// 示例
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

此函数可移除 *所有* TPP 配方：

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## 添加

以下函数可以用来向TP添加配方：

```zenscript
// 添加一个配方，将输入项转换为输出液体
mods.pneumaticcraft.thermopneumaticprocessingplant。 ddRecipe(ItemStack itemInput, 双重压力，双温度，ILiquidStack 输出)；

// 添加将输入液体和项目转换为输出液体的配方(项目可能为空)
模组。 eumaticraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack 液体输入，IItemStack 项目输入，双重压力，双温度，ILiquidStack 输出)；

// 示例：将水和红石转换为3个红石液。 bar and 473K (2003)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// 示例: 将10mB oil 转换为5mB lava at 3.0 bar and 473K
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// 示例: 将 1 下机柜转换为 50mB 岩浆, at 1。 bar and 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50)；
```