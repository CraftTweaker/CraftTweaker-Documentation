# GenericRecipesManager

This recipe manager allows you to perform removal actions over all recipe managers.
 You can access this manager by using the `recipes` global keyword.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.GenericRecipesManager;
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

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;&gt;

```zenscript
// GenericRecipesManager.getAllRecipes() as stdlib.List<RecipeHolder<Recipe<RecipeInput>>>

recipes.getAllRecipes();
```

:::

:::group{name=getRecipeAsJson}

Return Type: [IData](/vanilla/api/data/IData)?

```zenscript
GenericRecipesManager.getRecipeAsJson(name as string) as IData?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeByName}

Return Type: [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;

```zenscript
GenericRecipesManager.getRecipeByName(name as string) as RecipeHolder<Recipe<RecipeInput>>
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// GenericRecipesManager.getRecipeMap() as RecipeHolder<Recipe<RecipeInput>>[ResourceLocation]

recipes.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;&gt;

```zenscript
GenericRecipesManager.getRecipesByOutput(output as IIngredient) as stdlib.List<RecipeHolder<Recipe<RecipeInput>>>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getRecipesMatching}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;&gt;

```zenscript
GenericRecipesManager.getRecipesMatching(predicate as Predicate<RecipeHolder<Recipe<RecipeInput>>>) as stdlib.List<RecipeHolder<Recipe<RecipeInput>>>
```

| Parameter |                                                                                      Type                                                                                      |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;&gt; |


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

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

```zenscript
// GenericRecipesManager.removeByInput(input as IItemStack)

recipes.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |      Description      |
|-----------|--------------------------------------------|-----------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


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

:::group{name=removeMatching}

Removes all recipes that match the given predicate

```zenscript
// GenericRecipesManager.removeMatching(predicate as Predicate<RecipeHolder<Recipe<RecipeInput>>>)

recipes.removeMatching((holder) => "wool" in holder.id.path);
```

| Parameter |                                                                                      Type                                                                                      |                                                                                        Description                                                                                         |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;&gt; | a predicate of [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt; to test recipes against. |


:::


## Properties

|    Name     |                                                                                                           Type                                                                                                            | Has Getter | Has Setter |                                                                            Description                                                                             |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allManagers | stdlib.List&lt;[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&gt;                                                                                                                                           | true       | false      | Returns a list of all known recipe managers. <br />  This includes managers added by mod integrations as well as wrapper managers added to provide simple support. |
| allRecipes  | stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;&gt;                                          | true       | false      |                                                                                                                                                                    |
| recipeMap   | [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes.                                                                                                                                |

