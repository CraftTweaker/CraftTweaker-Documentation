# StoneCutterManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.StoneCutterManager;
```


## Interfacce Implementate
StoneCutterManager implements the following interfaces. That means all methods defined in these interfaces are also available in StoneCutterManager

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi

:::group{name=addJSONRecipe}

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

Return Type: void

```zenscript
// StoneCutterManager.addJSONRecipe(name as string, data as IData) as void

stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parametro | Tipo                             | Descrizione                     |
| --------- | -------------------------------- | ------------------------------- |
| nome      | string                           | name of the recipe              |
| data      | [IData](/vanilla/api/data/IData) | data representing the json file |


:::

:::group{name=addRecipe}

Adds a recipe to the stone cutter

Return Type: void

```zenscript
// StoneCutterManager.addRecipe(recipeName as string, output as IItemStack, input as IIngredient) as void

stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:items:minecraft:wool>);
```

| Parametro  | Tipo                                          | Descrizione                                         |
| ---------- | --------------------------------------------- | --------------------------------------------------- |
| recipeName | string                                        | name of the recipe                                  |
| output     | [IItemStack](/vanilla/api/items/IItemStack)   | output [IItemStack](/vanilla/api/items/IItemStack)  |
| input      | [IIngredient](/vanilla/api/items/IIngredient) | input [IIngredient](/vanilla/api/items/IIngredient) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// StoneCutterManager.getAllRecipes() as stdlib.List<WrapperRecipe>

stoneCutter.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
StoneCutterManager.getRecipeByName(name as string) as WrapperRecipe
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
// StoneCutterManager.getRecipeMap() as WrapperRecipe[MCResourceLocation]

stoneCutter.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
StoneCutterManager.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Remove all recipes in this registry

Return Type: void

```zenscript
// StoneCutterManager.removeAll() as void

stoneCutter.removeAll();
```

:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

Return Type: void

```zenscript
// StoneCutterManager.removeByModid(modid as string) as void

stoneCutter.removeByModid("minecraft");
```

| Parametro | Tipo   | Descrizione                    |
| --------- | ------ | ------------------------------ |
| modid     | string | modid of the recipes to remove |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// StoneCutterManager.removeByModid(modid as string, exclude as RecipeFilter) as void

stoneCutter.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
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
// StoneCutterManager.removeByName(name as string) as void

stoneCutter.removeByName("minecraft:furnace");
```

| Parametro | Tipo   | Descrizione                       |
| --------- | ------ | --------------------------------- |
| nome      | string | registry name of recipe to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex.

Return Type: void

```zenscript
// StoneCutterManager.removeByRegex(regex as string) as void

stoneCutter.removeByRegex("\\d_\\d");
```

| Parametro | Tipo   | Descrizione            |
| --------- | ------ | ---------------------- |
| regex     | string | regex to match against |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

Return Type: void

```zenscript
// StoneCutterManager.removeByRegex(regex as string, exclude as RecipeFilter) as void

stoneCutter.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
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
// StoneCutterManager.removeRecipe(output as IIngredient) as void

stoneCutter.removeRecipe(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                                          | Descrizione          |
| --------- | --------------------------------------------- | -------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | output of the recipe |


:::

:::group{name=removeRecipe}

Removes a recipe based on it's output.

Return Type: void

```zenscript
// StoneCutterManager.removeRecipe(output as IItemStack) as void

stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                        | Descrizione          |
| --------- | ------------------------------------------- | -------------------- |
| output    | [IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |


:::

:::group{name=removeRecipeByInput}

Removes all recipes who's input contains the given IItemStack.

Return Type: void

```zenscript
// StoneCutterManager.removeRecipeByInput(input as IItemStack) as void

stoneCutter.removeRecipeByInput(<item:minecraft:iron_ingot>);
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

