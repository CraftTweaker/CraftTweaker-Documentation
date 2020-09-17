# Обработка патрона

## Пакет
```zenscript
импорт mods.calculator.processingChamber;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** Выход.

## Сложение
```zenscript
processingChamber.addRecipe(IIngredient input, IIngredient output);
```

## Удаление
```zenscript
processingChamber.removeRecipe(IIngredient output);
```
