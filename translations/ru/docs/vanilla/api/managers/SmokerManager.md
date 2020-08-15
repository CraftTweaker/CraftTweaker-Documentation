# Менеджер SmokerManager



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.SmokerManager
```

## Реализованные интерфейсы
SmokerManager реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Методы
### addJSONRecipe

Добавляет рецепт на основе предоставленной IData. Предоставленная IData должна представлять JSON DataPack DataPack это позволяет эффективно регистрировать рецепты для любого набора данных, поддерживающего системы IRecipeType.

```zenscript
smoker.addJSONRecipe(название строки, данные как crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},результат:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 как float, cooking :100});
```

| Параметр | Тип                                                    | Описание                         |
| -------- | ------------------------------------------------------ | -------------------------------- |
| name     | String                                                 | название рецепта                 |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | данные, представляющие файл json |


### Добавить рецепт

Добавляет рецепт на основе заданных параметров.

```zenscript
smoker.addRecipe(название в виде строки, вывести как crafttweaker.api.item.IItemStack, вводить как crafttweaker.api.item.IIngredient, xp как float, cooktime как int);
smoker.addRecipe("wol2diamond", <item:diamond>, <tag:minecraft:wool>, 0);
```

| Параметр        | Тип                                                                 | Описание                                    |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------- |
| имя             | String                                                              | Название нового рецепта                     |
| вывод           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Вывод рецепта IItemStack                    |
| input           | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Вход Igredient в рецепт                     |
| xp              | float                                                               | сколько xp получает игрок                   |
| время кулинарии | int                                                                 | сколько времени требуется для приготовления |


### удалить все

Удалить все рецепты в реестре

```zenscript
куриль.removeAll();
```

### удалил Modid

Удалить рецепт на основе модификации имени реестра

```zenscript
smoker.removeByModid(modid as String);
smoker.removeByModid("minecraft");
```

| Параметр | Тип    | Описание                  |
| -------- | ------ | ------------------------- |
| мод      | String | мод рецептов для удаления |


### removeByName

Удалить рецепт на основе названия реестра

```zenscript
smoker.removeByName(название как строка);
smoker.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Описание                 |
| -------- | ------ | ------------------------ |
| имя      | String | имя реестра для удаления |


### removeByRegex

Удалить рецепт, основанный на регулярном выражении

```zenscript
smoker.removeByRegex(regex как строка);
smoker.removeByRegex("\\d_\\d");
```

| Параметр   | Тип    | Описание                 |
| ---------- | ------ | ------------------------ |
| регулярные | String | выражать до совпадения с |


### удалить рецепт

Удалите рецепт, основанный на его результате.

```zenscript
smoker.removeRecipe(выход как crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| Параметр | Тип                                                               | Описание      |
| -------- | ----------------------------------------------------------------- | ------------- |
| вывод    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | вывод рецепта |



Удаляет рецепт на основе его вывода и ввода.

```zenscript
smoker.removeRecipe(выход как crafttweaker.api.item.IItemStack, ввод в качестве crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Параметр | Тип                                                                 | Описание                         |
| -------- | ------------------------------------------------------------------- | -------------------------------- |
| вывод    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Выход из рецепта IItemStack.     |
| input    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Ингредиент рецепта для удаления. |



