# 热气动加工机（Thermopneumatic Processing Plant）

热气动加工机（简称 TPP）使用压力和温度将一种物品和/一种流体转化为另一种流体。温度以开氏度表示：273 K = 0°C (32°F)， 373 K = 100°C (212°F)。

*事实上， 273.16 K = 0°C，但为了简便，本模组将换算公式四舍五入到整数。*

## 导入

使用 `mods.pneumaticcraft.thermopneumaticprocessingplant`以导入热气动加工机相关包。

## 移除

以下函数会移除第一个 `output (输出)` 为指定[材料（IIngredient）](/Vanilla/Variable_Types/IIngredient)的配方：

```
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngredient output);
//output 输出

// 实例
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

以下函数会移除*所有*热气动加工机配方：

```
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## 添加

以下函数用于添加热气动加工机配方：

```java
// 添加将一种物品转化为流体的配方
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(IItemStack itemInput, double pressure, double temperature, ILiquidStack output);
//itemInput 输入（物品）
//pressure 最低气压
//temperature 最低温度
//output 输出

// 添加将一种物品和一种流体转化为流体的配方（物品可以为空 null)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, double pressure, double temperature, ILiquidStack output);
//liquidInput 输入（流体）
//itemInput 输入（物品）
//pressure 最低气压
//temperature 最低温度
//output 输出

// 实例：在 3.0 bar 和 473K (200C)的情况下将水和红石转化为红石液体
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <minecraft:redstone>, 3.0, 473, <liquid:redstone> * 250);
// 实例：在 3.0 bar 和 473K 的情况下将 10mB 的油转化为 5mB 的岩浆
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// 实例：在 1.5 bar 和 573K 的情况下将 1 块地狱岩转化为 50mB 的岩浆
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```
