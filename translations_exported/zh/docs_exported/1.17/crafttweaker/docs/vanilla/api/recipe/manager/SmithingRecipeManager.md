# SmithingRecipeManager

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.SmithingRecipeManager;
```


## 已实现的接口
SmithingRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in SmithingRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[UpgradeRecipe](/vanilla/api/recipe/type/type/UpgradeRecipe)&gt;

## Enum Constants

SmithingRecipeManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
SmithingRecipeManager.INSTANCE
```
## 使用方式

:::group{name=addJsonRecipe}

基于提供的IData添加配方 The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
SmithingRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| 参数       | 类型                                         | 描述                              |
| -------- | ------------------------------------------ | ------------------------------- |
| name（名称） | string                                     | name of the recipe              |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe to the smithing table.

Return Type: void

```zenscript
// SmithingRecipeManager.addRecipe(recipeName as string, result as IItemStack, base as IIngredient, addition as IIngredient) as void

mySmithingRecipeManager.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:items:forge:ingots/gold>);
```

| 参数         | 类型                                                     | 描述                                     |
| ---------- | ------------------------------------------------------ | -------------------------------------- |
| recipeName | string                                                 | Name of the recipe.                    |
| result     | [IItemstack](/vanilla/api/item/IItemStack)             | The item created by the recipe.        |
| base       | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The initial ingredient for the recipe. |
| addition   | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The item added to the base item.       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SmithingRecipeManager.getAllRecipes() as stdlib.List<T>

mySmithingRecipeManager.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
SmithingRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SmithingRecipeManager.getRecipeMap() as T[ResourceLocation]

mySmithingRecipeManager.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SmithingRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     | 描述                      |
| ---------- | ------------------------------------------------------ | ----------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// SmithingRecipeManager.remove(output as IIngredient) as void

mySmithingRecipeManager.remove(<tag:items:minecraft:wool>);
```

| 参数         | 类型                                                     | 描述                   |
| ---------- | ------------------------------------------------------ | -------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// SmithingRecipeManager.removeAll() as void

mySmithingRecipeManager.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// SmithingRecipeManager.removeByInput(input as IItemStack) as void

mySmithingRecipeManager.removeByInput(<item:minecraft:iron_ingot>);
```

| 参数        | 类型                                         | 描述                    |
| --------- | ------------------------------------------ | --------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
SmithingRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| 参数    | 类型                                  | 描述                             | 可选    | DefaultValue    |
| ----- | ----------------------------------- | ------------------------------ | ----- | --------------- |
| modid | string                              | modid of the recipes to remove | false |                 |
| 不包含   | Predicate&lt;string&gt; | No Description Provided        | true  | (name) => false |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// SmithingRecipeManager.removeByName(name as string) as void

mySmithingRecipeManager.removeByName("minecraft:furnace");
```

| 参数       | 类型     | 描述                                |
| -------- | ------ | --------------------------------- |
| name（名称） | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// SmithingRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

mySmithingRecipeManager.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                  | 描述                      | 可选    | DefaultValue    |
| ----- | ----------------------------------- | ----------------------- | ----- | --------------- |
| regex | string                              | regex to match against  | false |                 |
| 不包含   | Predicate&lt;string&gt; | No Description Provided | true  | (name) => false |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   | 描述                                  |
| ---------- | ------------------------------------------------------------- | ---- | ----- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | Returns a map of all known recipes. |

