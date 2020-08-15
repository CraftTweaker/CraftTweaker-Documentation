# Металлургический сплав

Пакет Металлургического Завода можно использовать для добавления/удаления рецептов из Завода погружения Инжиниринговых Сплавов.

## Вызов пакета

Вы можете вызвать пакет AlloySmelter с помощью `mods.immersiveengineering.AlloySmelter`

## Добавить рецепт

| Требуется | Тип     | Тип данных                                          |
| --------- | ------- | --------------------------------------------------- |
| Требуется | Вывод   | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Требуется | Input 1 | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Input 2 | [Иингредиент](/Vanilla/Variable_Types/IIngredient/) |
| Требуется | Время   | Целое                                               |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Удалить рецепт

| Тип   | Тип данных                               |
| ----- | ---------------------------------------- |
| Вывод | [IItemstack](/Vanilla/Items/IItemStack/) |

### Пример

```zenscript
//Пример:
mods.immersiveengineering.AlloySmelter.removeRecipe(выход IItemstack);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```