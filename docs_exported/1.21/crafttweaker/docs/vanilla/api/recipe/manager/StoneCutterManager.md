# StoneCutterManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.StoneCutterManager;
```


## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[StonecutterRecipe](/vanilla/api/recipe/type/StonecutterRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

```zenscript
// StoneCutterManager.addJsonRecipe(name as string, mapData as MapData)

stoneCutter.addJsonRecipe("recipe_name", {
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

:::group{name=addRecipe}

Adds a recipe to the stone cutter

```zenscript
// StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient)

stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:item:minecraft:wool>);
```

| Parameter  |                        Type                        |                       Description                        |
|------------|----------------------------------------------------|----------------------------------------------------------|
| recipeName | string                                             | name of the recipe                                       |
| output     | [IItemStack](/vanilla/api/item/IItemStack)         | output [IItemStack](/vanilla/api/item/IItemStack)        |
| input      | [IIngredient](/vanilla/api/ingredient/IIngredient) | input [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getRecipeAsJson}

Return Type: [IData](/vanilla/api/data/IData)?

```zenscript
StoneCutterManager.getRecipeAsJson(name as string) as IData?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeByName}

Return Type: [RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;?

```zenscript
StoneCutterManager.getRecipeByName(name as string) as RecipeHolder<T>?
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
// StoneCutterManager.getRecipeMap() as RecipeHolder<T>[ResourceLocation]

stoneCutter.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt;

```zenscript
StoneCutterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<RecipeHolder<T>>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getRecipesMatching}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt;

```zenscript
StoneCutterManager.getRecipesMatching(predicate as Predicate<RecipeHolder<T>>) as stdlib.List<RecipeHolder<T>>
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/RecipeHolder)&lt;T&gt;&gt; |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// StoneCutterManager.remove(output as IIngredient)

stoneCutter.remove(<tag:item:minecraft:wool>);
```

| Parameter |                        Type                        |     Description      |
|-----------|----------------------------------------------------|----------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

```zenscript
// StoneCutterManager.removeAll()

stoneCutter.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

```zenscript
// StoneCutterManager.removeByInput(input as IItemStack)

stoneCutter.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |      Description      |
|-----------|--------------------------------------------|-----------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
StoneCutterManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           |          Description           | Optional |           Default Value           |
|-----------|-------------------------|--------------------------------|----------|-----------------------------------|
| modid     | string                  | modid of the recipes to remove | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                                | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
StoneCutterManager.removeByName(names as string[])
```

| Parameter |   Type   |             Description             |
|-----------|----------|-------------------------------------|
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// StoneCutterManager.removeByRegex(regex as string, exclude as Predicate<string>)

stoneCutter.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter |          Type           |      Description       | Optional |           Default Value           |
|-----------|-------------------------|------------------------|----------|-----------------------------------|
| regex     | string                  | regex to match against | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                        | true     | (name as string) as bool => false |


:::

:::group{name=removeMatching}

Removes all recipes that match the given predicate

```zenscript
// StoneCutterManager.removeMatching(predicate as Predicate<RecipeHolder<T>>)

stoneCutter.removeMatching((holder) => "wool" in holder.id.path);
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

