# Arc Furnace

The Arc Furnace package can be used to add/remove recipes to/from the Immersive Engineering Arc Furnace.

## Calling The Package

You can call the ArcFurnace package using `mods.immersiveengineering.ArcFurnace`.

## 添加配方

| Required | 类型                  | Data Type                                                                              |
| -------- | ------------------- | -------------------------------------------------------------------------------------- |
| 必要       | Output              | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| 必要       | Input               | [IIngredient](/Vanilla/Variable_Types/IIngredient/)                                    |
| Required | Slag                | [IItemStack](/Vanilla/Items/IItemStack/)                                               |
| 必要       | Time                | Integer                                                                                |
| 必要       | Energy Per Tick     | Integer                                                                                |
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

| Type   | Data Type                                |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Example

```zenscript
//Example:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```