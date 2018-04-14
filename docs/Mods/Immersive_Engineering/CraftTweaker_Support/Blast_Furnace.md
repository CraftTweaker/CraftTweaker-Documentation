# 高炉
高炉相关包可以被用于为沉浸工程的高炉添加或移除配方。


## 导入相关包
使用`mods.immersiveengineering.BlastFurnace`以导入高炉相关包。


## 添加配方:
|是否必要   |类型           |数据类型                                			 |
|----------|---------------|----------------------------------------------------|
|必要      |Output（输出）  |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)  			 |
|必要      |Input（输入）   |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)  |
|必要      |Time（时间）    |整数 											 |
|可选      |Slag（副产物）   |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)  			 |


### 例子
```JAVA
//例:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## 移除配方
|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|输出              |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |

### 例子:
```JAVA
//例:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```



## 添加燃料
|是否必要   |类型         |数据类型                                			|
|----------|------------|---------------------------------------------------|
|必要      |Input（输入）|[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) |
|必要      |Time （时间）|整数 											|

### 例子
```JAVA
//例:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```


## 移除燃料
|是否必要   |类型           |数据类型                                			 |
|----------|---------------|------------------------------------------------|
|必要      |Output（输出）  |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)|

### 例子
```JAVA
//例:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```
