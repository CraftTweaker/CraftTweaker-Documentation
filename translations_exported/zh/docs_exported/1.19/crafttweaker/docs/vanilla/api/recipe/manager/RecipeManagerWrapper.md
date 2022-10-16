# RecipeManagerWrapper

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.RecipeManagerWrapper;
```


## 已实现的接口
RecipeManagerWrapper implements the following interfaces. That means all methods defined in these interfaces are also available in RecipeManagerWrapper

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt;

## 使用方式

:::group{name=addJsonRecipe}

基于提供的IData添加配方 The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

```zenscript
// RecipeManagerWrapper.addJsonRecipe(name as string, mapData as MapData)

myRecipeManagerWrapper.addJsonRecipe("recipe_name", {
 ingredient: <item:minecraft:gold_ore>,
 result: <item:minecraft:cooked_porkchop>.registryName,
 experience: 0.35 as float,
 cookingtime:100
 });
```

| 参数       | 类型                                         | 描述                              |
| -------- | ------------------------------------------ | ------------------------------- |
| name（名称） | string                                     | name of the recipe              |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// RecipeManagerWrapper.getAllRecipes() as stdlib.List<T>

myRecipeManagerWrapper.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
RecipeManagerWrapper.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// RecipeManagerWrapper.getRecipeMap() as T[ResourceLocation]

myRecipeManagerWrapper.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
RecipeManagerWrapper.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// RecipeManagerWrapper.remove(output as IIngredient)

myRecipeManagerWrapper.remove(<tag:items:minecraft:wool>);
```

| 参数         | 类型                                                     | 描述                   |
| ---------- | ------------------------------------------------------ | -------------------- |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

```zenscript
// RecipeManagerWrapper.removeAll()

myRecipeManagerWrapper.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

```zenscript
// RecipeManagerWrapper.removeByInput(input as IItemStack)

myRecipeManagerWrapper.removeByInput(<item:minecraft:iron_ingot>);
```

| 参数        | 类型                                         | 描述                    |
| --------- | ------------------------------------------ | --------------------- |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
RecipeManagerWrapper.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 描述                             | 可选    | 默认值                               |
| ----- | ----------------------------------- | ------------------------------ | ----- | --------------------------------- |
| modid | string                              | modid of the recipes to remove | false |                                   |
| 不包含   | Predicate&lt;string&gt; |                                | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
RecipeManagerWrapper.removeByName(names as string[])
```

| 参数    | 类型       | 描述                                  |
| ----- | -------- | ----------------------------------- |
| names | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// RecipeManagerWrapper.removeByRegex(regex as string, exclude as Predicate<string>)

myRecipeManagerWrapper.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| 参数    | 类型                                  | 描述                     | 可选    | 默认值                               |
| ----- | ----------------------------------- | ---------------------- | ----- | --------------------------------- |
| regex | string                              | regex to match against | false |                                   |
| 不包含   | Predicate&lt;string&gt; |                        | true  | (name as string) as bool => false |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   | 描述                                  |
| ---------- | ------------------------------------------------------------- | ---- | ----- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false |                                     |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | Returns a map of all known recipes. |

