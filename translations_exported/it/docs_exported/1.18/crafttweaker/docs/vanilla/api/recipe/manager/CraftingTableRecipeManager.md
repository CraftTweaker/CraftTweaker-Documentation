# CraftingTableRecipeManager

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.CraftingTableRecipeManager;
```


## Interfacce Implementate
CraftingTableRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in CraftingTableRecipeManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[CraftingRecipe](/vanilla/api/recipe/type/CraftingRecipe)&gt;

## Enum Constants

CraftingTableRecipeManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
CraftingTableRecipeManager.INSTANCE
```
## Metodi

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

| Parametro | Tipo                                 | Descrizione                     |
| --------- | ------------------------------------ | ------------------------------- |
| nome      | string                               | name of the recipe              |
| mapData   | [MapData](/vanilla/api/data/MapData) | data representing the json file |


:::

:::group{name=addShaped}

```zenscript
CraftingTableRecipeManager.addShaped(recipeName as string, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix)
```

| Parametro      | Tipo                                                                  | Optional |
| -------------- | --------------------------------------------------------------------- | -------- |
| recipeName     | string                                                                | no       |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                            | no       |
| ingredients    | [IIngredient](/vanilla/api/ingredient/IIngredient)[][]                | no       |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/func/RecipeFunctionMatrix) | sì       |


:::

:::group{name=addShapedMirrored}

Adds a mirrored shaped recipe to the crafting table.

 This method lets you provide a [MirrorAxis](/vanilla/api/recipe/MirrorAxis), which can be used to set which axis the recipe is mirrored on. Use cases are making a recipe only be mirrored vertically or only horizontally.

```zenscript
// CraftingTableRecipeManager.addShapedMirrored(recipeName as string, mirrorAxis as MirrorAxis, output as IItemStack, ingredients as IIngredient[][], recipeFunction as RecipeFunctionMatrix)

craftingTable.addShapedMirrored("recipe_name", MirrorAxis.DIAGONAL, <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:items:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                                  | Descrizione                                                                                                 | Optional |
| -------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- |
| recipeName     | string                                                                | name of the recipe to add.                                                                                  | no       |
| mirrorAxis     | [MirrorAxis](/vanilla/api/recipe/MirrorAxis)                          | The axis that this recipe mirrored on.                                                                      | no       |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                            | output [IItemStack](/vanilla/api/item/IItemStack)                                                           | no       |
| ingredients    | [IIngredient](/vanilla/api/ingredient/IIngredient)[][]                | array of an array of [IIngredient](/vanilla/api/ingredient/IIngredient) for inputs                          | no       |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/func/RecipeFunctionMatrix) | optional [RecipeFunctionMatrix](/vanilla/api/recipe/func/RecipeFunctionMatrix) for more advanced conditions | sì       |


:::

:::group{name=addShapedPattern}

```zenscript
CraftingTableRecipeManager.addShapedPattern(recipeName as string, output as IItemStack, pattern as string[], keys as IIngredient[string], recipeFunction as RecipeFunctionMatrix)
```

| Parametro      | Tipo                                                                  | Optional |
| -------------- | --------------------------------------------------------------------- | -------- |
| recipeName     | string                                                                | no       |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                            | no       |
| pattern        | string[]                                                              | no       |
| keys           | [IIngredient](/vanilla/api/ingredient/IIngredient)[string]            | no       |
| recipeFunction | [RecipeFunctionMatrix](/vanilla/api/recipe/func/RecipeFunctionMatrix) | sì       |


:::

:::group{name=addShapeless}

```zenscript
CraftingTableRecipeManager.addShapeless(recipeName as string, output as IItemStack, ingredients as IIngredient[], recipeFunction as RecipeFunctionArray)
```

| Parametro      | Tipo                                                                | Optional |
| -------------- | ------------------------------------------------------------------- | -------- |
| recipeName     | string                                                              | no       |
| output         | [IItemStack](/vanilla/api/item/IItemStack)                          | no       |
| ingredients    | [IIngredient](/vanilla/api/ingredient/IIngredient)[]                | no       |
| recipeFunction | [RecipeFunctionArray](/vanilla/api/recipe/func/RecipeFunctionArray) | sì       |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// CraftingTableRecipeManager.getAllRecipes() as stdlib.List<T>

craftingTable.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
CraftingTableRecipeManager.getRecipeByName(name as string) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Returns a map of all known recipes.

Returns: A Map of recipe name to recipe of all known recipes.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// CraftingTableRecipeManager.getRecipeMap() as T[ResourceLocation]

craftingTable.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
CraftingTableRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

Remove a recipe based on it's output.

```zenscript
// CraftingTableRecipeManager.remove(output as IIngredient)

craftingTable.remove(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                                               | Descrizione          |
| --------- | -------------------------------------------------- | -------------------- |
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

| Parametro | Tipo                                       | Descrizione           |
| --------- | ------------------------------------------ | --------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | The input IItemStack. |


:::

:::group{name=removeByModid}

Remove recipe based on Registry name modid

```zenscript
CraftingTableRecipeManager.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Descrizione                    | Optional | Default Value                     |
| --------- | ----------------------------------- | ------------------------------ | -------- | --------------------------------- |
| modid     | string                              | modid of the recipes to remove | no       |                                   |
| esclude   | Predicate&lt;string&gt; |                                | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Remove recipes based on Registry names

```zenscript
CraftingTableRecipeManager.removeByName(names as string[])
```

| Parametro | Tipo     | Descrizione                         |
| --------- | -------- | ----------------------------------- |
| names     | string[] | registry names of recipes to remove |


:::

:::group{name=removeByRegex}

Remove recipe based on regex with an added exclusion check, so you can remove the whole mod besides a few specified.

```zenscript
// CraftingTableRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>)

craftingTable.removeByRegex("\\d_\\d", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                | Descrizione            | Optional | Default Value                     |
| --------- | ----------------------------------- | ---------------------- | -------- | --------------------------------- |
| regex     | string                              | regex to match against | no       |                                   |
| esclude   | Predicate&lt;string&gt; |                        | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione                         |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        |                                     |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | Returns a map of all known recipes. |

