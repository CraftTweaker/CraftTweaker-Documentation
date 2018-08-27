# Compression Chamber
The Compression Chamber package can be used to add recipes to Factory Tech's Compression Chamber.

## Calling the Package
You can call the Compression Chamber package using `mods.factorytech.CompressionChamber`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Item Input        |[IIngredient](/Vanilla/Variable_Types/IIngredient) |
|Required  |Fluid Input       |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.CompressionChamber.addRecipe(IItemStack output, IIngredient itemIn, IIngredient fluidIn);
mods.factorytech.CompressionChamber.addRecipe(<minecraft:lava_bucket>, <minecraft:bucket>, <minecraft:lava> * 1000);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.CompressionChamber.removeRecipe(IItemstack output);
mods.factorytech.CompressionChamber.removeRecipe(<factorytech:tank:0>);
```
