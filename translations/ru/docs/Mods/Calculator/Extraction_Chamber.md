# Патронник извлечения

## Пакет
```zenscript
import mods.calculator.extractionChamber;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** Выходы.

## Сложение
```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## Удаление
```zenscript
extractionChamber.removeRecipe(IIngredient output IIngredient output);
```