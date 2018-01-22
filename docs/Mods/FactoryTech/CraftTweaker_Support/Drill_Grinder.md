# Drill Grinder
The Drill Grinder package can be used to add recipes to Factory Tech's Chop Saw.

## Calling the Package
You can call the Drill Grinder package using `mods.factorytech.ChopSaw`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.DrillGrinder.addRecipe(IItemStack output, IIngredient input;
mods.factorytech.DrillGrinder.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.DrillGrinder.removeRecipe(IItemstack output);
mods.factorytech.DrillGrinder.removeRecipe(<minecraft:sand:0>);
```
