# Centrifuge
The Centrifuge package can be used to add recipes to Factory Tech's Centrifuge.

## Calling the Package
You can call the Centrifuge package using `mods.factorytech.Centrifuge`

## Add Recipe

|Required  |Type              |Data Type                                          |
|----------|------------------|---------------------------------------------------|
|Required  |Input             |[IItemstack](/Vanilla/Items/IItemStack)            |
|Required  |Output 1          |[IIngredient](/Vanilla/Variable_Types/IIngredient) |
|Optional  |Output 2          |[IIngredient](/Vanilla/Variable_Types/IIngredient) |
|Optional  |Output 3          |[IIngredient](/Vanilla/Variable_Types/IIngredient) |


### Example
```JAVA
//Example:
mods.factorytech.Centrifuge.addRecipe(IItemStack input, IIngredient output1, @Optional IIngredient output2, @Optional IIngredient output3);
mods.factorytech.Centrifuge.addRecipe(<minecraft:dirt>, <minecraft:seeds>, <minecraft:melon_seeds>, <minecraft:pumpkin_seeds>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output 1          |[IItemstack](/Vanilla/Items/IItemStack)            |
|(Output 2)        |[IItemstack](/Vanilla/Items/IItemStack)            |
|(Output 3)        |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.Centrifuge.removeRecipe(IItemstack... output);
mods.factorytech.Centrifuge.removeRecipe(<minecraft:flint> * 2, <minecraft:iron_nugget> * 2, <factorytech:ore_dust:5> * 2);
```
