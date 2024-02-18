# CraftingTableRecipeManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.CraftingTableRecipeManager;
```


## Implemented Interfaces
CraftingTableRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[CraftingRecipe](/vanilla/api/recipe/type/CraftingRecipe)&gt;

## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

```zenscript
// CraftingTableRecipeManager.addJsonRecipe(name as string, mapData as MapData)

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

:::group{name=addShaped}

```zenscript
CraftingTableRecipeManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunction2D)
```

|   Parameter    |                             Type                             | Optional |
|----------------|--------------------------------------------------------------|----------|
| recipeName     | string                                                       | false    |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                   | false    |
| ingredients    | [IIngredient](/vanilla/api/ingredient/IIngredient)[][]       | false    |
| recipeFunction | [RecipeFunction2D](/vanilla/api/recipe/fun/RecipeFunction2D) | true     |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table.

 This method lets you provide a [MirrorAxis](/vanilla/api/recipe/MirrorAxis), which can be used to set which axis the recipe is mirrored on.
 Use cases are making a recipe only be mirrored vertically or only horizontally.

```zenscript
// CraftingTableRecipeManager.addShapedMirrored(recipeName as string, mirrorAxis as MirrorAxis, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunction2D)

craftingTable.addShapedMirrored("recipe_name", MirrorAxis.DIAGONAL, <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

|   Parameter    |                             Type                             |                                            Description                                             | Optional |
|----------------|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------|----------|
| recipeName     | string                                                       | name of the recipe to add.                                                                         | false    |
| mirrorAxis     | [MirrorAxis](/vanilla/api/recipe/MirrorAxis)                 | The axis that this recipe mirrored on.                                                             | false    |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                   | output [IItemStack](/vanilla/api/item/IItemStack)                                                  | false    |
| ingredients    | [IIngredient](/vanilla/api/ingredient/IIngredient)[][]       | array of an array of [IIngredient](/vanilla/api/ingredient/IIngredient) for inputs                 | false    |
| recipeFunction | [RecipeFunction2D](/vanilla/api/recipe/fun/RecipeFunction2D) | optional [RecipeFunction2D](/vanilla/api/recipe/fun/RecipeFunction2D) for more advanced conditions | true     |


:::

:::group{name=addShapedPattern}

```zenscript
CraftingTableRecipeManager.addShapedPattern(recipeName as string, output as IItemStack, pattern as string[], keys as IIngredient[string], recipeFunction as RecipeFunction2D)
```

|   Parameter    |                             Type                             | Optional |
|----------------|--------------------------------------------------------------|----------|
| recipeName     | string                                                       | false    |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                   | false    |
| pattern        | string[]                                                     | false    |
| keys           | [IIngredient](/vanilla/api/ingredient/IIngredient)[string]   | false    |
| recipeFunction | [RecipeFunction2D](/vanilla/api/recipe/fun/RecipeFunction2D) | true     |


:::

:::group{name=addShapeless}

```zenscript
CraftingTableRecipeManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunction1D)
```

|   Parameter    |                             Type                             | Optional |
|----------------|--------------------------------------------------------------|----------|
| recipeName     | string                                                       | false    |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                   | false    |
| ingredients    | [IIngredient](/vanilla/api/ingredient/IIngredient)[]         | false    |
| recipeFunction | [RecipeFunction1D](/vanilla/api/recipe/fun/RecipeFunction1D) | true     |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;

```zenscript
// CraftingTableRecipeManager.getAllRecipes() as stdlib.List<RecipeHolder<T>>

craftingTable.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;?

```zenscript
CraftingTableRecipeManager.getRecipeByName(name as string) as RecipeHolder<T>?
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CraftingTableRecipeManager.getRecipeMap() as RecipeHolder<T>[ResourceLocation]

craftingTable.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;

```zenscript
CraftingTableRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<RecipeHolder<T>>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=getRecipesMatching}

Return Type: stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;

```zenscript
CraftingTableRecipeManager.getRecipesMatching(predicate as Predicate<RecipeHolder<T>>) as stdlib.List<RecipeHolder<T>>
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt; |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// CraftingTableRecipeManager.remove(output as IIngredient)

craftingTable.remove(<tag:items:minecraft:wool>);
```

| Parameter |                        Type                        |     Description      |
|-----------|----------------------------------------------------|----------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

```zenscript
// CraftingTableRecipeManager.removeAll()

craftingTable.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

```zenscript
// CraftingTableRecipeManager.removeByInput(input as IItemStack)

craftingTable.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |      Description      |
|-----------|--------------------------------------------|-----------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
CraftingTableRecipeManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           |          Description           | Optional |           Default Value           |
|-----------|-------------------------|--------------------------------|----------|-----------------------------------|
| modid     | string                  | modid of the recipes to remove | false    |                                   |
| exclude   | Predicate&lt;string&gt; |                                | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
CraftingTableRecipeManager.removeByName(names as string[])
```

| Parameter |   Type   |             Description             |
|-----------|----------|-------------------------------------|
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// CraftingTableRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>)

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
// CraftingTableRecipeManager.removeMatching(predicate as Predicate<RecipeHolder<T>>)

craftingTable.removeMatching((holder) => "wool" in holder.id.path);
```

| Parameter |                                      Type                                       |                       Description                       |
|-----------|---------------------------------------------------------------------------------|---------------------------------------------------------|
| predicate | Predicate&lt;[RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt; | a predicate of RecipeHolder<T> to test recipes against. |


:::


## Properties

|    Name    |                                                            Type                                                            | Has Getter | Has Setter |             Description             |
|------------|----------------------------------------------------------------------------------------------------------------------------|------------|------------|-------------------------------------|
| allRecipes | stdlib.List&lt;[RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;&gt;                                          | true       | false      |                                     |
| recipeMap  | [RecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      | Returns a map of all known recipes. |

