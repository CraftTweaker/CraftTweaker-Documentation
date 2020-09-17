# StoneCutterManager



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Реализованные интерфейсы
StoneCutterManager реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Методы
### addJSONRecipe

Добавляет рецепт на основе предоставленной IData. Предоставленная IData должна представлять JSON DataPack DataPack это позволяет эффективно регистрировать рецепты для любого набора данных, поддерживающего системы IRecipeType.

```zenscript
stoneCutter.addJSONRecipe(название как строка, данные как crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},результат:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 как float, кулинари:100});
```

| Параметр | Тип                                                    | Описание                         |
| -------- | ------------------------------------------------------ | -------------------------------- |
| имя      | String                                                 | название рецепта                 |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | данные, представляющие файл json |


### Добавить рецепт

Добавляет рецепт в каменный резак

```zenscript
stoneCutter.addRecipe(Рецепт как строка, вывод как crafttweaker.api.item.IItemStack, ввод как crafttweaker.api.item.Igredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Параметр    | Тип                                                                 | Описание          |
| ----------- | ------------------------------------------------------------------- | ----------------- |
| имя рецепта | String                                                              | название рецепта  |
| вывод       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack |
| input       | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | ввод Igredient    |


### удалить все

Удалить все рецепты в реестре

```zenscript
stoneCutter.removeAll();
```

### удалил Modid

Удалить рецепт на основе модификации имени реестра

```zenscript
stoneCutter.removeByModid(modid as String);
stoneCutter.removeByModid("minecraft");
```

| Параметр | Тип    | Описание                  |
| -------- | ------ | ------------------------- |
| мод      | String | мод рецептов для удаления |


### removeByName

Удалить рецепт на основе названия реестра

```zenscript
stoneCutter.removeByName(название как строка);
stoneCutter.removeByName("minecraft:furnace");
```

| Параметр | Тип    | Описание                 |
| -------- | ------ | ------------------------ |
| имя      | String | имя реестра для удаления |


### removeByRegex

Удалить рецепт, основанный на регулярном выражении

```zenscript
stoneCutter.removeByRegex(регулярные в виде строки);
stoneCutter.removeByRegex("\\d_\\d");
```

| Параметр   | Тип    | Описание                 |
| ---------- | ------ | ------------------------ |
| регулярные | String | выражать до совпадения с |


### удалить рецепт

Удалите рецепт, основанный на его результате.

```zenscript
stoneCutter.removeRecipe(вывод как crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Параметр | Тип                                                               | Описание      |
| -------- | ----------------------------------------------------------------- | ------------- |
| вывод    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | вывод рецепта |



## Свойства

| Название         | Тип    | Имеет Getter | Имеет Setter |
| ---------------- | ------ | ------------ | ------------ |
| командная строка | String | true         | false        |

