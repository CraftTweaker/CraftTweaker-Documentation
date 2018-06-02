# 挤压机
挤压机相关包可以被用于为沉浸工程的挤压机添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.Squeezer`以导入相关包。

## 添加配方

|是否必要   |类型                   |数据类型                                          					|
|----------|-----------------------|----------------------------------------------------------|
|必要      |Output（物品输出）      |[IItemStack（物品堆）](/Vanilla/Items/IItemStack) 					|
|必要      |Fluid（流体输出）       |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)     	|
|必要      |Input（输入）           |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) |
|必要      |Energy（能量）          |整数																			              		|

### 例子
```JAVA
//例:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```



## 按流体移除配方

|类型              |数据类型                                             |
|------------------|----------------------------------------------------|
|Output（输出）     |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|

### 例子
```JAVA
//例:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```



## 按输出物品移除配方

|类型              |数据类型                                         |
|------------------|------------------------------------------------|
|Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)|

### 例子
```JAVA
//例:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```



## Remove By Input

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example
```JAVA
//Example:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```
