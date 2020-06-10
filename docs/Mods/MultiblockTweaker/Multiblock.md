# Multiblock

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.Multiblock;
```
## Information
A representation of a custom GregTech Multiblock.

This is best used for easy access to the recipe map.

Use this to set any custom working functions.

 * **See also:**
   * Builder

     <p>
   * IUpdateFunction
   * IUpdateWorktableFunction
   * ISetupRecipeFunction
   * ICompleteRecipeFunction
   * IRecipePredicate

## ZenMethods

### Instance Methods
#### Multiblock#register()
-> Multiblock

Register this multiblock. Calling this more than once will error.

 * **Returns:** This multiblock, for convenience.

## ZenGetters/ZenSetters
| ZenGetter | ZenSetter | Type |
| --- | --- | --- |
| metaId |   | int |
| recipeMap |   | [RecipeMap](../GregTechCE/Machines.md) |
| update | update | [IUpdateFunction](Functions/IUpdateFunction.md) |
| updateWorktable | updateWorktable | [IUpdateWorktableFunction](Functions/IUpdateWorktableFunction.md) |
| setupRecipe | setupRecipe | [ISetupRecipeFunction](Functions/ISetupRecipeFunction.md) |
| completeRecipe | completeRecipe | [ICompleteRecipeFunction](Functions/ICompleteRecipeFunction.md) |
| recipePredicate | recipePredicate | [IRecipePredicate](Functions/IRecipePredicate.md) |
| loc |   | string |
| pattern |   | [IBlockPattern](Interfaces/IBlockPattern.md) |
| texture |   | [ICubeRenderer](Interfaces/ICubeRenderer.md) |
