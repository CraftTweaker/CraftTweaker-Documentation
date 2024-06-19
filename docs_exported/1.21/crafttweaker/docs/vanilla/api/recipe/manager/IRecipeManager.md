# IRecipeManager&LT;T : Recipe&GT;

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.IRecipeManager;
```


## Implemented Interfaces
IRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in IRecipeManager

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)
- stdlib.Iterable&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt;

## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

```zenscript
// IRecipeManager.addJsonRecipe(name as string, mapData as MapData)

craftingTable.addJsonRecipe("recipe_name", {
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

:::group{name=getRecipeByName}

Return Type: [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;?

```zenscript
IRecipeManager.getRecipeByName(name as string) as RecipeHolder<T>?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// IRecipeManager.getRecipeMap() as RecipeHolder<T>[ResourceLocation]

craftingTable.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt;

```zenscript
IRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<RecipeHolder<T>>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getRecipesMatching}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt;

```zenscript
IRecipeManager.getRecipesMatching(predicate as Predicate<RecipeHolder<T>>) as stdlib.List<RecipeHolder<T>>
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt; |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// IRecipeManager.remove(output as IIngredient)

craftingTable.remove(<tag:item:minecraft:wool>);
```

| Parameter |                        Type                        |     Description      |
|-----------|----------------------------------------------------|----------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

```zenscript
// IRecipeManager.removeAll()

craftingTable.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

```zenscript
// IRecipeManager.removeByInput(input as IItemStack)

craftingTable.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |      Description      |
|-----------|--------------------------------------------|-----------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
IRecipeManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           |          Description           | Optional |           Default Value           |
|-----------|-------------------------|--------------------------------|----------|-----------------------------------|
| modid     | string                  | modid of the recipes to remove | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                                | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
IRecipeManager.removeByName(names as string[])
```

| Parameter |   Type   |             Description             |
|-----------|----------|-------------------------------------|
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// IRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>)

craftingTable.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter |          Type           |      Description       | Optional |           Default Value           |
|-----------|-------------------------|------------------------|----------|-----------------------------------|
| regex     | string                  | regex to match against | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                        | true     | (name as string) as bool => false |


:::

:::group{name=removeMatching}

Removes all recipes that match the given predicate

```zenscript
// IRecipeManager.removeMatching(predicate as Predicate<RecipeHolder<T>>)

craftingTable.removeMatching((holder) => "wool" in holder.id.path);
```

| Parameter |                                    Type                                    |                       Description                       |
|-----------|----------------------------------------------------------------------------|---------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt; | a predicate of RecipeHolder<T> to test recipes against. |


:::


## Properties

|    Name    |                                                         Type                                                          | Has Getter | Has Setter |             Description             |
|------------|-----------------------------------------------------------------------------------------------------------------------|------------|------------|-------------------------------------|
| allRecipes | stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt;                                          | true       | false      |                                     |
| recipeMap  | [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes. |

