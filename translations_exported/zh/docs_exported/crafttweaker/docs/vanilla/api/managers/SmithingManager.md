# SmithingManager



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.SmithingManager;
```


## 已实现的接口
SmithingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SmithingManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## 方法

### addJSONRecipe #添加JSON配方

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

Return Type: void

```zenscript
SmithingManager.addJSONRecipe(name as string, data as IData) as void
smithing.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数   | 类型                               | 描述                              |
| ---- | -------------------------------- | ------------------------------- |
| name | string                           | name of the recipe              |
| data | [IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe to the smithing table.

Return Type: void

```zenscript
SmithingManager.addRecipe(recipeName as string, result as IItemStack, base as IIngredient, addition as IIngredient) as void
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:items:forge:ingots/gold>);
```

| 参数         | 类型                                                | 描述                                     |
| ---------- | ------------------------------------------------- | -------------------------------------- |
| recipeName | string                                            | Name of the recipe.                    |
| result     | [IItemStack](/vanilla/api/items/IItemStack)       | The item created by the recipe.        |
| base       | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The initial ingredient for the recipe. |
| addition   | [材料（IIngredient）](/vanilla/api/items/IIngredient) | The item added to the base item.       |


### getAllRecipes

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
SmithingManager.getAllRecipes() as stdlib.List<WrapperRecipe>
smithing.getAllRecipes();
```

### getRecipeByName

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
SmithingManager.getRecipeByName(name as string) as WrapperRecipe
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


### getRecipesBy输出

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
SmithingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


### removeAll

Remove all recipes in this registry

Return Type: void

```zenscript
SmithingManager.removeAll() as void
smithing.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

Return Type: void

```zenscript
SmithingManager.removeByModid(modid as string) as void
smithing.removeByModid("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | string | modid of the recipes to remove |


Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
SmithingManager.removeByModid(modid as string, exclude as RecipeFilter) as void
smithing.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                               | 描述                             |
| ----- | ------------------------------------------------ | ------------------------------ |
| modid | string                                           | modid of the recipes to remove |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


### removeByName

Remove recipe based on Registry name

Return Type: void

```zenscript
SmithingManager.removeByName(name as string) as void
smithing.removeByName("minecraft:furnace");
```

| 参数   | 类型     | 描述                                |
| ---- | ------ | --------------------------------- |
| name | string | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

Return Type: void

```zenscript
SmithingManager.removeByRegex(regex as string) as void
smithing.removeByRegex("\\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | string | regex to match against |


### 删除合成表

Remove a recipe based on it's output.

Return Type: void

```zenscript
SmithingManager.removeRecipe(output as IItemStack) as void
smithing.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| output（输出） | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



