# CraftingTableManager



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.CraftingTableManager;
```


## Implemented Interfaces
CraftingTableManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
// CraftingTableManager.addJSONRecipe(name as string, data as IData) as void

craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | name of the recipe |
| data | [IData](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addShaped}

Adds a shaped recipe to the crafting table

Return Type: void

```zenscript
// CraftingTableManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | name of the recipe to add. | false |  |
| output | [IItemStack](/vanilla/api/items/IItemStack) | output [IItemStack](/vanilla/api/items/IItemStack) | false |  |
| ingredients | [IIngredient](/vanilla/api/items/IIngredient)[][] | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs | false |  |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true |  |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table

Return Type: void

```zenscript
// CraftingTableManager.addShapedMirrored(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | name of the recipe to add. | false |  |
| output | [IItemStack](/vanilla/api/items/IItemStack) | output [IItemStack](/vanilla/api/items/IItemStack) | false |  |
| ingredients | [IIngredient](/vanilla/api/items/IIngredient)[][] | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs | false |  |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true |  |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table.

 This method lets you provide a [MirrorAxis](/vanilla/api/recipe/MirrorAxis), which can be used to set which axis the recipe is mirrored on.
 Use cases are making a recipe only be mirrored vertically or only horizontally.

Return Type: void

```zenscript
// CraftingTableManager.addShapedMirrored(recipeName as string, mirrorAxis as MirrorAxis, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

craftingTable.addShapedMirrored("recipe_name", MirrorAxis.DIAGONAL, <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | name of the recipe to add. | false |  |
| mirrorAxis | [MirrorAxis](/vanilla/api/recipe/MirrorAxis) | The axis that this recipe mirrored on. | false |  |
| output | [IItemStack](/vanilla/api/items/IItemStack) | output [IItemStack](/vanilla/api/items/IItemStack) | false |  |
| ingredients | [IIngredient](/vanilla/api/items/IIngredient)[][] | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs | false |  |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true |  |


:::

:::group{name=addShapeless}

Adds a shapeless recipe to the crafting table

Return Type: void

```zenscript
// CraftingTableManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunctionArray) as void

craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:items:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter | Type | Description | Optional | DefaultValue |
|-----------|------|-------------|----------|--------------|
| recipeName | string | name of the recipe to add. | false |  |
| output | [IItemStack](/vanilla/api/items/IItemStack) | output [IItemStack](/vanilla/api/items/IItemStack) | false |  |
| ingredients | [IIngredient](/vanilla/api/items/IIngredient)[] | array of [IIngredient](/vanilla/api/items/IIngredient) for inputs | false |  |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) for more advanced conditions | true |  |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// CraftingTableManager.getAllRecipes() as stdlib.List<WrapperRecipe>

craftingTable.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
CraftingTableManager.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// CraftingTableManager.getRecipeMap() as WrapperRecipe[MCResourceLocation]

craftingTable.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CraftingTableManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// CraftingTableManager.removeAll() as void

craftingTable.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
// CraftingTableManager.removeByModid(modid as string) as void

craftingTable.removeByModid("minecraft");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CraftingTableManager.removeByModid(modid as string, exclude as RecipeFilter) as void

craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modid | string | modid of the recipes to remove |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | recipes to exlude from being removed. |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// CraftingTableManager.removeByName(name as string) as void

craftingTable.removeByName("minecraft:furnace");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex.

Return Type: void

```zenscript
// CraftingTableManager.removeByRegex(regex as string) as void

craftingTable.removeByRegex("\\d_\\d");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | regex to match against |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CraftingTableManager.removeByRegex(regex as string, exclude as RecipeFilter) as void

craftingTable.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | regex to match against |
| exclude | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// CraftingTableManager.removeRecipe(output as IIngredient) as void

craftingTable.removeRecipe(<tag:items:minecraft:wool>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/items/IIngredient) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output.

Return Type: void

```zenscript
// CraftingTableManager.removeRecipe(output as IItemStack) as void

craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// CraftingTableManager.removeRecipeByInput(input as IItemStack) as void

craftingTable.removeRecipeByInput(<item:minecraft:iron_ingot>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| input | [IItemStack](/vanilla/api/items/IItemStack) | The input IItemStack. |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt; | true | false | No Description Provided |
| recipeMap | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true | false | Returns a map of all known recipes. |

