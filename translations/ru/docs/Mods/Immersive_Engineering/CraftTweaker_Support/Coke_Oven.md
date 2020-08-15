# Коксовая печь

## Вызов пакета

Вы можете вызвать пакет CokeOven с помощью `mods.immersiveengineering.CokeOven`.

## Добавить рецепт

| Требуется | Тип                        | Тип данных                                          |
| --------- | -------------------------- | --------------------------------------------------- |
| Требуется | Вывод                      | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Требуется | Производительность топлива | Целое                                               |
| Требуется | Input                      | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Время                      | Целое                                               |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример:

```zenscript
//Пример:
mods.immersiveengineering.CokeOven.removeRecipe(выход IItemStack);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```