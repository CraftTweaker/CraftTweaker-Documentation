# Ферментер

Пакет Ферментера может быть использован для добавления/удаления рецептов в Императорский Инжиниринг Ферментера.

## Вызов пакета

Вы можете вызвать пакет Ферментер, используя `mods.immersiveengineering.Fermenter`.

## Добавить рецепт

| Требуется | Тип      | Тип данных                                          |
| --------- | -------- | --------------------------------------------------- |
| Требуется | Вывод    | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Требуется | Жидкость | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Требуется | Input    | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Энергия  | Целое                                               |

### Пример

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Удалить Рецепт жидкости

| Тип   | Тип данных                                   |
| ----- | -------------------------------------------- |
| Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Удалить рецепт предмета

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(выход IItemstack);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Удалить по вводу

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```