# MechanicalSqueezer

This package allows you to modify recipes for the Mechanical Squeezer.  


## Importing the package
If you want to import this package, here you go:
```
import mods.integrateddynamics.MechanicalSqueezer;
```


## Adding Recipes

```
//MechanicalSqueezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);



//addRecipe(IItemStack inputStack, 
//  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid, @Optional(10) int duration);
//TODO
```


## Removing Recipes

```
//MechanicalSqueezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
//TODO

//MechanicalSqueezer.removeRecipe(IItemStack inputStack,
//  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid, @Optional(10) int duration);
//TODO



//MechanicalSqueezer.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//MechanicalSqueezer.removeRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);
//TODO
```