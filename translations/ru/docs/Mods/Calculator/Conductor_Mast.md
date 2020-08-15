# Мать проводника

## Пакет
```zenscript
import mods.calculator.conductorMast;
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** Выход.
- **Int powercost** Стоимость энергии за процесс.

## Добавить
```zenscript
conductorMast.addRecipe(IIngredient input, Ingredient powercost, IIngredient output);
```

## Удаление
```zenscript
conductorMast.removeRecipe(IIngredient output);
```