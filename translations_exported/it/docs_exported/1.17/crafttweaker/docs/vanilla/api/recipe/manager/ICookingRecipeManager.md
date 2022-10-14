# ICookingRecipeManager&LT;T : AbstractCookingRecipe&GT;

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.ICookingRecipeManager;
```


## Interfacce Implementate
ICookingRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in ICookingRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;T&gt;

## Metodi

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
ICookingRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione                     |
| --------- | ------------------------------------ | ------------------------------- |
| nome      | string                               | name of the recipe              |
| mapData   | [MapData](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe based on given params.

 Note: A `cookTime` of `0` will cause the recipe to never complete, it will burn and use fuel, but no progress will be made on the recipe, it needs to be at-least `1` or more.

 Saying that, if you would like to make a recipe that will never complete (for example being able to give the player an infinitely burning furnace for whatever reason), you can still use a `cookTime` of `0`.

Return Type: void

```zenscript
// ICookingRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

furnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| Parametro | Tipo                                               | Descrizione                     |
| --------- | -------------------------------------------------- | ------------------------------- |
| nome      | string                                             | Name of the new recipe          |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | IItemStack output of the recipe |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | IIngredient input of the recipe |
| xp        | float                                              | how much xp the player gets     |
| cookTime  | int                                                | how long it takes to cook       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// ICookingRecipeManager.getAllRecipes() as stdlib.List<T>

furnace.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
ICookingRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
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
// ICookingRecipeManager.getRecipeMap() as T[ResourceLocation]

furnace.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
ICookingRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// ICookingRecipeManager.remove(output as IIngredient) as void

furnace.remove(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                                               | Descrizione          |
| --------- | -------------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// ICookingRecipeManager.removeAll() as void

furnace.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// ICookingRecipeManager.removeByInput(input as IItemStack) as void

furnace.removeByInput(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                       | Descrizione           |
| --------- | ------------------------------------------ | --------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
ICookingRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
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
// ICookingRecipeManager.removeByName(name as string) as void

furnace.removeByName("minecraft:furnace");
```

| Parametro | Tipo   | Descrizione                       |
| --------- | ------ | --------------------------------- |
| nome      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// ICookingRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

furnace.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue    |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------- |
| regex     | string                              | regex to match against  | no       |                 |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name) => false |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output and input.

Return Type: void

```zenscript
// ICookingRecipeManager.removeRecipe(output as IItemStack, input as IIngredient) as void

furnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Parametro | Tipo                                               | Descrizione                          |
| --------- | -------------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | IIngredient of the recipe to remove. |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione                         |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | Returns a map of all known recipes. |

