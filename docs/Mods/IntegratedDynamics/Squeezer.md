# Squeezer

This package allows you to modify recipes for the Squeezer.  


## Importing the package
If you want to import this package, here you go:
```
import mods.integrateddynamics.Squeezer;
```


## Adding Recipes

```
//Squeezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100);



//Squeezer.addRecipe(IItemStack inputStack, 
//  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);


Squeezer.addRecipe(<minecraft:pumpkin>, 
	<minecraft:pumpkin_seeds>, 0.2,
	<minecraft:iron_nugget>, 0.01,
	<minecraft:cactus>, 0.5,
	<liquid:water> * 100);
```


## Removing Recipes

```
//Squeezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//Squeezer.removeRecipe(IItemStack inputStack,
//  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);

Squeezer.removeRecipe(<minecraft:pumpkin>, 
	<minecraft:pumpkin_seeds>, 0.2,
	<minecraft:iron_nugget>, 0.01,
	<minecraft:cactus>, 0.5,
	<liquid:water> * 100);



//Squeezer.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

//Squeezer.removeRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);

Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
	<minecraft:iron_nugget>, 0.01,
	<minecraft:cactus>, 0.5,
	<liquid:water> * 100);
```