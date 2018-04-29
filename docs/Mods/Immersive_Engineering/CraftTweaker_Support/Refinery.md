# 炼油厂
炼油厂相关包可以被用于为沉浸工程的炼油厂添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.Refinery`以导入炼油厂相关包。

## 添加配方

|是否必要   |类型                |数据类型                                           |
|----------|--------------------|----------------------------------------------------|
|必要      |Output（输出）       |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|
|必要      |Input 1（输入1）     |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|
|必要      |Input 2（输入2）     |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|
|必要      |Energy（能量）       |整数                                                 |

### 例子
```JAVA
//例
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```


## 移除配方

|类型              |数据类型                                             |
|------------------|----------------------------------------------------|
|Output（输出）     |[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)|

### 例子
```JAVA
//例
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```
