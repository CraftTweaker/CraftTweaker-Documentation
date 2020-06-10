# FactoryRecipeMap

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.recipe.FactoryRecipeMap;
```
## Information
Used for [`RecipeMap`](../../GregTechCE/Machines.md) creation.

Used for [`Builder#withRecipeMap(RecipeMap)`](Builder.md#builderwithrecipemaprecipemap).

## ZenMethods

### Static Methods
#### FactoryRecipeMap#startBuilder()
-> RecipeBuilder

Create a new, blank [`RecipeBuilder`](../../GregTechCE/Machines.md) that will be the base recipe for any new ones.

 * **Returns:** A blank [`RecipeBuilder`](../../GregTechCE/Machines.md).

#### FactoryRecipeMap#start(string)
-> FactoryRecipeMap

Start construction, with the given name. This will be used for localisation and later referencing.

Equivalent to `start(name, 0, 0, 0, 0, 0, 0, 0, 0)`.

 * **Parameters:** `name` — The unlocalized name for the recipe map.
 * **Returns:** The initialized builder.

#### FactoryRecipeMap#start(string, int, int, int, int, int, int, int, int)
-> FactoryRecipeMap

Start construction, setting all of the constructor values at the start.

 * **Parameters:**
   * `name` — The unlocalized name for the recipe map.
   * `minInputs` — The minimum item inputs a recipe can have.
   * `maxInputs` — The maximum item inputs a recipe can have.
   * `minOutputs` — The minimum item outputs a recipe can have.
   * `maxOutputs` — The maximum item outputs a recipe can have.
   * `minFluidInputs` — The minimum fluid inputs a recipe can have.
   * `maxFluidInputs` — The maximum fluid inputs a recipe can have.
   * `minFluidOutputs` — The minimum fluid outputs a recipe can have.
   * `maxFluidOutputs` — The maximum fluid outputs a recipe can have.
 * **Returns:** The initialized builder.

### Instance Methods
#### FactoryRecipeMap#minInputs(int)
-> FactoryRecipeMap

Set the minimum item inputs a recipe can have.

 * **Parameters:** `val` — The minimum item inputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#maxInputs(int)
-> FactoryRecipeMap

Set the maximum item inputs a recipe can have.

 * **Parameters:** `val` — The maximum item inputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#minFluidInputs(int)
-> FactoryRecipeMap

Set the minimum fluid inputs a recipe can have.

 * **Parameters:** `val` — The minimum fluid inputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#maxFluidInputs(int)
-> FactoryRecipeMap

Set the maximum fluid inputs a recipe can have.

 * **Parameters:** `val` — The maximum fluid inputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#minOutputs(int)
-> FactoryRecipeMap

Set the minimum item outputs a recipe can have.

 * **Parameters:** `val` — The minimum item outputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#maxOutputs(int)
-> FactoryRecipeMap

Set the maximum item outputs a recipe can have.

 * **Parameters:** `val` — The maximum item outputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#minFluidOutputs(int)
-> FactoryRecipeMap

Set the minimum fluid outputs a recipe can have.

 * **Parameters:** `val` — The minimum fluid outputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#maxFluidOutputs(int)
-> FactoryRecipeMap

Set the maximum fluid outputs a recipe can have.

 * **Parameters:** `val` — The maximum fluid outputs a recipe can have.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#setDefaultRecipe(RecipeBuilder)
-> FactoryRecipeMap

Set the default recipe builder, that will be copied in order to add new recipes.

 * **Parameters:** `builder` — The [`RecipeBuilder`](../../GregTechCE/Machines.md) that holds the starting state for any new recipes.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#setProgressBar(ITextureArea, MoveType)
-> FactoryRecipeMap

Set a custom progress bar and its movement direction.

 * **Parameters:**
   * `progressBar` — The progress bar texture.
   * `moveType` — The progress bar's movement direction.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#setSlotOverlay(boolean, boolean, ITextureArea)
-> FactoryRecipeMap

Set a custom overlay for all slots of this kind.

 * **Parameters:**
   * `isOutput` — Whether this should apply to output slots, instead of input slots.
   * `isFluid` — Whether this should apply to fluid slots, instead of item slots.
   * `slotOverlay` — The overlay texture.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#setSlotOverlay(boolean, boolean, boolean, ITextureArea)
-> FactoryRecipeMap

Set a custom overlay for all slots of this kind.

 * **Parameters:**
   * `isOutput` — Whether this should apply to output slots, instead of input slots.
   * `isFluid` — Whether this should apply to fluid slots, instead of item slots.
   * `isLast` — Whether this should apply only to the last slot of this kind.
   * `slotOverlay` — The overlay texture.
 * **Returns:** This builder, for convenience.

#### FactoryRecipeMap#build()
-> RecipeMap

Construct the [`RecipeMap`](../../GregTechCE/Machines.md).

 * **Returns:** The built recipe map.
