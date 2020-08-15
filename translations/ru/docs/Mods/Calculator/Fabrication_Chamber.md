# Fabrication Chamber
## Not fully implimented, only takes one input.

## Package
```zenscript
import mods.calculator.fabricationChamber;
```

## Методы
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The outputs.


## Сложение
```zenscript
fabricationChamber.addRecipe(IIngredient input, IIngredient output);
```

## Удаление
```zenscript
fabricationChamber.removeRecipe(IIngredient input);
```