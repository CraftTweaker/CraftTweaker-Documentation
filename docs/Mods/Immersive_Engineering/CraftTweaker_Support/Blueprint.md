# 蓝图
蓝图相关包可以被用于为沉浸工程的蓝图添加或移除配方。

## PSA
[类型](/Mods/Immersive_Engineering/Variables/Categories.md)字符串比较特殊。
如果这个字符串的内容是一个不存在的类别，将会创建一个新的类别和一个蓝图。
也就是说你可以添加一个叫做“香蕉煎饼”的蓝图类型用于“烹饪配方”。
类别创建之后它会将余下的所有这个类别配方分类到这个类别。


## 导入相关包
使用`mods.immersiveengineering.Blueprint`以导入蓝图相关包。.

## 添加配方
|是否必要  |类型              |数据类型                                								|
|----------|----------------|-------------------------------------------------------------------------|
|必要      |Category（类别） |字符串[Category（类别）](/Mods/Immersive_Engineering/Variables/Categories.md)	|
|必要      |Output（输出）   |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)									|
|必要      |Inputs（输入）   |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)  						|


### 例子
```JAVA
//例:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[] inputs);

//使用现有的类别
mods.immersiveengineering.Blueprint.addRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//使用新的类别类别（会创建一个新的蓝图物品）
mods.immersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```


## 移除配方
|类型              |数据类型                                          |
|------------------|---------------------------------------------------|
|Output（输出）     |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)   |

### 例子:
```JAVA
//例:
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack output);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```
