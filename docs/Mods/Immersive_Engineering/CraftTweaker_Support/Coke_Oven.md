# 焦炉

## 导入相关包
使用`mods.immersiveengineering.CokeOven`以导入焦炉相关包。

## 添加配方
|是否必要   |类型      	|数据类型                                			 |
|----------|------------|----------------------------------------------------|
|必要      |Output（输出）  	|[IItemstack（物品堆）](/Vanilla/Items/IItemStack)  			 |
|必要      |Fuel Output（燃料） |整数  										 |
|必要      |Input（输入）    	|[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)  |
|必要      |Time（时间）    	|整数  			 							 	 |

### 例子
```JAVA
//例:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```


## 移除配方
|类型              |数据类型                                     |
|------------------|---------------------------------------------------|
|Output(输出）      |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)          |

### 例子
```JAVA
//例:
:mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```
