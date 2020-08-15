# Бутылочная машина

## Вызов пакета

Вы можете вызвать пакет BottlingMachine с помощью `mods.immersiveengineering.BottlingMachine`.

## Добавить рецепт

| Требуется | Тип      | Тип данных                                          |
| --------- | -------- | --------------------------------------------------- |
| Требуется | Вывод    | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Требуется | Input    | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Жидкость | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.BottlingMachine.removeRecipe(выход IItemStack);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```