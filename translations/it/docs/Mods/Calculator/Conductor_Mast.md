# Conductor Mast

## Pacchetto
```zenscript
import mods.calculator.conductorMast;
```

## Metodi

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.
- **Int powercost** The cost of power per process.

## Additon
```zenscript
conductorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
```

## Rimozione
```zenscript
conductorMast.removeRecipe(IIngredient output);
```