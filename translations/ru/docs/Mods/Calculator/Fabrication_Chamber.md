# Чамбер
## Не полностью упрощено, только принимает один вход.

## Package
```zenscript
import mods.calculator.fabricationChamber;
```

## Методы
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output** Выходы.


## Сложение
```zenscript
fabricationChamber.addRecipe(IIngredient input, Ingredient output);
```

## Удаление
```zenscript
fabricationChamber.removeRecipe(IIngredient input);
```