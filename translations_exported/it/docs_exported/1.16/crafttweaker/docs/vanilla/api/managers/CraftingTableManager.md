# CraftingTableManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.CraftingTableManager;
```


## Interfacce Implementate
CraftingTableManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
// CraftingTableManager.addJSONRecipe(name as string, data as IData) as void

craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parametro | Tipo                             | Descrizione                     |
| --------- | -------------------------------- | ------------------------------- |
| nome      | string                           | name of the recipe              |
| data      | [IData](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addShaped}

Adds a shaped recipe to the crafting table

Return Type: void

```zenscript
// CraftingTableManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                             | Descrizione                                                                                            | Optional | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | no       |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | no       |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | no       |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | sì       |              |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table

Return Type: void

```zenscript
// CraftingTableManager.addShapedMirrored(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                             | Descrizione                                                                                            | Optional | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | no       |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | no       |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | no       |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | sì       |              |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table.

 This method lets you provide a [MirrorAxis](/vanilla/api/recipe/MirrorAxis), which can be used to set which axis the recipe is mirrored on. Use cases are making a recipe only be mirrored vertically or only horizontally.

Return Type: void

```zenscript
// CraftingTableManager.addShapedMirrored(recipeName as string, mirrorAxis as MirrorAxis, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix) as void

craftingTable.addShapedMirrored("recipe_name", MirrorAxis.DIAGONAL, <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                             | Descrizione                                                                                            | Optional | DefaultValue |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| recipeName     | string                                                           | name of the recipe to add.                                                                             | no       |              |
| mirrorAxis     | [MirrorAxis](/vanilla/api/recipe/MirrorAxis)                     | The axis that this recipe mirrored on.                                                                 | no       |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                      | output [IItemStack](/vanilla/api/items/IItemStack)                                                     | no       |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                          | no       |              |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | sì       |              |


:::

:::group{name=addShapeless}

Adds a shapeless recipe to the crafting table

Return Type: void

```zenscript
// CraftingTableManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunctionArray) as void

craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:items:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                           | Descrizione                                                                                          | Optional | DefaultValue |
| -------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------- | ------------ |
| recipeName     | string                                                         | name of the recipe to add.                                                                           | no       |              |
| output         | [IItemStack](/vanilla/api/items/IItemStack)                    | output [IItemStack](/vanilla/api/items/IItemStack)                                                   | no       |              |
| ingredients    | [IIngredient](/vanilla/api/items/IIngredient)[]                | array of [IIngredient](/vanilla/api/items/IIngredient) for inputs                                    | no       |              |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) for more advanced conditions | sì       |              |


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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


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

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


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

| Parametro | Tipo   | Descrizione                    |
| --------- | ------ | ------------------------------ |
| modid     | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CraftingTableManager.removeByModid(modid as string, exclude as RecipeFilter) as void

craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                             | Descrizione                           |
| --------- | ------------------------------------------------ | ------------------------------------- |
| modid     | string                                           | modid of the recipes to remove        |
| esclude   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | ricette da evitare di essere rimosse. |


:::

:::group{name=removeByName}

Remove recipe based on Registry name

Return Type: void

```zenscript
// CraftingTableManager.removeByName(name as string) as void

craftingTable.removeByName("minecraft:furnace");
```

| Parametro | Tipo   | Descrizione                       |
| --------- | ------ | --------------------------------- |
| nome      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex.

Return Type: void

```zenscript
// CraftingTableManager.removeByRegex(regex as string) as void

craftingTable.removeByRegex("\\d_\\d");
```

| Parametro | Tipo   | Descrizione            |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// CraftingTableManager.removeByRegex(regex as string, exclude as RecipeFilter) as void

craftingTable.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                             | Descrizione             |
| --------- | ------------------------------------------------ | ----------------------- |
| regex     | string                                           | regex to match against  |
| esclude   | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeRecipe}

Remove a recipe based on it's output.

Return Type: void

```zenscript
// CraftingTableManager.removeRecipe(output as IIngredient) as void

craftingTable.removeRecipe(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                                          | Descrizione          |
| --------- | --------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output.

Return Type: void

```zenscript
// CraftingTableManager.removeRecipe(output as IItemStack) as void

craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                        | Descrizione          |
| --------- | ------------------------------------------- | -------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// CraftingTableManager.removeRecipeByInput(input as IItemStack) as void

craftingTable.removeRecipeByInput(<item:minecraft:iron_ingot>);
```

| Parametro | Tipo                                        | Descrizione           |
| --------- | ------------------------------------------- | --------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | The input IItemStack. |


:::


## Proprietà

| Nome       | Tipo                                                                                                           | Ha Getter | Ha Setter | Descrizione                         |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------- | --------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | sì        | no        | No Description Provided             |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | sì        | no        | Returns a map of all known recipes. |

