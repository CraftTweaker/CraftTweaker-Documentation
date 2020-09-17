# Металлический Пресс

Металлический пресс-пакет может быть использован для добавления/удаления рецептов из печатных изданий «Металлический материал».

## Вызов пакета

Вы можете вызвать пакет MetalPress с помощью `mods.immersiveengineering.MetalPress`.

## Добавить рецепт

| Требуется | Тип        | Тип данных                                          |
| --------- | ---------- | --------------------------------------------------- |
| Требуется | Вывод      | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Требуется | Input      | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Жирный     | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Требуется | Энергия    | Целое                                               |
| Требуется | Input Size | Целое                                               |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods. mmersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Удалить от Mold

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.MetalPress.removeRecipeByMold(выход IItemstack);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```