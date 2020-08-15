# Сжатие

Пакет Squeezer может быть использован для добавления/удаления рецептов в Immersive Engineering Squeezer.

## Вызов пакета

Вы можете вызвать пакет Squeezer, используя `mods.immersiveengineering.Squeezer`.

## Добавить рецепт

| Требуется | Тип      | Тип данных                                          |
| --------- | -------- | --------------------------------------------------- |
| Требуется | Вывод    | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Требуется | Жидкость | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Требуется | Input    | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Энергия  | Целое                                               |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Удалить Рецепт жидкости

| Тип   | Тип данных                                   |
| ----- | -------------------------------------------- |
| Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Удалить рецепт предмета

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Удалить по вводу

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```