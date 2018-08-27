# Electroplater
The Electroplater package can be used to add recipes to Factory Tech's Electroplater.

## Calling the Package
You can call the Chop Saw package using `mods.factorytech.Electroplater`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.Electroplater.addRecipe(IItemStack output, IIngredient input);
mods.factorytech.Electroplater.addRecipe(<minecraft:diamond>, <minecraft:quartz>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.Electroplater.removeRecipe(IItemstack output);
mods.factorytech.Electroplater.removeRecipe(<minecraft:gold_ingot> * 2);
```
