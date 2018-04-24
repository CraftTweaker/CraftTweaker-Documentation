# 灌装机

## 导入相关包
使用`mods.immersiveengineering.BottlingMachine`以导入灌装机相关包。

##添加配方
|是否必要   |类型         |数据类型                                			  |
|----------|-------------|-------------------------------------------------|
|必要      |Output（输出）|[IItemstack（物品堆）](/Vanilla/Items/IItemStack)  			  |
|必要      |Input（输入）|[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)  |
|必要      |Fluid（流体）|[Fluidstack（流体堆）](/Vanilla/Liquids/ILiquidStack)  		  |

### 例子
```JAVA
//例:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```


## 移除配方
|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|输出              |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |

### 例子
```JAVA
//例:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```
