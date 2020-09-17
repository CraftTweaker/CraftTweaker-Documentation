# Чертеж

Пакет создания чертежей может быть использован для добавления/удаления рецептов из создания чертежей погружения.

## PSA

[Категория](/Mods/Immersive_Engineering/Variables/Categories/) Строка достаточно особенна. Для любой строки, в которой уже нет установленной категории, создается новая категория и, таким образом, новый чертеж. Это означает, что можно добавить категорию чертежей под названием "Банановые бликаты", которая предусматривает "Пищевые рецепты". После первой найденной записи он создаст все дополнительные рецепты для этой категории строки в созданной категории.

## Вызов пакета

Вы можете вызвать пакет чертежей с помощью `mods.immersiveengineering.Blueprint`.

## Добавить рецепт

| Требуется | Тип       | Тип данных                                                            |
| --------- | --------- | --------------------------------------------------------------------- |
| Требуется | Категория | Строка [категории](/Mods/Immersive_Engineering/Variables/Categories/) |
| Требуется | Вывод     | [IItemstack](/Vanilla/Items/IItemStack/)                              |
| Требуется | Inputs    | [Иингредиент](/Vanilla/Variable_Types/IIngredient/)                   |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack, IIngredient[] inputs);

//Использование существующей категории
mods.immersiveengineering.Blueprint. ddRecipe("компоненты", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Использование новой категории строки (Это генерирует новый чертеж)
модов. mmersiveengineering.Blueprint.addRecipe("Банановые блики", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример:

```zenscript
//Пример:
mods.immersiveengineering.Blueprint.removeRecipe(выход IItemStack);
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>);
```