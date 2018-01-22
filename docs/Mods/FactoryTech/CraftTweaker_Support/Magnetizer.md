# Magnetizer
The Magnetizer package can be used to add recipes to Factory Tech's Magnetizer.

## Calling the Package
You can call the Magnetizer package using `mods.factorytech.Magnetizer`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.Magnetizer.addRecipe(IItemStack output, IIngredient input);
mods.factorytech.Magnetizer.addRecipe(<minecraft:iron_block>, <minecraft:stone>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.ChopSaw.removeRecipe(IItemstack output);
mods.factorytech.ChopSaw.removeRecipe(<factorytech:machinepart:27>);
```
