# SmithingRecipeManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.SmithingRecipeManager;
```


## Implemented Interfaces
SmithingRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in SmithingRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[SmithingRecipe](/vanilla/api/recipe/type/SmithingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

```zenscript
// SmithingRecipeManager.addJsonRecipe(name as string, mapData as MapData)

smithing.addJsonRecipe("recipe_name", {
 ingredient: <item:minecraft:gold_ore>,
 result: <item:minecraft:cooked_porkchop>.registryName,
 experience: 0.35 as float,
 cookingtime:100
 });
```

| Parameter |                 Type                 |           Description           |
|-----------|--------------------------------------|---------------------------------|
| name      | string                               | name of the recipe              |
| mapData   | [MapData](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addTransformRecipe}

Adds a new transform recipe to the smithing table.

```zenscript
SmithingRecipeManager.addTransformRecipe(recipeName as string, result as IItemStack, template as IIngredient, base as IIngredient, addition as IIngredient)
```

| Parameter  |                        Type                        |              Description               |
|------------|----------------------------------------------------|----------------------------------------|
| recipeName | string                                             | Name of the recipe.                    |
| result     | [IItemStack](/vanilla/api/item/IItemStack)         | The item created by the recipe.        |
| template   | [IIngredient](/vanilla/api/ingredient/IIngredient) | The template to use.                   |
| base       | [IIngredient](/vanilla/api/ingredient/IIngredient) | The initial ingredient for the recipe. |
| addition   | [IIngredient](/vanilla/api/ingredient/IIngredient) | The item added to the base item.       |


:::

:::group{name=addTrimRecipe}

Adds a new trim recipe to the smithing table.

```zenscript
SmithingRecipeManager.addTrimRecipe(recipeName as string, template as IIngredient, base as IIngredient, addition as IIngredient)
```

| Parameter  |                        Type                        |              Description               |
|------------|----------------------------------------------------|----------------------------------------|
| recipeName | string                                             | Name of the recipe.                    |
| template   | [IIngredient](/vanilla/api/ingredient/IIngredient) | The template to use.                   |
| base       | [IIngredient](/vanilla/api/ingredient/IIngredient) | The initial ingredient for the recipe. |
| addition   | [IIngredient](/vanilla/api/ingredient/IIngredient) | The item added to the base item.       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;

```zenscript
// SmithingRecipeManager.getAllRecipes() as stdlib.List<RecipeHolderRecipeHolder<T>>

smithing.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;?

```zenscript
SmithingRecipeManager.getRecipeByName(name as string) as RecipeHolderRecipeHolder<T>?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SmithingRecipeManager.getRecipeMap() as RecipeHolderRecipeHolder<T>[ResourceLocation]

smithing.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;

```zenscript
SmithingRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<RecipeHolderRecipeHolder<T>>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getRecipesMatching}

Return Type: stdlib.List&lt;[RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;

```zenscript
SmithingRecipeManager.getRecipesMatching(predicate as Predicate<RecipeHolderRecipeHolder<T>>) as stdlib.List<RecipeHolderRecipeHolder<T>>
```

| Parameter |                                            Type                                             |
|-----------|---------------------------------------------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt; |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// SmithingRecipeManager.remove(output as IIngredient)

smithing.remove(<tag:items:minecraft:wool>);
```

| Parameter |                        Type                        |     Description      |
|-----------|----------------------------------------------------|----------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

```zenscript
// SmithingRecipeManager.removeAll()

smithing.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

```zenscript
// SmithingRecipeManager.removeByInput(input as IItemStack)

smithing.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |      Description      |
|-----------|--------------------------------------------|-----------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
SmithingRecipeManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           |          Description           | Optional |           Default Value           |
|-----------|-------------------------|--------------------------------|----------|-----------------------------------|
| modid     | string                  | modid of the recipes to remove | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                                | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
SmithingRecipeManager.removeByName(names as string[])
```

| Parameter |   Type   |             Description             |
|-----------|----------|-------------------------------------|
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// SmithingRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>)

smithing.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter |          Type           |      Description       | Optional |           Default Value           |
|-----------|-------------------------|------------------------|----------|-----------------------------------|
| regex     | string                  | regex to match against | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                        | true     | (name as string) as bool => false |


:::

:::group{name=removeMatching}

Removes all recipes that match the given predicate

```zenscript
// SmithingRecipeManager.removeMatching(predicate as Predicate<RecipeHolderRecipeHolder<T>>)

smithing.removeMatching((holder) => "wool" in holder.id.path);
```

| Parameter |                                            Type                                             |                       Description                       |
|-----------|---------------------------------------------------------------------------------------------|---------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt; | a predicate of RecipeHolder<T> to test recipes against. |


:::


## Properties

|    Name    |                                                                  Type                                                                  | Has Getter | Has Setter |             Description             |
|------------|----------------------------------------------------------------------------------------------------------------------------------------|------------|------------|-------------------------------------|
| allRecipes | stdlib.List&lt;[RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;                                          | true       | false      |                                     |
| recipeMap  | [RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes. |

