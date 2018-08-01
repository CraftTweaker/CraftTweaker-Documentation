# Coke Oven

## Calling The Package
You can call the CokeOven package using `mods.immersiveengineering.CokeOven`.

## Add Recipe
|Required  |Type    	|Data Type                                			 |
|----------|------------|----------------------------------------------------|
|Required  |Output  	|[IItemstack](/Vanilla/Items/IItemStack/)  			 |
|Required  |Fuel Output |Integer  											 |
|Required  |Input    	|[IIngredient](/Vanilla/Variable_Types/IIngredient/)  |
|Required  |Time    	|Integer  			 							 	 |

### Example
```JAVA
//Example:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```


## Remove Recipe
|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Output            |[IItemstack](/Vanilla/Items/IItemStack/)            |

### Example:
```JAVA
//Example:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```