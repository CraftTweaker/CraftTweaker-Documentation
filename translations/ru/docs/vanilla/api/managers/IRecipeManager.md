# IRecipeManager

Интерфейс по умолчанию для обработчиков реестра, так как он может удалять рецепты с помощью Расположение Ресурсов.

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## Реализованные интерфейсы
IRecipeManager реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### addJSONRecipe

Добавляет рецепт на основе предоставленной IData. Предоставленная IData должна представлять JSON DataPack DataPack это позволяет эффективно регистрировать рецепты для любого набора данных, поддерживающего системы IRecipeType.

```zenscript
craftingTable.addJSONRecipe(название строки, данные как crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},результат:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 как float, cookingtime:100});
```

| Параметр | Тип                                                    | Описание                         |
| -------- | ------------------------------------------------------ | -------------------------------- |
| name     | String                                                 | название рецепта                 |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | данные, представляющие файл json |


### удалить все

Удалить все рецепты в реестре

```zenscript
craftingTable.removeAll();
```

### удалил Modid

Удалить рецепт на основе модификации имени реестра

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Параметр | Тип    | Описание                  |
| -------- | ------ | ------------------------- |
| мод      | String | мод рецептов для удаления |


### removeByName

Удалить рецепт на основе названия реестра

```zenscript
craftingTable.removeByName(название как строка);
craftingTable.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Описание                 |
| -------- | ------ | ------------------------ |
| имя      | String | имя реестра для удаления |


### removeByRegex

Удалить рецепт, основанный на регулярном выражении

```zenscript
craftingTable.removeByRegex(regex как строка);
craftingTable.removeByRegex("\\d_\\d");
```

| Параметр   | Тип    | Описание                 |
| ---------- | ------ | ------------------------ |
| регулярные | String | выражать до совпадения с |


### удалить рецепт

Удалите рецепт, основанный на его результате.

```zenscript
craftingTable.removeRecipe(выход как crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Параметр | Тип                                                               | Описание      |
| -------- | ----------------------------------------------------------------- | ------------- |
| вывод    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | вывод рецепта |



## Свойства

| Название         | Тип    | Имеет Getter | Имеет Setter |
| ---------------- | ------ | ------------ | ------------ |
| командная строка | String | true         | false        |

