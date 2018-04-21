# 发酵机
发酵机相关包可以被用于为沉浸工程的发酵机添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.Fermenter`以导入发酵机相关包。

## 添加配方

|是否必要  |类型                    |数据类型                                          										|
|----------|-----------------------|----------------------------------------------------------------------------------------|
|必要      |Output（物品输出）      |[IItemStack（物品堆）](/Vanilla/Items/IItemStack) 												|
|必要      |Fluid（流体输出）       |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)     										|
|必要      |Input（输入）           |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) 										|
|必要      |Energy（能量）          |整数																					|

### 例子
```JAVA
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```



## 按输出流体移除配方
|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|Output（输出）     |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)        |

### 例子
```JAVA
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```



## 按输出物品移除配方

|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |

### 例子
```JAVA
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```



## 按输出移除配方

|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |

### 例子
```JAVA
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```
