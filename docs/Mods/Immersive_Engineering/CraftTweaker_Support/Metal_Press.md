# 金属冲压机
金属冲压机相关包可以被用于为沉浸工程的金属冲压机添加或移除配方。


## 导入相关包
使用`mods.immersiveengineering.MetalPress`以导入金属冲压机相关包。


## 添加配方

|是否必要   |类型              |数据类型                                            |
|----------|------------------|---------------------------------------------------|
|必要      |Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)   |
|必要      |Input（输入）      |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) |
|必要      |Mold（模具）       |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)   |
|必要      |Energy（能量）     |整数                                               |
|可选      |Input Size（输入物品数量）|整数                                         |

### 例子
```JAVA
//例:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```



## 移除配方

|类型              |数据类型                                            |
|------------------|---------------------------------------------------|
|Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)  |

### 例子
```JAVA
//例:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```



## 按模具移除配方

|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |

### 例子
```JAVA
//例:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```
