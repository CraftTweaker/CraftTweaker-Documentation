# Chop Saw
The Chop Saw package can be used to add recipes to Factory Tech's Chop Saw.

## Calling the Package
You can call the Chop Saw package using `mods.factorytech.ChopSaw`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.ChopSaw.addRecipe(IItemStack output, IIngredient input);
mods.factorytech.ChopSaw.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.ChopSaw.removeRecipe(IItemstack output);
mods.factorytech.ChopSaw.removeRecipe(<minecraft:planks:0>);
```
