# Electric Furnace
The Electric Furnace package can be used to add recipes to Factory Tech's Electric Furnace that cannot be smelted in a regular furnace.

## Calling the Package
You can call the Electric Furnace package using `mods.factorytech.ElectricFurnace`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Output            |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Input             |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.ElectricFurnace.addRecipe(IItemStack output, IIngredient input);
mods.factorytech.ElectricFurnace.addRecipe(<minecraft:dirt>, <minecraft:cobblestone>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.ElectricFurnace.removeRecipe(IItemstack output);
mods.factorytech.ElectricFurnace.removeRecipe(<factorytech:machinepart:19>);
```
