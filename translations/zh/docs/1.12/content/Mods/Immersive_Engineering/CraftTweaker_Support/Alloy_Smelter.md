# Alloy Smelter
The Alloy Smelter package can be used to add/remove recipes to/from the Immersive Engineering Alloy Smelter.

## Calling The Package
You can call the AlloySmelter package using `mods.immersiveengineering.AlloySmelter`

## 添加配方

| Required | 类型   | 数据类型                                                    |
| -------- | ---- | ------------------------------------------------------- |
| Required | 输出   | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)           |
| Required | 输入1  | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | 输入2  | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) |
| Required | Time | 整型                                                      |


### 例子
```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```



## Remove Recipe

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |


### 例子
```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```
