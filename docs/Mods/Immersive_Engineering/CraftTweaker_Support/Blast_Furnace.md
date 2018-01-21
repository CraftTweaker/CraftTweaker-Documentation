# Arc Furnace
The Blast Furnace package can be used to add/remove recipes to/from the Immersive Engineering Blast Furnace.
The Blast Furnace package can also be used to add/remove fuels to/from the Immersive Engineering Blast Furnace.


## Calling The Package
You can call the BlastFurnace package using `mods.immersiveengineering.BlastFurnace`.


## Add Recipe:
|Required  |Type    |Data Type                                			 |
|----------|--------|----------------------------------------------------|
|Required  |Output  |[IItemstack](/Vanilla/Items/IItemStack)  			 |
|Required  |Input   |[IIngredient](/Vanilla/Variable_Types/IIngredient)  |
|Required  |Time    |Integer  											 |
|Optional  |Slag    |[IItemstack](/Vanilla/Items/IItemStack)  			 |


### Example
```JAVA
//Example:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Remove Recipe
|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack)            |

### Example:
```JAVA
//Example:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```



## Add Fuel
|Required  |Type    |Data Type                                			|
|----------|--------|---------------------------------------------------|
|Required  |Input   |[IIngredient](/Vanilla/Variable_Types/IIngredient) |
|Required  |Time    |Integer  											|

### Example
```JAVA
//Example:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```


## Remove Fuel
|Required  |Type    |Data Type                                			 |
|----------|--------|----------------------------------------------------|
|Required  |Output  |[IItemstack](/Vanilla/Items/IItemStack)  			 |

### Example
```JAVA
//Example:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```