# RecipeManagerWrapper

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.RecipeManagerWrapper;
```


## Implemented Interfaces
RecipeManagerWrapper implements the following interfaces. That means all methods defined in these interfaces are also available in RecipeManagerWrapper

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

```zenscript
// RecipeManagerWrapper.addJsonRecipe(name as string, mapData as MapData)

myRecipeManagerWrapper.addJsonRecipe("recipe_name", {
 ingredient: <item:minecraft:gold_ore>,
 result: <item:minecraft:cooked_porkchop>.registryName,
 experience: 0.35 as float,
 cookingtime:100
 });
```

| Parameter | Type                                 | Description                     |
| --------- | ------------------------------------ | ------------------------------- |
| name      | string                               | name of the recipe              |
| mapData   | [MapData](/vanilla/api/data/MapData) | data representing the json file |


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

| Parameter | Type   |
| --------- | ------ |
| name      | string |


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

| Parameter | Type                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// RecipeManagerWrapper.remove(output as IIngredient)

myRecipeManagerWrapper.remove(<tag:items:minecraft:wool>);
```

| Parameter | Type                                               | Description          |
| --------- | -------------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


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

| Parameter | Type                                       | Description           |
| --------- | ------------------------------------------ | --------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
RecipeManagerWrapper.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter                | Type                                | Description                    | Optional | Default Value                     |
| ------------------------ | ----------------------------------- | ------------------------------ | -------- | --------------------------------- |
| modid - mod que lo añade | string                              | modid of the recipes to remove | false    |                                   |
| excluir                  | Predicate&lt;string&gt; |                                | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
RecipeManagerWrapper.removeByName(names as string[])
```

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// RecipeManagerWrapper.removeByRegex(regex as string, exclude as Predicate<string>)

myRecipeManagerWrapper.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                | Description            | Optional | Default Value                     |
| --------- | ----------------------------------- | ---------------------- | -------- | --------------------------------- |
| regex     | string                              | regex to match against | false    |                                   |
| excluir   | Predicate&lt;string&gt; |                        | true     | (name as string) as bool => false |


:::


## Properties

| Nombre     | Type                                                          | Has Getter | Has Setter | Description                         |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      |                                     |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes. |

