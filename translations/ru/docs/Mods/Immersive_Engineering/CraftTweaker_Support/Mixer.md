# Микшер

Пакет Mixer может быть использован для добавления/удаления рецептов в Immersive Engineering Mixer.

## Вызов пакета

Вы можете вызвать пакет Mixer с помощью `mods.immersiveengineering.Mixer`.

## Добавить рецепт

| Требуется | Тип          | Тип данных                                                    |
| --------- | ------------ | ------------------------------------------------------------- |
| Требуется | Жидкий вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                  |
| Требуется | Fluid Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                  |
| Требуется | Item Inputs  | [Ингредиент](/Vanilla/Variable_Types/IIngredient/) как массив |
| Требуется | Энергия      | Целое                                                         |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack), ILiquidStack fluidInput, Igredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Удалить рецепт

| Тип   | Тип данных                                   |
| ----- | -------------------------------------------- |
| Вывод | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```