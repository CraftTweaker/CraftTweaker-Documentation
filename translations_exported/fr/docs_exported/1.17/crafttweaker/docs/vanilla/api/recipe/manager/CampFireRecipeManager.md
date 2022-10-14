# CampFireRecipeManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.CampFireRecipeManager;
```


## Implemented Interfaces
CampFireRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in CampFireRecipeManager

- [ICookingRecipeManager](/vanilla/api/recipe/manager/ICookingRecipeManager)&lt;[CampfireCookingRecipe](/vanilla/api/recipe/type/CampfireCookingRecipe)&gt;

## Enum Constants

CampFireRecipeManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
CampFireRecipeManager.INSTANCE
```
## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
CampFireRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type                                 | Description                     |
| --------- | ------------------------------------ | ------------------------------- |
| name      | string                               | name of the recipe              |
| mapData   | [MapData](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe based on given params.

 Note: A `cookTime` of `0` will cause the recipe to never complete, it will burn and use fuel, but no progress will be made on the recipe, it needs to be at-least `1` or more.

 Saying that, if you would like to make a recipe that will never complete (for example being able to give the player an infinitely burning furnace for whatever reason), you can still use a `cookTime` of `0`.

Return Type: void

```zenscript
// CampFireRecipeManager.addRecipe(name as string, output as IItemStack, input as IIngredient, xp as float, cookTime as int) as void

blastFurnace.addRecipe("wool2diamond", <item:minecraft:diamond>, <tag:items:minecraft:wool>, 1.0, 30);
```

| Parameter | Type                                               | Description                     |
| --------- | -------------------------------------------------- | ------------------------------- |
| name      | string                                             | Name of the new recipe          |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | IItemStack output of the recipe |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | IIngredient input of the recipe |
| xp        | float                                              | how much xp the player gets     |
| cookTime  | int                                                | how long it takes to cook       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CampFireRecipeManager.getAllRecipes() as stdlib.List<T>

blastFurnace.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
CampFireRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CampFireRecipeManager.getRecipeMap() as T[ResourceLocation]

blastFurnace.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CampFireRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type                                               | Description             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// CampFireRecipeManager.remove(output as IIngredient) as void

blastFurnace.remove(<tag:items:minecraft:wool>);
```

| Parameter | Type                                               | Description          |
| --------- | -------------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Supprimer toutes les recettes de ce registre.

Return Type: void

```zenscript
// CampFireRecipeManager.removeAll() as void

blastFurnace.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// CampFireRecipeManager.removeByInput(input as IItemStack) as void

blastFurnace.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter | Type                                       | Description           |
| --------- | ------------------------------------------ | --------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Supprimer la recette basée sur la modification du nom du Registre.

Return Type: void

```zenscript
CampFireRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type                                | Description                       | Optional | DefaultValue    |
| --------- | ----------------------------------- | --------------------------------- | -------- | --------------- |
| modid     | string                              | modifier les recettes à supprimer | false    |                 |
| exclure   | Predicate&lt;string&gt; | No Description Provided           | true     | (name) => false |


:::

:::group{name=removeByName}

Supprimer la recette basée sur le nom du Registre.

Return Type: void

```zenscript
// CampFireRecipeManager.removeByName(name as string) as void

blastFurnace.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CampFireRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

blastFurnace.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                | Description             | Optional | DefaultValue    |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------- |
| regex     | string                              | regex to match against  | false    |                 |
| exclure   | Predicate&lt;string&gt; | No Description Provided | true     | (name) => false |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output and input.

Return Type: void

```zenscript
// CampFireRecipeManager.removeRecipe(output as IItemStack, input as IIngredient) as void

blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:items:minecraft:wool>);
```

| Parameter | Type                                               | Description                          |
| --------- | -------------------------------------------------- | ------------------------------------ |
| output    | [IItemStack](/vanilla/api/item/IItemStack)         | IItemStack output of the recipe.     |
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | IIngredient of the recipe to remove. |


:::


## Properties

| Name       | Type                                                          | Has Getter | Has Setter | Description                         |
| ---------- | ------------------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true       | false      | No Description Provided             |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes. |

