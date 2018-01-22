# Metal Cutter
The Metal Cutter package can be used to add recipes to Factory Tech's Metal Cutter.

## Calling the Package
You can call the Metal Cutter package using `mods.factorytech.MetalCutter`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.ChopSaw.addRecipe(IItemStack output, IIngredient input);
mods.factorytech.ChopSaw.addRecipe(<minecraft:iron_bars> * 3, <minecraft:iron_ingot>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.ChopSaw.removeRecipe(IItemstack output);
mods.factorytech.ChopSaw.removeRecipe(<factorytech:machinepart:3>);
```
