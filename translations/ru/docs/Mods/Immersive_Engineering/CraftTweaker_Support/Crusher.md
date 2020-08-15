# Дробитель

Пакет дробилки может быть использован для добавления/удаления рецептов из дешёвой машины.

## Вызов пакета

Вы можете вызвать пакет дробилки с помощью `mods.immersiveengineering.Crusher`.

## Добавить рецепт

| Требуется | Тип             | Тип данных                                          |
| --------- | --------------- | --------------------------------------------------- |
| Требуется | Вывод           | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Требуется | Input           | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Энергия         | int                                                 |
| Optional  | Вторичный вывод | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Optional  | Вторичный шанс  | double                                              |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energy, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher. ddRecipe(<minecraft:diamond>, <ore:logWood>2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
модов. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Удалить рецепт по выводу

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Удалить рецепт по вводу

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack);

mods.immersiveengineering.Crusher.removeRecipesInput(<minecraft:diamond>);
```