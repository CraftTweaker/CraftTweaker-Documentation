# 混合器
混合器相关包可以被用于为沉浸工程的混合器添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.Mixer`以导入沉浸工程混合器相关包。

## 添加配方

|是否必要   |类型                  |数据类型                                                     |
|----------|----------------------|-------------------------------------------------------------|
|必要      |Fluid Output（流体输出）|[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)                  |
|必要      |Fluid Input （流体输入）|[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)                  |
|必要      |Item Inputs（物品输入） |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)数组  |
|必要      |Energy（能量）          |整数                                                      |

### 例子
```JAVA
//例:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```



## 移除配方

|类型              |数据类型                                         |
|------------------|---------------------------------------------------|
|Output（输出）     |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|

### 例子
```JAVA
//例:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```
