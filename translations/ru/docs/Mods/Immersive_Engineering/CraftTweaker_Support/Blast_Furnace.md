# Доменная печь

Доменная печь может быть использована для добавления/удаления рецептов/топлива в доменную печку.

## Вызов пакета

Вы можете вызвать пакет BlastFurnace с помощью `mods.immersiveengineering.BlastFurnace`.

## Добавить Рецепт:

| Требуется | Тип   | Тип данных                                          |
| --------- | ----- | --------------------------------------------------- |
| Требуется | Вывод | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Требуется | Input | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Время | Целое                                               |
| Optional  | Slag  | [IItemstack](/Vanilla/Items/IItemStack/)            |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример:

```zenscript
//Пример:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## Добавить топливо

| Требуется | Тип   | Тип данных                                          |
| --------- | ----- | --------------------------------------------------- |
| Требуется | Input | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Время | Целое                                               |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## Снимите топливо

| Требуется | Тип   | Тип данных                               |
| --------- | ----- | ---------------------------------------- |
| Требуется | Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```