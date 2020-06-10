# IRecipePredicate

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.recipe.functions.IRecipePredicate;
```
## Information
Called before a recipe is chosen. Used for additional logic such as blast furnace temperature.

## ZenMethods

### Instance Methods
#### IRecipePredicate#test(IMetaTileEntity, IRecipe, boolean)
-> boolean

Implement this with a function.

 * **Parameters:**
   * `controller` — The controller this is being called from.
   * `recipe` — The recipe to check.
   * `consumeIfSuccess` — Whether the ingredients are to be consumed.
 * **Returns:** Whether the recipe is valid and should be gone through with.
