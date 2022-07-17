# GenericRecipesManager

This recipe manager allows you to perform removal actions over all recipe managers.
 You can access this manager by using the `recipes` global keyword.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.GenericRecipesManager;
```


## Enum Constants

GenericRecipesManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
GenericRecipesManager.INSTANCE
```
## Methods

:::group{name=addJsonRecipe}

Add a new recipe based on the given recipe in a valid DataPack JSON format.

 Unlike the addJSONRecipe method in [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;T&gt; you **must** set the type of the recipe within the JSON yourself.

```zenscript
// GenericRecipesManager.addJsonRecipe(name as string, data as MapData)

recipes.addJsonRecipe("recipe_name", {
 type: "minecraft:smoking",
 ingredient: <item:minecraft:gold_ore>,
 result: <item:minecraft:cooked_porkchop>,
 experience: 0.35 as float,
 cookingtime: 100
 });
```

| Parameter |                 Type                 |        Description         |
|-----------|--------------------------------------|----------------------------|
| name      | string                               | The recipe's resource path |
| data      | [MapData](/vanilla/api/data/MapData) | The recipe in JSON format  |


:::

:::group{name=getAllManagers}

Returns a list of all known recipe managers.
 This includes managers added by mod integrations as well as wrapper managers added to provide simple support.

Return Type: stdlib.List&lt;[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&gt;

```zenscript
// GenericRecipesManager.getAllManagers() as stdlib.List<IRecipeManager>

recipes.getAllManagers();
```

:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt;

```zenscript
// GenericRecipesManager.getAllRecipes() as stdlib.List<Recipe>

recipes.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [Recipe](/vanilla/api/recipe/type/Recipe)

```zenscript
GenericRecipesManager.getRecipeByName(name as string) as Recipe
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [Recipe](/vanilla/api/recipe/type/Recipe)[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// GenericRecipesManager.getRecipeMap() as Recipe[ResourceLocation]

recipes.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt;

```zenscript
GenericRecipesManager.getRecipesByOutput(output as IIngredient) as stdlib.List<Recipe>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Removes recipes by output

```zenscript
// GenericRecipesManager.remove(output as IIngredient)

recipes.remove(<item:minecraft:iron_ingot>);
```

| Parameter |                        Type                        |    Description    |
|-----------|----------------------------------------------------|-------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | The recipe result |


:::

:::group{name=removeAll}

Removes all recipes from all managers.

```zenscript
// GenericRecipesManager.removeAll()

recipes.removeAll();
```

:::

:::group{name=removeByModid}

Removes all recipes from the provided mod.
 Chooses the recipes based on their full recipe name, not based on output item!

```zenscript
// GenericRecipesManager.removeByModid(modId as string)

recipes.removeByModid("crafttweaker");
```

| Parameter |  Type  |   Description   |
|-----------|--------|-----------------|
| modId     | string | The mod's modId |


:::

:::group{name=removeByModid}

Removes all recipes from the provided mod.
 Allows a function to exclude certain recipe names from being removed.
 In the example below, only the recipe for the white bed would remain.
 Since the recipe's namespace is already fixed based on the modId argument,
 the recipe filter will only check the resource path!

```zenscript
// GenericRecipesManager.removeByModid(modId as string, exclude as Predicate<string>)

recipes.removeByModid("minecraft", (recipeName as string) => recipeName == "white_bed");
```

| Parameter |          Type           |                                Description                                |
|-----------|-------------------------|---------------------------------------------------------------------------|
| modId     | string                  | The mod's modid                                                           |
| exclude   | Predicate&lt;string&gt; | Function that returns `true` if the recipe should remain in the registry. |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
GenericRecipesManager.removeByName(names as string[])
```

| Parameter |   Type   |             Description             |
|-----------|----------|-------------------------------------|
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex

```zenscript
// GenericRecipesManager.removeByRegex(regex as string)

recipes.removeByRegex("\\d_\\d");
```

| Parameter |  Type  |      Description       |
|-----------|--------|------------------------|
| regex     | string | regex to match against |


:::

:::group{name=removeRecipe}

::deprecated[use remove(IIngredient output)]

Removes recipes by output

```zenscript
// GenericRecipesManager.removeRecipe(output as IIngredient)

recipes.removeRecipe(<item:minecraft:iron_ingot>);
```

| Parameter |                        Type                        |    Description    |
|-----------|----------------------------------------------------|-------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | The recipe result |


:::


## Properties

|    Name     |                                                 Type                                                  | Has Getter | Has Setter |                                                                            Description                                                                             |
|-------------|-------------------------------------------------------------------------------------------------------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allManagers | stdlib.List&lt;[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&gt;                       | true       | false      | Returns a list of all known recipe managers. <br />  This includes managers added by mod integrations as well as wrapper managers added to provide simple support. |
| allRecipes  | stdlib.List&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt;                                          | true       | false      |                                                                                                                                                                    |
| recipeMap   | [Recipe](/vanilla/api/recipe/type/Recipe)[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes.                                                                                                                                |

