# Grindstone
The Grindstone package can be used to add recipes to Factory Tech's Grindstone.

## Calling the Package
You can call the Grindstone package using `mods.factorytech.Grindstone`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.Grindstone.addRecipe(IItemStack output, IIngredient input);
mods.factorytech.Grindstone.addRecipe(<minecraft:iron_sword>, <minecraft:iron_ingot>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.Grindstone.removeRecipe(IItemstack output);
mods.factorytech.Grindstone.removeRecipe(<factorytech:machinepart:0>);
```
