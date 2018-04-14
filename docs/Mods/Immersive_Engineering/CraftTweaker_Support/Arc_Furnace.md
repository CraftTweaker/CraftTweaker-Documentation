# 电弧炉
电弧炉相关包可以被用于为沉浸工程的电弧炉添加或移除配方。

## 导入相关包
使用`mods.immersiveengineering.ArcFurnace`以导入电弧炉相关包。

## 添加配方

|是否必要 |类型                             |数据类型                                        										|
|--------|---------------------------------|------------------------------------------------------------------------------------------|
|必要    |Output（输出）                    |[IItemStack（物品堆）](/Vanilla/Items/IItemStack) 													|
|必要    |Input（输入）                     |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient)      									|
|必要    |Slag（副产物）                    |[IItemStack（物品堆）](/Vanilla/Items/IItemStack)													|
|必要    |Time（时间）                      |整数																					|
|必要    |Energy Per Tick（每刻消耗的能量）  |整数																					|
|可选    |Additives（添加物）               |[IIngredient（材料）](/Vanilla/Variable_Types/IIngredient) 数组[]								|
|可选    |Special Recipe Type（特殊合成种类）|字符串[specialRecipeTypes（特殊合成类型）](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes.md)  |


### 例子
```JAVA
//例:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```



## 移除配方

|类型              |Data Type                                          |
|------------------|---------------------------------------------------|
|输出              |[IItemstack（物品堆）](/Vanilla/Items/IItemStack)   |


### 例子
```JAVA
//例:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```
