# CuttingBoard

Farmer's Delight Cutting Board recipes.

This class was added by a mod with mod-id `farmersdelight`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.farmersdelight.CuttingBoard;
```


## Implemented Interfaces
CuttingBoard implements the following interfaces. That means all methods defined in these interfaces are also available in CuttingBoard

- [IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methoden

:::group{name=addJSONRecipe}

Return Type: void

```zenscript
CuttingBoard.addJSONRecipe(name as string, data as IData) as void
```

| Parameter | Type                             | Beschreibung            |
| --------- | -------------------------------- | ----------------------- |
| name      | string                           | No Description Provided |
| data      | [IData](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=addRecipe}

Add a cutting board recipe.

Return Type: void

```zenscript
// CuttingBoard.addRecipe(name as string, input as IIngredient, results as IItemStack[], tool as IIngredient, sound as string) as void

<recipetype:farmersdelight:cutting>.addRecipe("cutting_board_test", <item:minecraft:gravel>, [<item:minecraft:flint>], <item:minecraft:string>, "minecraft:block.gravel.break");
```

| Parameter | Type                                          | Beschreibung              | Optional | DefaultValue |
| --------- | --------------------------------------------- | ------------------------- | -------- | ------------ |
| name      | string                                        | Name of the recipe to add | false    |              |
| input     | [IIngredient](/vanilla/api/items/IIngredient) | Input ingredient          | false    |              |
| results   | [IItemStack](/vanilla/api/items/IItemStack)[] | Output items              | false    |              |
| tool      | [IIngredient](/vanilla/api/items/IIngredient) | Tool ingredient           | false    |              |
| sound     | string                                        | Sound event name          | true     |              |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
// CuttingBoard.getAllRecipes() as stdlib.List<WrapperRecipe>

<recipetype:farmersdelight:cutting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
CuttingBoard.getRecipeByName(name as string) as WrapperRecipe
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)]

```zenscript
// CuttingBoard.getRecipeMap() as WrapperRecipe[MCResourceLocation]

<recipetype:farmersdelight:cutting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
CuttingBoard.getRecipesByOutput(output as IIngredient) as stdlib.List<WrapperRecipe>
```

| Parameter | Type                                          | Beschreibung            |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// CuttingBoard.removeAll() as void

<recipetype:farmersdelight:cutting>.removeAll();
```

:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CuttingBoard.removeByModid(modid as string) as void
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
CuttingBoard.removeByModid(modid as string, exclude as RecipeFilter) as void
```

| Parameter    | Type                                             | Beschreibung            |
| ------------ | ------------------------------------------------ | ----------------------- |
| modid        | string                                           | No Description Provided |
| ausschließen | [RecipeFilter](/vanilla/api/recipe/RecipeFilter) | No Description Provided |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
CuttingBoard.removeByName(name as string) as void
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
CuttingBoard.removeByRegex(regex as string) as void
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| regex     | string | No Description Provided |


:::

:::group{name=removeRecipe}

Return Type: void

```zenscript
CuttingBoard.removeRecipe(output as IIngredient) as void
```

| Parameter | Type                                          | Beschreibung            |
| --------- | --------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/items/IIngredient) | No Description Provided |


:::

:::group{name=removeRecipe}

Remove a cutting board recipe with multiple outputs.

Return Type: void

```zenscript
// CuttingBoard.removeRecipe(outputs as IItemStack[]) as void

<recipetype:farmersdelight:cutting>.removeRecipe([<item:farmersdelight:cooked_salmon_slice> * 2, <item:minecraft:bone_meal>]);
```

| Parameter | Type                                          | Beschreibung |
| --------- | --------------------------------------------- | ------------ |
| outputs   | [IItemStack](/vanilla/api/items/IItemStack)[] | Output items |


:::

:::group{name=removeRecipeByInput}

Return Type: void

```zenscript
CuttingBoard.removeRecipeByInput(input as IItemStack) as void
```

| Parameter | Type                                        | Beschreibung            |
| --------- | ------------------------------------------- | ----------------------- |
| input     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::


## Properties

| Name       | Type                                                                                                           | Has Getter | Has Setter | Beschreibung            |
| ---------- | -------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| allRecipes | stdlib.List&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;                              | true       | false      | No Description Provided |
| recipeMap  | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[[MCResourceLocation](/vanilla/api/util/MCResourceLocation)] | true       | false      | No Description Provided |

