# IRecipeLogic

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.recipe.IRecipeLogic;
```
## Information
Used to perform the recipe logic.

## ZenMethods

### Instance Methods
#### IRecipeLogic#isActive()
-> boolean

#### IRecipeLogic#setAllowOverclocking(boolean)
-> void

#### IRecipeLogic#isAllowOverclocking()
-> boolean

#### IRecipeLogic#isHasNotEnoughEnergy()
-> boolean

#### IRecipeLogic#getEnergyStored()
-> long

#### IRecipeLogic#getEnergyCapacity()
-> long

#### IRecipeLogic#drawEnergy(int)
-> boolean

#### IRecipeLogic#update()
-> void

#### IRecipeLogic#trySearchNewRecipe()
-> void

#### IRecipeLogic#forceRecipeRecheck()
-> void

#### IRecipeLogic#getMaxVoltage()
-> long

## ZenGetters/ZenSetters
| ZenGetter | ZenSetter | Type |
| --- | --- | --- |
| previousRecipe |   | [IRecipe](/IRecipe.md) |
| metaTileEntity |   | [IMetaTileEntity](/IMetaTileEntity.md) |
| workingEnabled | workingEnabled | boolean |
| recipeProgress | recipeProgress | int |
| maxProgress | maxProgress | int |
| inputInventory |   | [IItemHandlerModifiable](/IItemHandlerModifiable.md) |
| outputInventory |   | [IItemHandlerModifiable](/IItemHandlerModifiable.md) |
| inputTank |   | [IMultipleTankHandler](/IMultipleTankHandler.md) |
| outputTank |   | [IMultipleTankHandler](/IMultipleTankHandler.md) |
