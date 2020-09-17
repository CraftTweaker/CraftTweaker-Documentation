# Менеджер BlastFurnace



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.BlastFurnaceManager
```

## Реализованные интерфейсы
BlastFurnaceManager реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Методы
### Добавить рецепт

Добавляет рецепт на основе заданных параметров.

```zenscript
blastFurnace.addRecipe(имя в виде строки, вывести как crafttweaker.api.item.IItemStack, вводить как crafttweaker.api.item.IIngredient, xp как плавающий, время приготовления int);
blastFurnace.addRecipe("вал2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Параметр        | Тип                                                                 | Описание                                    |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------- |
| name            | String                                                              | Название нового рецепта                     |
| вывод           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Вывод рецепта IItemStack                    |
| input           | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Вход Igredient в рецепт                     |
| xp              | float                                                               | сколько xp получает игрок                   |
| время кулинарии | int                                                                 | сколько времени требуется для приготовления |


### удалить рецепт

Удаляет рецепт на основе его вывода и ввода.

```zenscript
blastFurnace.removeRecipe(выход как crafttweaker.api.item.IItemStack, ввод как crafttweaker.api.item.IIngredient);
blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Параметр | Тип                                                                 | Описание                         |
| -------- | ------------------------------------------------------------------- | -------------------------------- |
| вывод    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Выход из рецепта IItemStack.     |
| input    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ингредиент рецепта для удаления. |



