# 粉碎机
粉碎机相关包可以被用于为沉浸工程的添加添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.Crusher`以导入粉碎机相关包。

## 添加配方

|是否必要   |类型                  |数据类型                                           										|
|----------|----------------------|-----------------------------------------------------------------------------------------|
|必要      |Output（输出）               |[IItemStack（物品堆）](/Vanilla/Items/IItemStack) 													|
|必要      |Input（输入）                |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)      									|
|必要      |Energy（能量）               |整数																					|
|可选      |Secondary Output（副产物）   |[IItemStack（物品堆）](/Vanilla/Items/IItemStack)													|
|可选      |Secondary Chance（副产物概率）|双精度型																					|

### 例子
```JAVA
//例:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```



## Remove Recipe by Output

|类型               |数据类型                                          |
|------------------|---------------------------------------------------|
|Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |

### 例子
```JAVA
//例:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Remove Recipe By Input

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Input             |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example
```JAVA
//Example:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForInput(<minecraft:diamond>);
```
