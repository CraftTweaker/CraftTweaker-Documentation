# Менеджер планшетов



Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.CraftingTableManager
```

## Реализованные интерфейсы
CraftingTableManager реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Методы
### addJSONRecipe

Добавляет рецепт на основе предоставленной IData. Предоставленная IData должна представлять JSON DataPack DataPack это позволяет эффективно регистрировать рецепты для любого набора данных, поддерживающего системы IRecipeType.

```zenscript
craftingTable.addJSONRecipe(название строки, данные как crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},результат:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 как float, cookingtime:100});
```

| Параметр | Тип                                                    | Описание                         |
| -------- | ------------------------------------------------------ | -------------------------------- |
| имя      | String                                                 | название рецепта                 |
| data     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | данные, представляющие файл json |


### addShaped

Добавляет рецепт формы в таблицу крафта

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.Recipe.FunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inpuas IItemStack[][]) => {if(inpu[0][0]. isplayName == "совершенно настоящий алмазный блок" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Алмаз");});
```

| Параметр       | Тип                                                                                      | Описание                                                                                                                              | Необязательный | Значение по умолчанию |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------- |
| имя рецепта    | String                                                                                   | имя рецепта для добавления.                                                                                                           | false          | `null`                |
| вывод          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                              | false          | `null`                |
| ингредиенты    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | массив [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) для входов                                                 | false          | `null`                |
| рецепт функции | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | необязательный [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) для более продвинутых условий | true           | `null`                |


### addShapedMirrored

Добавляет рецепт зеркальной формы к столу создания

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]);
craftingTable. ddShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inpuas IItemStack[][]) => {if(inpu[0][0]. isplayName == "совершенно настоящий алмазный блок" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Алмаз");});
```

| Параметр       | Тип                                                                                      | Описание                                                                                                                              | Необязательный | Значение по умолчанию |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------- |
| имя рецепта    | String                                                                                   | имя рецепта для добавления.                                                                                                           | false          | `null`                |
| вывод          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                              | false          | `null`                |
| ингредиенты    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | массив [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) для входов                                                 | false          | `null`                |
| рецепт функции | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | необязательный [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) для более продвинутых условий | true           | `null`                |


### addShapeless

Добавляет бесформенный рецепт в стол создания

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as crafttweaker.api.recipe.Recipe.FunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inpuas IItemStack[]) => {if(inpu[0]. isplayName == "совершенно настоящий алмазный блок" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Алмаз");});
```

| Параметр       | Тип                                                                                    | Описание                                                                                                                        | Необязательный | Значение по умолчанию |
| -------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------- |
| имя рецепта    | String                                                                                 | имя рецепта для добавления.                                                                                                     | false          | `null`                |
| вывод          | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                      | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                        | false          | `null`                |
| ингредиенты    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]                  | массив [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) для входов                                           | false          | `null`                |
| рецепт функции | [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | необязательный [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) для более сложных условий | true           | `null`                |


### getRecipeByName

Тип возврата: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(название как строка);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### getRecipesByFrom

Тип возврата: Список&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(вывод как crafttweaker.api.item.IIngredient);
```

| Параметр | Тип                                                                 | Описание             |
| -------- | ------------------------------------------------------------------- | -------------------- |
| вывод    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Описание отсутствует |


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



Удалите рецепт на основе мода названия реестра с добавленной проверкой исключения, так что вы можете удалить весь мод кроме нескольких указанных модификаций.

```zenscript
craftingTable.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
craftingTable.removeByModid("minecraft", (название как строка) => {return name == "orange_wool";});
```

| Параметр  | Тип                                                                      | Описание                            |
| --------- | ------------------------------------------------------------------------ | ----------------------------------- |
| мод       | String                                                                   | мод рецептов для удаления           |
| исключить | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | рецепты для exlude от быть удалены. |


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

