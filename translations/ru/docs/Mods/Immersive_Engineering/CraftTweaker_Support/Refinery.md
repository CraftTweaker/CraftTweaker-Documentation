# Очистка

Пакет Refinery может быть использован для добавления/удаления рецептов в Immersive Engineering Refinery.

## Вызов пакета

Вы можете вызвать пакет Refinery с помощью `mods.immersiveengineering.Refinery`.

## Добавить рецепт

| Требуется | Тип     | Тип данных                                   |
| --------- | ------- | -------------------------------------------- |
| Требуется | Вывод   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Требуется | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Требуется | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Требуется | Энергия | Целое                                        |

### Пример

```zenscript
//Пример
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Удалить рецепт

| Тип   | Тип данных                                   |
| ----- | -------------------------------------------- |
| Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
//Пример
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```