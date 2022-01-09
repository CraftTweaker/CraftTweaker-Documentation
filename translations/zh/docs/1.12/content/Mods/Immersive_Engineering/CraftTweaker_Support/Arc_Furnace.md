# Arc Furnace
The Arc Furnace package can be used to add/remove recipes to/from the Immersive Engineering Arc Furnace.

## Calling The Package
You can call the ArcFurnace package using `mods.immersiveengineering.ArcFurnace`.

## 添加配方

| Required | 类型                  | 数据类型                                                                                   |
| -------- | ------------------- | -------------------------------------------------------------------------------------- |
| Required | 输出                  | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Required | 输入                  | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/)                                |
| Required | Slag                | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| Required | Time                | 整型                                                                                     |
| Required | Energy Per Tick     | 整型                                                                                     |
| 可选       | Additives           | [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array[]                            |
| 可选       | Special Recipe Type | String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |


### 例子
```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```



## Remove Recipe

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |


### 例子
```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```