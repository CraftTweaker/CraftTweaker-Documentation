# StoneCutterManager



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.StoneCutterManager;
```


## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[StonecutterRecipe](/vanilla/api/recipe/type/type/StonecutterRecipe)&gt;

## Enum Constants

StoneCutterManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
StoneCutterManager.INSTANCE
```
## Methoden

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
StoneCutterManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Beschreibung                    |
| --------- | ------------------------------------ | ------------------------------- |
| name      | string                               | name of the recipe              |
| mapData   | [MapData](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe to the stone cutter

Return Type: void

```zenscript
// StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient) as void

stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:items:minecraft:wool>);
```

| Parameter  | Type                                               | Beschreibung                                             |
| ---------- | -------------------------------------------------- | -------------------------------------------------------- |
| recipeName | string                                             | name of the recipe                                       |
| output     | [IItemStack](/vanilla/api/item/IItemStack)         | output [IItemStack](/vanilla/api/item/IItemStack)        |
| input      | [IIngredient](/vanilla/api/ingredient/IIngredient) | input [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// StoneCutterManager.getAllRecipes() as stdlib.List<T>

stoneCutter.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
StoneCutterManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// StoneCutterManager.getRecipeMap() as T[ResourceLocation]

stoneCutter.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
StoneCutterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Beschreibung            |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// StoneCutterManager.remove(output as IIngredient) as void

stoneCutter.remove(<tag:items:minecraft:wool>);
```

| Parameter | Type                                               | Beschreibung         |
| --------- | -------------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// StoneCutterManager.removeAll() as void

stoneCutter.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// StoneCutterManager.removeByInput(input as IItemStack) as void

stoneCutter.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                       | Beschreibung          |
| --------- | ------------------------------------------ | --------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
StoneCutterManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter    | Type                                | Beschreibung                   | Optional | DefaultValue    |
| ------------ | ----------------------------------- | ------------------------------ | -------- | --------------- |
| modid        | string                              | modid of the recipes to remove | false    |                 |
| ausschließen | Predicate&lt;string&gt; | No Description Provided        | true     | (name) => false |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// StoneCutterManager.removeByName(name as string) as void

stoneCutter.removeByName("minecraft:furnace");
```

| Parameter | Type   | Beschreibung                      |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// StoneCutterManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

stoneCutter.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter    | Type                                | Beschreibung            | Optional | DefaultValue    |
| ------------ | ----------------------------------- | ----------------------- | -------- | --------------- |
| regex        | string                              | regex to match against  | false    |                 |
| ausschließen | Predicate&lt;string&gt; | No Description Provided | true     | (name) => false |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Beschreibung                        |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes. |

