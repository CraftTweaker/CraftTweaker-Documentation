# Atomic Calculator

## Пакет
```zenscript
import mods.calculator.atomic;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-3]** The inputs.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** The output.

## Сложение
```zenscript
atomic.addRecipe(IIngredient input1, IIngredient input2, IIngredient input3, IIngredient output);
```

## Удаление
```zenscript
atomic.removeRecipe(IIngredient output);
```