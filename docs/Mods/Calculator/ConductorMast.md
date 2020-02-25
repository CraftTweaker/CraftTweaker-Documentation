# Conductor Mast

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
- **Int power cost** The cost of power per process.

## Conductor Mast

```zenscript
mods.calculator.conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
mods.calculator.conductorMast.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.conductorMast;

conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
conductorMast.removeRecipe(IIngredient output);
```
