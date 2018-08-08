# Arc Furnace
The Arc Furnace package can be used to add/remove recipes to/from the Immersive Engineering Arc Furnace.

## Calling The Package
You can call the ArcFurnace package using `mods.immersiveengineering.ArcFurnace`.

## Add Recipe

|Required  |Type                 |Data Type                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|Required  |Output               |[IItemStack](/Vanilla/Items/IItemStack/) 													|
|Required  |Input                |[IIngredient](/Vanilla/Variable_Types/IIngredient/)      									|
|Required  |Slag                 |[IItemStack](/Vanilla/Items/IItemStack/)													|
|Required  |Time                 |Integer																					|
|Required  |Energy Per Tick      |Integer																					|
|Optional  |Additives            |[IIngredient](/Vanilla/Variable_Types/IIngredient/) Array[]								|
|Optional  |Special Recipe Type  |String [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/)  |


### Example
```JAVA
//Example:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additives, @Optional String specialRecipeType);

mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods.immersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack/)            |


### Example
```JAVA
//Example:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```