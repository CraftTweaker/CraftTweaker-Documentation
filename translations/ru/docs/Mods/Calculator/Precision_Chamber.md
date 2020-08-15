# Precision Chamber

## Пакет
```zenscript
import mods.calculator.precisionChamber;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## Сложение
```zenscript
precisionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## Удаление
```zenscript
precisionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```