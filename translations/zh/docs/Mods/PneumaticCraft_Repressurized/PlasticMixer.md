# 塑料混合器

塑料混合器是具有两个函数的机器：

* 用红色、绿色和蓝色染料来将液体塑料薄板固化为固体塑料板材。
* 将固体塑料板熔化为液体塑料板。 这要求最低温度为150℃(423K)。

CraftT弱化支持增加了指定用于熔化和/或固化目的的任何项目和液体组合的能力。 可以具体规定物项只能熔化，液体只能固化，或允许双向处理。

固化目标物品可以是任何物品，但在这里使用彩色物品是非常有意义的。 因为总是使用染料，而不论输出项是否可彩色

## 导入

您可以使用 `mods.pneumaticcraft.plasticmixer` 来调用塑料混合器。

## 移除配方

This function removes the first recipe it finds with the given [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `input`:

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack fluid);
// 示例
mods.pneumaticraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

此函数将删除 *所有* 个塑料混合器配方：

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## 添加

以下函数可以用来向TP添加配方：

```zenscript
// 添加双向配方(Kelvin中的温度)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack 液体，IItemStack stack，int tyature);

// 添加允许溶化的配方仅
mods.pneumaticcraft.plasticmixer。 ddSolidifyOnlyRecipe(ILiquidStack 液体输入，IItemStack itemOutput)；

// 添加一个只允许熔化的配方(Kelvin温度)
mods.pneumaticraft.plasticmixer。 ddMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// 示例: 将100mB Lava 转换成/从混凝土(于573K时熔化)
mods. neumaticraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// 示例: 将2000mB Oil 转换成塑料(但不允许熔化)
mods.pneumaticcraft.plasticmixer。 ddSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// 示例: 将塑料转换为 100mB Oil at 473K (但不允许固化)
mods. neumaticraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473)；
```