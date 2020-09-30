# Atomic Calculator

## Package
```zenscript
import mods.calculator.atomic;
```

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-3]** The inputs.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Addition
```zenscript
atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);
```

## Removal
```zenscript
atomic.removeRecipe(IIngredient output);
```