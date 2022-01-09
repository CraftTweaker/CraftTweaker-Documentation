# CraftingTableRecipeManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.CraftingTableRecipeManager;
```


## Implemented Interfaces
CraftingTableRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[CraftingRecipe](/vanilla/api/recipe/type/CraftingRecipe)&gt;

## Enum Constants

CraftingTableRecipeManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
CraftingTableRecipeManager.INSTANCE
```
## Methods

:::group{name=addJsonRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack json, this effectively allows you to register recipes for any DataPack supporting RecipeType systems.

Return Type: void

```zenscript
CraftingTableRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | name of the recipe |
| mapData | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addShaped}

Return Type: void

```zenscript
CraftingTableRecipeManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | No Description Provided | false |  |
| output | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided | false |  |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[][] | No Description Provided | false |  |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/function/RecipeFunctionMatrix) | No Description Provided | true |  |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table.

 This method lets you provide a [MirrorAxis](/vanilla/api/recipe/MirrorAxis), which can be used to set which axis the recipe is mirrored on.
 Use cases are making a recipe only be mirrored vertically or only horizontally.

Return Type: void

```zenscript
// CraftingTableRecipeManager.addShapedMirrored(recipeName as string, mirrorAxis as MirrorAxis, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

myCraftingTableRecipeManager.addShapedMirrored("recipe_name", MirrorAxis.DIAGONAL, <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | name of the recipe to add. | false |  |
| mirrorAxis | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | The axis that this recipe mirrored on. | false |  |
| output | [IItemStack](/vanilla/api/item/IItemStack) | output [IItemStack](/vanilla/api/item/IItemStack) | false |  |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[][] | array of an array of [IIngredient](/vanilla/api/ingredient/IIngredient) for inputs | false |  |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/function/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/function/RecipeFunctionMatrix) for more advanced conditions | true |  |


:::

:::group{name=addShapedPattern}

Return Type: void

```zenscript
CraftingTableRecipeManager.addShapedPattern(recipeName as string, output as IItemStack, pattern as string[], keys as IIngredient[string], recipeFunction as RecipeFunctionMatrix) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | No Description Provided | false |  |
| output | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided | false |  |
| pattern | string[] | No Description Provided | false |  |
| keys | [IIngredient](/vanilla/api/ingredient/IIngredient)[string] | No Description Provided | false |  |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/function/RecipeFunctionMatrix) | No Description Provided | true |  |


:::

:::group{name=addShapeless}

Return Type: void

```zenscript
CraftingTableRecipeManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunctionArray) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | No Description Provided | false |  |
| output | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided | false |  |
| ingredients | [IIngredient](/vanilla/api/ingredient/IIngredient)[] | No Description Provided | false |  |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/function/RecipeFunctionArray) | No Description Provided | true |  |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CraftingTableRecipeManager.getAllRecipes() as stdlib.List<T>

myCraftingTableRecipeManager.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
CraftingTableRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CraftingTableRecipeManager.getRecipeMap() as T[ResourceLocation]

myCraftingTableRecipeManager.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CraftingTableRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// CraftingTableRecipeManager.remove(output as IIngredient) as void

myCraftingTableRecipeManager.remove(<tag:items:minecraft:wool>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/ingredient/IIngredient) | output of the recipe |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// CraftingTableRecipeManager.removeAll() as void

myCraftingTableRecipeManager.removeAll();
```

:::

:::group{name=removeByInput}

Removes all recipes where the input contains the given IItemStack.

Return Type: void

```zenscript
// CraftingTableRecipeManager.removeByInput(input as IItemStack) as void

myCraftingTableRecipeManager.removeByInput(<item:minecraft:iron_ingot>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
CraftingTableRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| modid | string | modid of the recipes to remove | false |  |
| exclude | Predicate&lt;string&gt; | No Description Provided | true | (name) => false |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// CraftingTableRecipeManager.removeByName(name as string) as void

myCraftingTableRecipeManager.removeByName("minecraft:furnace");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CraftingTableRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void

myCraftingTableRecipeManager.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| regex | string | regex to match against | false |  |
| exclude | Predicate&lt;string&gt; | No Description Provided | true | (name) => false |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allRecipes | stdlib.List&lt;T&gt; | true | false | No Description Provided |
| recipeMap | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false | Returns a map of all known recipes. |

