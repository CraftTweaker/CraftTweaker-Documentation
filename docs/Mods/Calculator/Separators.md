# Calculator Machines

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## Stone Separator

```zenscript
mods.calculator.stoneSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
mods.calculator.stoneSeparator.removeRecipe(IIngredient output, IIngredient output2);
```
or 
```zenscript
import mods.calculator.stoneSeparator;

stoneSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
stoneSeparator.removeRecipe(IIngredient output, IIngredient output2);
```

## Algorithm Separator

```zenscript
mods.calculator.algorithmSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
mods.calculator.algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```
or
```zenscript
import mods.calculator.algorithmSeparator;

algorithmSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```