# Algorithm Separator

## Пакет
```zenscript
import mods.calculator.algorithmSeparator;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## Сложение
```zenscript
algorithmSeparator.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## Удаление
```zenscript
algorithmSeparator.removeRecipe(IIngredient output1, IIngredient output2);
```