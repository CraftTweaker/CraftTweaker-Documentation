# 合金窑
合金窑相关包可以被用于为沉浸工程的合金窑添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.AlloySmelter`以导入合金窑相关包。

## 添加配方

|是否必要   |类型              |数据类型                                            |
|----------|------------------|---------------------------------------------------|
|必要       |Output（输出）   |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)            |
|必要       |Input 1 （输入1）|[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) |
|必要       |Input 2 （输入2）|[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) |
|必要       |Time （时间）    |整数                                            |


### 例子
```JAVA
//例:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```



## 移除配方

|类型         |数据类型                                         |
|-------------|------------------------------------------------|
|Output（输出）|[IItemstack（物品堆）](/Vanilla/Items/IItemStack)|


### 例子
```JAVA
//例:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```
