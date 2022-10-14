# RecipeManagerWrapper

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.RecipeManagerWrapper;
```


## Interfacce Implementate
RecipeManagerWrapper implements the following interfaces. That means all methods defined in these interfaces are also available in RecipeManagerWrapper

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt;

## Metodi

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
RecipeManagerWrapper.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione                     |
| --------- | ------------------------------------ | ------------------------------- |
| nome      | string                               | name of the recipe              |
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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


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

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// RecipeManagerWrapper.remove(output as IIngredient) as void

myRecipeManagerWrapper.remove(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                                               | Descrizione          |
| --------- | -------------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// RecipeManagerWrapper.removeAll() as void

myRecipeManagerWrapper.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// RecipeManagerWrapper.removeByInput(input as IItemStack) as void

myRecipeManagerWrapper.removeByInput(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione           |
| --------- | ------------------------------------------ | --------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
RecipeManagerWrapper.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione                    | Optional | DefaultValue    |
| --------- | ----------------------------------- | ------------------------------ | -------- | --------------- |
| modid     | string                              | modid of the recipes to remove | no       |                 |
| esclude   | Predicate&lt;string&gt; | No Description Provided        | sì       | (name) => false |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// RecipeManagerWrapper.removeByName(name as string) as void

myRecipeManagerWrapper.removeByName("minecraft:furnace");
```

| Parametro | Tipo   | Descrizione                       |
| --------- | ------ | --------------------------------- |
| nome      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// RecipeManagerWrapper.removeByRegex(regex as string, exclude as Predicate<string>) as void

myRecipeManagerWrapper.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue    |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------- |
| regex     | string                              | regex to match against  | no       |                 |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name) => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione                         |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | Returns a map of all known recipes. |

