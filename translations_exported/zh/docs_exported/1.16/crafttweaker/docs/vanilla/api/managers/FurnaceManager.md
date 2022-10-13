# FurnaceManager



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.FurnaceManager;
```


## 已实现的接口
FurnaceManager implements the following interfaces. That means all methods defined in these interfaces are also available in FurnaceManager

- [ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## 使用方式

:::group{name=addJSONRecipe}

基于提供的IData添加配方 提供的 IData 应该代表一个JSON数据包 ,这有效地允许您注册任何支持 IRecipeType 系统的 DataPack配方。

Return Type: void

```zenscript
// FurnaceManager.addJSONRecipe(name as string, data as IData) as void

furnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| 参数       | 类型                                   | 描述                              |
| -------- | ------------------------------------ | ------------------------------- |
| name（名称） | string                               | name of the recipe              |
| data     | [IData #数据](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addRecipe}

添加基于给定参数的合成表

 Note: A `cookTime` of `0` will cause the recipe to never complete, it will burn and use fuel, but no progress will be made on the recipe, it needs to be at-least `1` or more.

 Saying that, if you would like to make a recipe that will never complete (for example being able to give the player an infinitely burning furnace for whatever reason), you can still use a `cookTime` of `0`.

Return Type: void

```zenscript
// FurnaceManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

furnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| 参数             | 类型                                                | 描述         |
| -------------- | ------------------------------------------------- | ---------- |
| name（名称）       | string                                            | 新的合成表名称    |
| output（输出）     | [IItemstack](/vanilla/api/items/IItemStack)       | 合成表的输出物品id |
| input（输入）      | [材料（IIngredient）](/vanilla/api/items/IIngredient) | 合成表的输入成分   |
| xp (经验值)       | float                                             | 玩家获得多少经验   |
| cookTime #烧制时间 | int                                               | 烧制需要多长时间   |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// FurnaceManager.getAllRecipes() as stdlib.List<WrapperRecipe>

furnace.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
FurnaceManager.getRecipeByName(name as string) as WrapperRecipe
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// FurnaceManager.getRecipeMap() as WrapperRecipe[MCResourceLocation]

furnace.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
FurnaceManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| 参数         | 类型                                                | 描述                      |
| ---------- | ------------------------------------------------- | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// FurnaceManager.removeAll() as void

furnace.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
// FurnaceManager.removeByModid(modid as string) as void

furnace.removeByModid("minecraft");
```

| 参数    | 类型     | 描述                             |
| ----- | ------ | ------------------------------ |
| modid | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// FurnaceManager.removeByModid(modid as string, exclude as RecipeFilter) as void

furnace.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                               | 描述                             |
| ----- | ------------------------------------------------ | ------------------------------ |
| modid | string                                           | modid of the recipes to remove |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | 要避免被移除的配方。                     |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// FurnaceManager.removeByName(name as string) as void

furnace.removeByName("minecraft:furnace");
```

| 参数       | 类型     | 描述                                |
| -------- | ------ | --------------------------------- |
| name（名称） | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex.

Return Type: void

```zenscript
// FurnaceManager.removeByRegex(regex as string) as void

furnace.removeByRegex("\\d_\\d");
```

| 参数    | 类型     | 描述                     |
| ----- | ------ | ---------------------- |
| regex | string | regex to match against |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// FurnaceManager.removeByRegex(regex as string, exclude as RecipeFilter) as void

furnace.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                               | 描述                      |
| ----- | ------------------------------------------------ | ----------------------- |
| regex | string                                           | regex to match against  |
| 不包含   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// FurnaceManager.removeRecipe(output as IIngredient) as void

furnace.removeRecipe(<tag:items:minecraft:wool>);
```

| 参数         | 类型                                                | 描述                   |
| ---------- | ------------------------------------------------- | -------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/items/IIngredient) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output.

Return Type: void

```zenscript
// FurnaceManager.removeRecipe(output as IItemStack) as void

furnace.removeRecipe(<item:minecraft:glass>);
```

| 参数         | 类型                                          | 描述                   |
| ---------- | ------------------------------------------- | -------------------- |
| output（输出） | [IItemstack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipe}

移除基于输出和输入的合成表

Return Type: void

```zenscript
// FurnaceManager.removeRecipe(output as IItemStack, input as IIngredient) as void

furnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| 参数         | 类型                                                | 描述          |
| ---------- | ------------------------------------------------- | ----------- |
| output（输出） | [IItemstack](/vanilla/api/items/IItemStack)       | 合成表的输出物品id. |
| input（输入）  | [材料（IIngredient）](/vanilla/api/items/IIngredient) | 要移除的配方的成分。  |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// FurnaceManager.removeRecipeByInput(input as IItemStack) as void

furnace.removeRecipeByInput(<item:minecraft:iron_ingot>);
```

| 参数        | 类型                                          | 描述                    |
| --------- | ------------------------------------------- | --------------------- |
| input（输入） | [IItemstack](/vanilla/api/items/IItemStack) | The input IItemStack. |


:::


## 参数

| 名称         | 类型                                                                                                             | 可获得  | 可设置   | 描述                                  |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---- | ----- | ----------------------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true | false | No Description Provided             |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true | false | Returns a map of all known recipes. |

