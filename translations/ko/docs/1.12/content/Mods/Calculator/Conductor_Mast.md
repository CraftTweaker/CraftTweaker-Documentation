# Conductor Mast

## Package
```zenscript
import mods.calculator.conductorMast;
```

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
- **Int powercost** The cost of power per process.

## Additon
```zenscript
conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
```

## Removal
```zenscript
conductorMast.removeRecipe(IIngredient output);
```