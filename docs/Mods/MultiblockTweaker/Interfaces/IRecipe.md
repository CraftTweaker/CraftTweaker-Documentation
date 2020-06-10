# IRecipe

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.recipe.IRecipe;
```
## Information
A constructed GregTech recipe, with details about inputs, outputs, or custom properties.

## ZenMethods

### Instance Methods
#### IRecipe#matches(boolean, IItemStack[], ILiquidStack[])
-> boolean

Check whether the recipe matches the given ingredients.

 * **Parameters:**
   * `consumeIfSuccessful` — Whether to consume the ingredients on success.
   * `inputs` — The item inputs.
   * `fluidInputs` — The fluid inputs.
 * **Returns:** Whether the recipe matches.

#### IRecipe#getInputs()
-> IIngredient[]

 * **Returns:** The defined input ingredients.

#### IRecipe#getOutputs()
-> IItemStack[]

 * **Returns:** The defined output items.

#### IRecipe#getChancedOutputs()
-> ChancedEntry[]

 * **Returns:** The defined chanced output items.

#### IRecipe#getAllItemOutputs(int)
-> IItemStack[]

Get all the outputs of a recipe, limited to `maxOutputSlots`, including all chanced outputs possible.

 * **Parameters:** `maxOutputSlots` — The max outputs.
 * **Returns:** All the item outputs of the recipe.

#### IRecipe#getFluidInputs()
-> ILiquidStack[]

 * **Returns:** The defined input fluids.

#### IRecipe#hasInputFluid(ILiquidStack)
-> boolean

 * **Returns:** Whether the given fluid is an ingredient.

#### IRecipe#getFluidOutputs()
-> ILiquidStack[]

 * **Returns:** The defined output fluids.

#### IRecipe#getDuration()
-> int

 * **Returns:** The duration of the recipe.

#### IRecipe#getEUt()
-> int

 * **Returns:** The EU/t cost of the recipe. Negative if the recipe generates energy.

#### IRecipe#isHidden()
-> boolean

 * **Returns:** Whether the recipe is a hidden one.

#### IRecipe#getPropertyKeys()
-> string[]

 * **Returns:** Get all the defined properties.

#### IRecipe#getBooleanProperty(string)
-> boolean

 * **Returns:** Get the boolean property referenced by the given key.

#### IRecipe#getIntegerProperty(string)
-> int

 * **Returns:** Get the integer property referenced by the given key.

#### IRecipe#getProperty(string)
-> string

 * **Returns:** Get the string property referenced by the given key.
