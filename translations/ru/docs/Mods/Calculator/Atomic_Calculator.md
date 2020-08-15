# Атомный калькулятор

## Пакет
```zenscript
импорт mods.calculator.atomic;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input[1-3]** Входы.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** Выход.

## Сложение
```zenscript
atomic.addRecipe(IIngredient input1, Ingredient input2, Ingredient input3, IIngredient output);
```

## Удаление
```zenscript
atomic.removeRecipe(IIngredient output);
```